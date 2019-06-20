import React from "react";
import Card from "./Card";
import { GroupBy } from "../utils";

const Category = (props) => {

    let productsList;
    let plp;
    const productsGroupedData = props.productsData;
    productsList = Object.keys(productsGroupedData).map(key => {
        let productListByCategory = productsGroupedData[key];
        plp = productListByCategory.map(product => {
            return <Card title={product.name} content={product.description} offer={product.offerMessage} price={product.price}/>
        });
        key = (key === null || key.length === 0) ? 'No Category' : key;
        return <div>
                    <span>{key}</span>
                    <div className="card-deck">
                        {plp}
                    </div>
            </div>
    })
    
    return (
        <div>
            {productsList}
            {/* <div className="slider-holder">
                <span id="slider-image-1"></span>
                <span id="slider-image-2"></span>
                <span id="slider-image-3"></span>
                <div class="image-holder">
                    <img src="/public/images/1.jpg" class="slider-image" />
                    <img src="/public/images/2.jpg" class="slider-image" />
                    <img src="/public/images/3.jpg" class="slider-image" />
                </div>
                <div class="button-holder">
                    <a href="#slider-image-1" class="slider-change"></a>
                    <a href="#slider-image-2" class="slider-change"></a>
                    <a href="#slider-image-3" class="slider-change"></a>
                </div>
            </div> */}
        </div>
    )
};

export default Category;
