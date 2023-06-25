import React, {useEffect, useState} from "react";

import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route, Routes} from 'react-router-dom'

function App() {

    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then(res => res.json())
            .then(json => setPizza(json.pizzas))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items={pizza} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
