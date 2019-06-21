import React from "react";
import Card from "./Card";
import { GroupBy } from "../utils";
import Slider from "react-slick";

const Category = (props) => {

    let productsList;
    let plp;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const productsGroupedData = props.productsData;
    productsList = Object.keys(productsGroupedData).map(key => {
        let productListByCategory = productsGroupedData[key];
        if(key.toString() === "null") {
            let i, j, resArray=[], chunk = 2;
            for (i = 0, j = productListByCategory.length; i < j; i += chunk) {
                const item = productListByCategory.slice(i, i + chunk);
                plp = item.map(product => {
                    return <Card title={product.name} content={product.description} offer={product.offerMessage} price={product.price}/>
                });
                return <div>
                            <span>{key}</span>
                            <div className="card-deck">
                                {plp}
                            </div>
                    </div>
                // resArray.push(productListByCategory.slice(i, i + chunk));
            }
            // console.log(resArray);
            // for (let index = 0; index = resArray.length; index++) {
            //     const item = resArray[index];
            //     console.log(item);
                // plp = item.map(product => {
                //     return <Card title={product.name} content={product.description} offer={product.offerMessage} price={product.price}/>
                // });
                // return <div>
                //             <span>{key}</span>
                //             <div className="card-deck">
                //                 {plp}
                //             </div>
                //     </div>   
            // }
        }
        
    })
    
    return (
        <div>
            <Slider {...settings}>
                {/* {productsList} */}
                <div>
                    <span>1</span>
                    <div className="card-deck">
                        {plp}
                    </div>
            </div>
            <div>
                    <span>2</span>
                    <div className="card-deck">
                        {plp}
                    </div>
            </div>
            <div>
                    <span>3</span>
                    <div className="card-deck">
                        {plp}
                    </div>
            </div>
            <div>
                    <span>4</span>
                    <div className="card-deck">
                        {plp}
                    </div>
            </div>
            <div>
                    <span>5</span>
                    <div className="card-deck">
                        {plp}
                    </div>
            </div>
            <div>
                    <span>6</span>
                    <div className="card-deck">
                        {plp}
                    </div>
            </div>
            </Slider>
        </div>
    )
};

export default Category;
