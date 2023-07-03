import {Categories, PizzaBlock, SortPopup} from "../components";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/action/filters";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'popularity', type: 'popular' },
    { name: 'price', type: 'price' },
    { name: 'alphabetical', type: 'alphabet' }
]
export function Home() {

    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    })

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(obj => (
                        <PizzaBlock key={obj.id} {...obj}
                    />))
                }
            </div>
        </div>
    )
}