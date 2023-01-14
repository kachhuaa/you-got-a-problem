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

const dropDownContent = {
    // display: "none",
    // flex: "1 1 auto",
    // alignItems: "stretch"
    position: "absolute",
    top: "7vh",
    right: "0",
    height: "10vh",
    width: "40vh",
    backgroundColor: "#ffecef",
    // borderLeft: "0.25vh solid #251b37",
    // borderRight: "0.25vh solid #251b37",
    // borderBottom: "0.25vh solid #251b37",
    borderLeft: "0.25vh solid #533e6d",
    borderRight: "0.25vh solid #533e6d",
    borderBottom: "0.25vh solid #533e6d",
    borderRadius: "0 0 0.5vh 0.5vh",
};

const sliderStyle = {

};

function DropDown(props) {
    return (
        <div class="dropDown" style={dropDownStyle}>
            <div class="dropDownLink" style={dropDownLinkStyle}>
                <NavLink label="Choose Difficulty" />
            </div>
            <div class="dropDownContent" style={dropDownContent}>
                <div class="slider" style={sliderStyle}>

                </div>
            </div>
        </div>
    );
}

export default DropDown;