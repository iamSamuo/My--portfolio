import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return ( <section className="error">
        <p>Ooops!!! Page Can Not Be Found</p>
        <p>Error 404!</p>
        <Link to = '/'>
            Back Home
        </Link>
    </section> );
}
 
export default Error;