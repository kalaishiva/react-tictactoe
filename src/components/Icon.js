import React from "react";
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';



const Icon = ({names}) => {
            switch (names) {
                case "circle":
                   return <FaRegCircle className="icon"/>
                     case "Times":
                   return <FaTimes className="icon"/>
                     default:
                   return   <FaPen className="icon"/>
               
            }
        }

export default Icon;