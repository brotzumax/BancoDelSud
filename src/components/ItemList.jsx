import React from "react";
import Item from "./Item";

function ItemList({ items }) {
    return (
        <div className="ItemList">
            {items.map(item => (
                <div key={item.id}>
                    <Item item={item} />
                </div>)
            )}
        </div>
    )
}

export default ItemList;