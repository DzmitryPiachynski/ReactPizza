import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";

import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route, Routes} from 'react-router-dom'
import {setPizzas} from './redux/action/pizzas'

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => dispatch(setPizzas(data.pizzas)))
    })

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

