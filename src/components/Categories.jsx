import React from "react";

export function Categories({items, active, setActive}) {
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