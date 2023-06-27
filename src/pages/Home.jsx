import {Categories, PizzaBlock, SortPopup} from "../components";
import React from "react";

export function Home({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                />
                <SortPopup items={[
                    { name: 'popularity', type: 'popular' },
                    { name: 'price', type: 'price' },
                    { name: 'alphabetical', type: 'alphabet' }
                ]}/>
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