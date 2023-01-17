import Navbar from './navbar'
import Content from './content'
import '../styles/main.css'
import React from 'react';
import getProblems from './problemRetriever'

const appWindowStyle = {
    backgroundColor: "#ffecef",
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: "2rem"
    // flexGrow: "1",
};

const dummyNavbarAlignment = {
    // backgroundColor: "#533e6d",
    display: "flex",
    // flexFlow: "row nowrap",
    // justifyContent: "space-between",
    // alignItems: "stretch",
    flex: "0 0 auto",
    height: "7vh",
    // textAlign: "center",
    width: "100%",
};

const navbarAlignment = {
    flex: "0 0 auto",
    // height: "auto",
    width: "100%",
};

const contentAlignment = {
    display: "flex",
    flex: "1 1 auto",
    // height: "auto",
    width: "100%",
    // padding: "2rem",
    flexFlow: "column nowrap",
    margin: "5vh auto 0",
};

class AppWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            problemSetDesc: [],
            problemSetDifficulty: 1300,
        };

        for (let i = 0; i < 50; ++i) {
            this.loadingProblems.push({
                id: "###",
                // name: ['A Lonely Light', 'Alice and Bob', 'Too Easy for U', 'Traveling Salesperson'][rand(0, 3)],
                // solvedStatus: ['accepted', 'failed', 'unattempted'][rand(0, 2)]
                probName: 'LOADING...',
                solvedStatus: 'unattempted',
            });
        }

        this.state.problemSetDesc = this.loadingProblems;
    }

    loadingProblems = []

    async componentDidMount() {
        await this.getProblemsWithDifficulty(1300);
    }

    getProblemsWithDifficulty = async (difficultyValue) => {
        this.setState({
            problemSetDesc: this.loadingProblems,
            problemSetDifficulty: difficultyValue,
        });

        this.setState({ 
            problemSetDesc: await getProblems(difficultyValue, "kachhuaa"),
            problemSetDifficulty: difficultyValue,
        });
    }

    render() {
        return (
            <div style={appWindowStyle}>
                {/* <h1>AppWindow.render() called!</h1> */}
                <div style={navbarAlignment}>
                    <Navbar getProblemsWithDifficulty={ this.getProblemsWithDifficulty }/>
                </div>
                <div style={dummyNavbarAlignment} />
                <div style={contentAlignment}>
                    <Content problemSetDifficulty={ this.state.problemSetDifficulty } problemSetDesc={ this.state.problemSetDesc }/>
                </div>
            </div>
        );
    }
}

export default AppWindow;