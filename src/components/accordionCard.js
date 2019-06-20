import React from "react";
import InnerList from "./innerList";

const AccordionCard = (props) => {
    return (
        <li className="list-group-item">
            <span>
                <h2 className="mb-0">
                    <span className="btn collapsed" style={{fontWeight: 600}} onClick={props.toggled }>
                        {props.filterText}
                    </span>
                </h2>
            </span>
            <span className={props.isOpen ? 'collapse show' : 'collapse'}>
                <InnerList productsData={props.productsData}/>
            </span>
        </li>
    );
}

export default AccordionCard;
