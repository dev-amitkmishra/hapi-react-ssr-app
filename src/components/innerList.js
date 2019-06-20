import React from "react";
import AccordionCard from "./accordionCard";

const InnerList = (props) => {
    let itemTypes;
    const productsData = props.productsData;
    itemTypes = Object.keys(productsData).map(key => {
        const length = productsData[key].length;
        let tkey = key.toString() == "null" ? 'Others' : key;
        return <li className="list-group-item d-flex justify-content-between align-items-center">
            {tkey}
            <span className="badge badge-primary badge-pill">{length}</span>
        </li>
    })
    return (
        <ul className="list-group">
            {itemTypes}
        </ul>
    );
}

export default InnerList;