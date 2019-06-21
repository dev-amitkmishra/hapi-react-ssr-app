import React from "react";
// import StarRatingComponent from 'react-star-rating-component';
// import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => (
    <div className="card">
        {/* <span style={{marginLeft: '72%', position: 'absolute', backgroundColor: 'black', color: '#fff'}}>{props.offer}</span> */}
        {/* <img src="/public/images/1.jpg" className="card-img-top" alt="offer" style={{width: '20px', height: '20px', position: 'absolute'}} /> */}
        {/* <img src="http://placehold.it/400x400/fc0">
  <svg viewBox="0 0 200 200">
    <circle cx="75" cy="75" r="50" fill="rebeccapurple"/>
  </svg>
        <svg fill="green" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#fff"/>
        </svg> */}
                <img src="/public/images/logo.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" title={props.title} style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '163px'}}>{props.title.substring(0, 20)}</h5>
                    <p className="card-text" title={props.content} style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '163px'}}>{props.content.substring(0, 20)}</p>
                    {/* <StarRatingComponent name="rate2" editing={false} renderStarIcon={() => <span><FontAwesomeIcon icon={faStar} /></span>} starCount={5} value={3} /> */}
                    <div style={{fontSize: '22px'}}>${props.price}.00</div>
                    <button type="button" class="btn btn-primary">Add to cart</button>
            {/* <span style={{marginLeft: '20px'}}>
                <span><FontAwesomeIcon icon={faMinus} /></span>
                <input type="text" id="quantity" name="quantity" min="1" max="100" style={{width: '27px', marginLeft: '5px', marginRight: '5px'}} />
                <span><FontAwesomeIcon icon={faPlus} /></span> */}
            {/* </span> */}
        </div>
    </div>
);

export default Card;
