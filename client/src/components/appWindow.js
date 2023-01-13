import Navbar from './navbar'
import Content from './content'
import '../styles/main.css'

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
    alignSelf: "center",
    flex: "0 0 auto",
    // height: "auto",
    width: "100%",
};

const contentAlignment = {
    alignSelf: "center",
    display: "flex",
    flex: "1 1 auto",
    // height: "auto",
    width: "100%",
    // padding: "2rem",
    flexFlow: "column nowrap",
    margin: "5vh auto 0",
};

function AppWindow(props) {
    return (
        <div style={appWindowStyle}>
            {/* <h1>AppWindow.render() called!</h1> */}
            <div style={navbarAlignment}>
                <Navbar />
            </div>
            <div style={dummyNavbarAlignment} />
            <div style={contentAlignment}>
                <Content />
            </div>
        </div>
    );
}

export default AppWindow;