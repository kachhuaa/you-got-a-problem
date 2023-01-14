import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    loginFormStyle = {
        display: "flex",
        flex: "1 1 auto",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginTop: "3vh",
    };

    loginFieldStyle = {
        display: "flex",
        flex: "1 1 auto",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
    };
    
    loginLabelStyle = {
        display: "flex",
        flex: "0 0 auto",
        flexFlow: "row-reverse nowrap",
        paddingRight: "3vh",
        width: "30%",
        fontSize: "2.5vh",
    };
    
    loginInputStyle = {
        display: "flex",
        flex: "0 0 auto",
        width: "40%",
        fontSize: "2.5vh",
    };

    loginTextInputStyle = { 
        width: "100%", 
        aspectRatio: "12 / 1",
        fontSize: "2vh",
    };

    loginButtonStyle = {
        height: "3.5vh", 
        aspectRatio: "3 / 1", 
        fontSize: "2vh", 
        fontFamily: "JetBrains Mono, monospace",
        fontWeight: "400",
    };

    loginFooterStyle = { 
        display: "flex", 
        flex: "1 1 auto", 
        flexFlow: "row-reverse nowrap", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        fontSize: "2vh", 
        marginRight: "3vh" 
    };

    handleChange(evt) {
        this.setState({ 
            [evt.target.name]: evt.target.value,
        });
        evt.preventDefault();
    }

    handleSubmit(evt) {

    }

    render() {
        return (
            <form style={this.loginFormStyle}>
                <div style={this.loginFieldStyle}>
                    <div style={this.loginLabelStyle}>
                        <label>Codeforces Handle:</label>
                    </div>
                    <div style={this.loginInputStyle}>
                        <input style={this.loginTextInputStyle} type="text" name="handle" value={this.state.handle} onChange={this.handleChange}></input>
                    </div>
                </div>
                <div style={this.loginFieldStyle}>
                    <div style={this.loginLabelStyle}>
                        <label>Password:</label>
                    </div>
                    <div style={this.loginInputStyle}>
                        <input style={this.loginTextInputStyle} type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                </div>
                <div style={this.loginFieldStyle}>
                    <input style={this.loginButtonStyle} type="submit" value="Login" onClick={this.handleSubmit}></input>
                </div>
                <div style={this.loginFooterStyle}>
                    <label style={ { cursor: "pointer" } }>I forgot my password :(</label>
                </div>
            </form>
        );
    }
}

export default LoginForm;