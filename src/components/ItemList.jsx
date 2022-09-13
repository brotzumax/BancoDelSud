import React from "react";
import Item from "./Item";

function ItemList({ items, onAdd }) {
    return (
        <div className="ItemList">
            {items.map(item => (
                <div key={item.id}>
                    <Item item={item} onAdd={onAdd}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;