function NavLink(props) {
    const navLinkStyle = {
        width: "20vh",
        fontSize: "2vh",
        border: "none",
        fontFamily: ["Chakra Petch", "sans-serif"],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    };

    if (props.height) {
        navLinkStyle.height = props.height;
    }
    if (props.width) {
        navLinkStyle.width = props.width;
    }

    return (
        <div class="navLink" style={navLinkStyle}>
            {props.label}
        </div>
    );
}

export default NavLink;