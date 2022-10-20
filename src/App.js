import React, { useState } from "react";
import Icon from "./components/Icon";
import "./App.css";

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//React Boostrap
import { Card, CardBody, Container, Button, Col, Row  } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const itemArray = new Array(9).fill("empty")

const App =()=>{

    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    const reloadGame = () =>{
        //
    }
    const checkWinner = () =>{
        //
    }
    const changeItem = itemNumber => {
        //
    }
    return(
        <div>
            <Icon />

        </div>
    )
}
export default App;