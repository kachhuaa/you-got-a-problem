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
    border: "3px solid #251b37",
    // borderRight: "2px solid #251b37",
    // borderBottom: "2px solid #251b37",
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
    // border: "1px solid #b7b7b7",
    // borderLeft: "2px solid #b7b7b7",
    borderBottom: "2px solid #251b37",
    // borderTop: "2px solid #b7b7b7",
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
    padding: "1vh 0",
    // border: "1px solid #b7b7b7",
    // borderLeft: "2px solid #b7b7b7",
    borderRight: "2px solid #251b37",
    borderBottom: "2px solid #251b37",
    // borderBottom: "2px solid #b7b7b7",
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
        
        this.state = {
            problems: [],
        };

        for (let i = 0; i < 50; ++i) {
            this.state.problems.push({
                id: "###",
                // name: ['A Lonely Light', 'Alice and Bob', 'Too Easy for U', 'Traveling Salesperson'][rand(0, 3)],
                // solvedStatus: ['accepted', 'failed', 'unattempted'][rand(0, 2)]
                probName: 'LOADING...',
                solvedStatus: 'unattempted',
            });
        }
    }

    async componentDidMount() {
        this.setState({ problems: await getProblems(1800) });
    }

    render() {
        return (
            <div style={problemsetStyle}>
                <div style={titleStyle} >
                    <span style={ { color: "#251b37" } }>
                        Difficulty&nbsp;
                    </span>
                    <span style={ { color: "#7f0068" } }>
                        1800
                    </span>
                    <span style={ { color: "#251b37" } }>
                        &nbsp;- Solved&nbsp;
                    </span>
                    <span style={ { color: "#7f0068" } }>
                        75
                    </span>
                    <span style={ { color: "#251b37" } }>
                        &nbsp;of 100
                    </span>
                </div>
                    <table style={tableStyle}>
                        <tr style={ headingRowStyle }>
                            <th style={ headingIdStyle }>#</th>
                            <th style={ headingNameStyle }>Name</th>
                        </tr>
                        <div style={contentAlignment}>
                            {
                                this.state.problems.map((elem, idx, array) => {
                                    const curRowStyle = structuredClone(dataRowStyle);
                                    if (elem.solvedStatus == 'accepted')
                                        curRowStyle.backgroundColor = '#b8ffb8';
                                    else if (elem.solvedStatus == 'failed')
                                        curRowStyle.backgroundColor = '#fdb4b4';
                                    else
                                        curRowStyle.backgroundColor = 'transparent';
                                    
                                    if (idx == array.length - 1)
                                        curRowStyle.borderBottom = "0 none #251b37";

                                    return (
                                        <tr style={ curRowStyle }>
                                            <td style={ dataIdStyle }>{elem.id}</td>
                                            <td style={ dataNameStyle }>{elem.probName}</td>
                                        </tr>
                                    );
                                })
                            }
                        </div>
                    </table>
            </div>
        );
    }
};

export default Problemset;