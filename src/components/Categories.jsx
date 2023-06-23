import React, {useState} from "react";

export function Categories({items}) {

    const [active, setActive] = useState('Все');

    return (
        <div className="categories">
            <ul>
                {
                    items.map(item => (
                        <li
                            className={active === item ? 'active' : ''}
                            onClick={() => setActive(item)}
                            key={item}
                        >{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}