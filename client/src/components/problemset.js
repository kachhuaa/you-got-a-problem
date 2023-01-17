import React from 'react'
import getProblems from './problemRetriever'

const problemsetStyle = {
    display: "flex",
    flex: "1 1 auto",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginLeft: "5vh",
    fontFamily: "Work Sans, sans-serif",
};

const titleStyle = {
    display: "flex",
    flex: "0 0 auto",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "3vh",
    height: "3vh",
    margin: "0 0 1.5vh",
    fontWeight: "800",
};

const contentAlignment = {
    display: "flex",
    flex: "0 0 auto",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    overflowY: "auto",
    height: "72vh",
};

const tableStyle = {
    display: "flex",
    flex: "1 1 auto",
    flexFlow: "column nowrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
    border: "0.5vh solid #251b37",
    cursor: "pointer",
};

const headingRowStyle = {
    display: "flex", 
    flex: "1 1 auto", 
    flexFlow: "row nowrap", 
    justifyContent: "flex-start", 
    alignItems: "stretch", 
    fontWeight: "800", 
    textAlign: "center", 
    fontSize: "2.5vh",
    padding: "1vh 0",
    borderBottom: "0.3vh solid #251b37",
};

const headingIdStyle = {
    display: "flex", 
    flex: "0 0 auto", 
    flexFlow: "column nowrap", 
    alignItems: "stretch",
    width: "10vh",
    textAlign: "left",
    marginLeft: "2vh",
};

const headingNameStyle = {
    display: "flex", 
    flex: "1 1 auto", 
    flexFlow: "column nowrap", 
    alignItems: "stretch",
    marginLeft: "5vh",
    textAlign: "left",
};

const dataRowStyle = {
    display: "flex", 
    flex: "1 1 auto", 
    flexFlow: "row nowrap", 
    justifyContent: "flex-start", 
    alignItems: "stretch", 
    textAlign: "center", 
    fontWeight: "400", 
    fontSize: "2vh",
    borderRight: "0.3vh solid #251b37",
    borderBottom: "0.3vh solid #251b37",
};

const dataLinkStyle = {
    display: "flex",
    flex: "1 1 auto",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: "1vh 0",
};

const dataIdStyle = {
    display: "flex", 
    flex: "0 0 auto", 
    justifyContent: "flex-start", 
    flexFlow: "column nowrap", 
    alignItems: "stretch", 
    width: "10vh",
    textAlign: "left",
    borderCollapse: "collapse",
    marginLeft: "2vh",
};

const dataNameStyle = {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "flex-start",
    flexFlow: "column nowrap",
    alignItems: "stretch",
    textAlign: "left",
    marginLeft: "5vh",
};

class Problemset extends React.Component {
    constructor(props) {
        super(props);
    }

    getRowStyle(problemSolvedStatus, isLastRow, isPlaceholder) {
        const curRowStyle = structuredClone(dataRowStyle);
        if (problemSolvedStatus == 'accepted')
            curRowStyle.backgroundColor = '#b8ffb8';
        else if (problemSolvedStatus == 'failed')
            curRowStyle.backgroundColor = '#fdb4b4';
        else
            curRowStyle.backgroundColor = 'transparent';
        
        if (isLastRow)
            curRowStyle.borderBottom = "0 none #251b37";
        
        if (isPlaceholder)
            curRowStyle.padding = "1vh 0";

        return curRowStyle;
    }

    getTableRows() {
        return this.props.problemSetDesc.map((elem, idx, array) => {
            const curRowStyle = this.getRowStyle(elem.solvedStatus, idx === array.length - 1, elem.id === "###");
            
            const problemLink = "https://www.codeforces.com/problemset/problem/" + elem.id.substring(0, elem.id.length - 1) + "/" + elem.id[elem.id.length - 1];

            if (elem.id === "###") {
                return (
                    <tr className="tableRow" style={ curRowStyle }>
                        <td style={ dataIdStyle }>{ elem.id }</td>
                        <td style={ dataNameStyle }>{ elem.probName }</td>
                    </tr>
                );
            }

            return (
                <tr className="tableRow" style={ curRowStyle }>
                    <a style={ dataLinkStyle } href={problemLink} target="_blank" rel="noopener noreferrer">
                        <td style={ dataIdStyle }>{elem.id}</td>
                        <td style={ dataNameStyle }>{elem.probName}</td>
                    </a>
                </tr>
            );
        });
    }

    getSolvedCount() {
        return this.props.problemSetDesc.reduce((count, problem) => problem.solvedStatus === "accepted" ? ++count : count, 0);
    }

    render() {
        return (
            <div style={problemsetStyle}>
                <div style={titleStyle} >
                    <span style={ { color: "#251b37" } }>
                        Difficulty&nbsp;
                    </span>
                    <span style={ { color: "#7f0068" } }>
                        { this.props.problemSetDifficulty }
                    </span>
                    <span style={ { color: "#251b37" } }>
                        &nbsp;- Solved&nbsp;
                    </span>
                    <span style={ { color: "#7f0068" } }>
                        { this.getSolvedCount() }
                    </span>
                    <span style={ { color: "#251b37" } }>
                        &nbsp;of 100
                    </span>
                </div>
                <table style={ tableStyle }>
                    <tr style={ headingRowStyle }>
                        <th style={ headingIdStyle }>#</th>
                        <th style={ headingNameStyle }>Name</th>
                    </tr>
                    <div style={ contentAlignment }>{ this.getTableRows() }</div>
                </table>
            </div>
        );
    }
};

export default Problemset;