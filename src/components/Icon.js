import React from "react";
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';


const Icon = ({names}) => {
    return (
        <div>
            <h1>Hello</h1>
            <FaTimes  className="icon"/>
            <FaPen className="icon"/>
            <FaRegCircle className="icon"/>

        </div>
    )
}

export default Icon;