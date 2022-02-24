import React from "react";
import { useNavigate } from "react-router-dom";
import './joinbutton.css';

export default function JoinButton() {
    let navigate = useNavigate();
    const joinbutton =  () => {
        let path = '/signup';
        navigate(path);
    }
    return (
        <a class="joinbtn" href="#" onClick={joinbutton}>
            <span className="btnspan">
                <span className="buttontext" >JOIN</span></span>
        </a >
    );
}