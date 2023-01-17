const wait = function(totalWaitTime, timeElapsed = 0) {
    if (timeElapsed < totalWaitTime) {
        return;
    }
    setTimeout(wait, 1000, totalWaitTime, timeElapsed + 1);
};

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffleArray(array) {
    for (let i = 0; i < array.length; ++i) {
        const j = rand(i, array.length - 1);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

async function getProblems(problemRating, userHandle) {
    const problems = (await (await fetch("https://codeforces.com/api/problemset.problems")).json()).result.problems.filter(problem => problem.rating == problemRating);
    
    wait(3);

    const userSubmissions = (await (await fetch("https://codeforces.com/api/user.status?handle=kachhuaa")).json()).result;
    const solvedProblems = new Set();
    const attemptedProblems = new Set();

    for (const submission of userSubmissions) {
        const problemId = submission.problem.contestId.toString() + submission.problem.index;
        attemptedProblems.add(problemId);
        if (submission.verdict === "OK")
            solvedProblems.add(problemId);
    }

    const processedProblems = problems.map((problem) => {
        const processed = {
            id: problem.contestId.toString() + problem.index,
            probName: problem.name,
            solvedStatus: "unattempted",
        };

        if (solvedProblems.has(processed.id))
            processed.solvedStatus = "accepted";
        else if (attemptedProblems.has(processed.id))
            processed.solvedStatus = "failed";
        return processed;
    });
    shuffleArray(processedProblems);

    return processedProblems.slice(0, 100);
}

export default getProblems;