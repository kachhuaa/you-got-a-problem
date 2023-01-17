import React from 'react';
import NavLink from './navLink'

const dropDownStyle = {
    display: "flex",
    flex: "1 1 auto",
    alignItems: "stretch",
};

const dropDownLinkStyle = {
    display: "flex",
    flex: "1 1 auto",
    alignItems: "stretch",
    borderLeftWidth: "0.25vh",
    borderLeftStyle: "solid",
    // borderTopWidth: "0.25vh",
    // borderTopStyle: "solid",
    borderRightWidth: "0.25vh",
    borderRightStyle: "solid",
};

const dropDownContentStyle = {
    // display: "none",
    // flex: "1 1 auto",
    // alignItems: "stretch"
    position: "absolute",
    top: "7vh",
    right: "7.5vh",
    height: "4vh",
    width: "30vh",
    backgroundColor: "#ffecef",
    // borderLeft: "0.25vh solid #251b37",
    // borderRight: "0.25vh solid #251b37",
    // borderBottom: "0.25vh solid #251b37",
    borderLeft: "0.25vh solid #533e6d",
    borderRight: "0.25vh solid #533e6d",
    borderBottom: "0.25vh solid #533e6d",
    borderRadius: "0 0 0.5vh 0.5vh",
    flexFlow: "row nowrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "2vh 0",
};

const difficultyInputStyle = {
    width: "17vh",
    // height: "3vh",
    marginLeft: "3vh",
    fontSize: "2.5vh",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "400",
};

const difficultySubmitStyle = {
    width: "4.5vh",
    // height: "3vh",
    // borderStyle: "hidden",
    textAlign: "center",
    marginRight: "3vh",
    fontSize: "2.5vh",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "400",
};

class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            difficultyValue: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
        evt.preventDefault();
    }

    handleSubmit(evt) {
        this.props.getProblemsWithDifficulty(parseInt(this.state.difficultyValue));
        evt.preventDefault();
    }

    render() {
        return (
            <div class="dropDown" style={dropDownStyle}>
                <div class="dropDownLink" style={dropDownLinkStyle}>
                    <NavLink label="Choose Difficulty" />
                </div>
                <div class="dropDownContent" style={dropDownContentStyle}>
                    <input style={difficultyInputStyle} type="text" name="difficultyValue" value={this.state.difficultyValue} onChange={this.handleChange}></input>
                    <input style={difficultySubmitStyle} type="submit" value="✔️" onClick={this.handleSubmit}></input>
                </div>
            </div>
        );
    }
}

export default DropDown;