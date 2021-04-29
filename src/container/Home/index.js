import React, {useState} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

function Home() {
    const [person, setPerson] = useState({name: ''});
    const onChange = ({target: {name, value}}) => {
        setPerson({
            ...person,
            [name]: value,
        });
    };
    const onSubmit = (() => {
    });
    return (
        <div className="App">
            {/*<Link to={"/"}>Home</Link>&nbsp;&nbsp;*/}
            {/*<Link to={"/about"}>About Us</Link><br/><br/>*/}
           Hello World
        </div>
    );
}

export default Home;
