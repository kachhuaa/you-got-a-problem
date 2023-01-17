import ComputerScreen from './computerScreen'
import Title from './title'
import Problemset from './problemset'

// import MediaQuery from 'react-responsive'

const contentStyle = {
    alignItems: "flex-start",
    display: "flex",
    flex: "1 1 auto",
    // height: "calc(100% - 11vh)",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    // gap: "3rem",
    margin: "0 7.5vh",
};

const titleAlignment = {
    display: "flex",
    flex: "0 0 auto",
    width: "70vh",
    marginTop: "13.5vh",
};

function Content(props) {
    const contentStyleMobile = structuredClone(contentStyle);
    contentStyleMobile.flexFlow = "column nowrap";

    // return (
    //     <div style={ { display: "flex", flex: "1 1 auto", flexFlow: "column nowrap", justifyContent: "space-between", alignItems: "center" } }>
    //         <Title type="big" textAlign="center" fontSize="11.5vh" lineHeight="17vh" />
    //         <Emoji fontSize="30vh" />
    //     </div>
    // );

    return (
        <div style={contentStyle}>
            <div style={ titleAlignment }>
                <Title type="small" textAlign="left" fontSize="11.5vh" lineHeight="17vh" />
            </div>
            {/* <ComputerScreen /> */}
            <Problemset />
        </div>
    );
    // return (
    //         <MediaQuery minWidth={500}>
    //             <div style={contentStyle}>
    //                 <div style={ { flexFlow: "column nowrap", justifyContent: "space-between", alignItems: "center" } }>
    //                     <Title fontSize="11.5vh" lineHeight="15vh"/>
    //                     <Emoji fontSize="30vh" />
    //                 </div>
    //                 <StatWindow />
    //             </div>
    //         </MediaQuery>
    // );
}

export default Content;