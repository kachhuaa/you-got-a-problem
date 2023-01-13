import Title from './title'
import StatWindow from './statWindow'
import Emoji from './emoji'

import MediaQuery from 'react-responsive'

const contentStyle = {
    alignItems: "center",
    display: "flex",
    flexFlow: "row nowrap",
    height: "calc(100% - 11vh)",
    justifyContent: "space-between",
    // gap: "3rem",
    gap: "5vh",
    margin: "3.5vh",
};

function Content(props) {
    const contentStyleMobile = contentStyle;
    contentStyleMobile.flexFlow = "column nowrap";
    return (
        <div style={contentStyle}>
            <div style={ { display: "flex", flex: "1 1 auto", flexFlow: "column nowrap", justifyContent: "space-between", alignItems: "center" } }>
                <Title type="big" fontSize="11.5vh" lineHeight="17vh" />
                <Emoji fontSize="30vh" />
            </div>
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