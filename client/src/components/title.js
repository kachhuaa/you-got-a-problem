function Title(props) {
    const titleStyle = {
        fontFamily: "Orbitron, Arial, sans-serif",
        fontSize: "10vh",
        lineHeight: "12vh",
        textAlign: "left",
    };

    if (props.fontSize)
        titleStyle.fontSize = props.fontSize;
    if (props.lineHeight)
        titleStyle.lineHeight = props.lineHeight;

    return (
        <h1 style={titleStyle}>
            <span style={ { color: "#251b37" } }>
                You
                <br />
                Got A
                <br />
                Problem
            </span>
            <span style={ { color: "#7f0068" } }>
                ?
            </span>
        </h1>
    );
}

export default Title;