import logoSvg from "../assets/img/pizza-logo.svg";
import React from "react";
import {Button} from "./index";
import {Link} from 'react-router-dom'

export function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logoSvg} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <Link to="/cart">
                    <Button />
                </Link>
            </div>
        </div>
    );
}