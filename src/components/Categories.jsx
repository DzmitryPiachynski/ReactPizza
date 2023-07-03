import React, {memo, useState} from "react";

const Categories = memo(function Categories({items, onClickItem}) {

    const [active, setActive] = useState(null);

    const onSelectItem = index => {
        setActive(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={active === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >Все</li>
                {
                    items.map((name, index) => (
                        <li
                            className={active === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={index}
                        >{name}</li>
                    ))
                }
            </ul>
        </div>
    )
})
export default Categories