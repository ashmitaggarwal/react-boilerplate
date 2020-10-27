import '../../App.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <Link to={"/"}>Home</Link>&nbsp;&nbsp;
            <Link to={"/about"}>About Us</Link><br/><br/>
            Home Page
        </div>
    );
}

export default Home;
