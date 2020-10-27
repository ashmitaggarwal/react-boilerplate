import '../../App.css';
import {Link} from "react-router-dom";

function About(props) {
    console.log(props)
    return (
        <div className="App">
            <Link to={"/"}>Home</Link>&nbsp;&nbsp;
            <Link to={"/about"}>About Us</Link><br/><br/>
         About Us
        </div>
    );
}

export default About;
