import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import StarRatings from "react-star-ratings";
import Category from "./Category";
import Filter from "./Filter";
import productsJsonData from "../../products_mock.json";
import InnerList from "./innerList";
import AccordionCard from "./accordionCard";
import { GroupBy } from "../utils";
// import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
            showIndex: 0
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(index) {
        this.setState(prev => ({
            showIndex: prev.showIndex !== index ? index : 0
		}));
    }

    render() {
        const productsGroupedDataByCategory = GroupBy(productsJsonData, 'category');
        const productsGroupedDataByPrice = GroupBy(productsJsonData, 'price');
        const productsGroupedDataByRatingInfo = GroupBy(productsJsonData, 'ratingInfo');
        const productsGroupedDataByOffer = GroupBy(productsJsonData, 'offerMessage');
        return (
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor: '#4aa2e0', color: '#fff', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 2px 0px'}}>
                    <a className="navbar-brand">POC Shop</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <span><FontAwesomeIcon icon={faShoppingCart} />(11)</span> */}
                    </form>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <ul className="list-group" style={{margin: '26px'}}>
                                <AccordionCard index="1" productsData={productsGroupedDataByCategory} isOpen={this.state.showIndex === 1} filterText="Category" toggled={() => this.toggleMenu(1)}/>
                                <AccordionCard index="2" productsData={productsGroupedDataByPrice} isOpen={this.state.showIndex === 2} filterText="Price" toggled={() => this.toggleMenu(2)} />
                                <AccordionCard index="3" productsData={productsGroupedDataByRatingInfo} isOpen={this.state.showIndex === 3} filterText="Rating" toggled={() => this.toggleMenu(3)} />
                                <AccordionCard index="4" productsData={productsGroupedDataByOffer} isOpen={this.state.showIndex === 4} filterText="Discount/Offers" toggled={() => this.toggleMenu(4)} />
                            </ul>
                        </div>
                        <div className="col-9" style={{marginTop: '23px'}}>
                            <Category productsData={productsGroupedDataByCategory}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
