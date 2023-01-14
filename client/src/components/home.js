import Title from './title'
import ComputerScreen from './computerScreen'
import Emoji from './emoji'

const computerScreenAlignment = {
    display: "flex",
    flex: "1 1 auto",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "stretch",
};


function Home(props) {
    return (
        <div style={computerScreenAlignment}>
            <ComputerScreen />
        </div>
    );
}

export default Home;