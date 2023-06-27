import React, {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route, Routes} from 'react-router-dom'
import {setPizzas} from './redux/action/pizzas'

function App() {

    const dispatch = useDispatch()
    const {items} = useSelector(({pizzas}) => {
        return {
            items: pizzas.items
        }
    })

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => dispatch(setPizzas(data.pizzas)))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items={items} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

// export default connect(
//     state => {
//         return {
//             items: state.pizzas.items,
//             filters: state.filters,
//         }
//     },
//     dispatch => {
//         return {
//             setPizzas: items => dispatch(setPizzas(items))
//         }
//     }
// )(App);
