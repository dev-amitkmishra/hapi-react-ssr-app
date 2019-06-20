import React from "react";
import AccordionCard from "./accordionCard";

const Filter = (props) => (
    <div class="list-group" style={{margin: '23px'}}>
        <a href="#" class="list-group-item list-group-item-action active">
            Filters
        </a>
        <a href="#" class="list-group-item list-group-item-action">Category</a>
        <a href="#" class="list-group-item list-group-item-action">Price</a>
        <a href="#" class="list-group-item list-group-item-action">Rating</a>
        <a href="#" class="list-group-item list-group-item-action">Discount/Offers</a>
        </div>
);

export default Filter;