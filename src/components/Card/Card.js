import React from 'react';
import {NavLink} from "react-router-dom"

//https://via.placeholder.com/300x150/006F79/FFFFFF?text=house

const Card = (props) => {
    let cornerClass = "card__img-wrapper__corner"

    let color = (() => {
        if (props.type === "IndependentLiving") {
            cornerClass+= " card__img-wrapper__corner--indep"
            return "E03C3C"
        }
        else if (props.type === "SupportAvailable") {
            cornerClass+= " card__img-wrapper__corner--support"
            return "3569C6"
        }
        else {
            cornerClass+= " card__img-wrapper__corner--none"
            return "917311"
        }
    })()

    let img = `https://via.placeholder.com/300x150/${color}/FFFFFF?text=${props.title}`

    return (
        <NavLink to={`/details/${props.id}`} className="card">
            <div className="card__img-wrapper">
                <img src={img} alt=""/>
                <div className={cornerClass}>
                    <p>{props.type}</p>
                </div>
            </div>
            <div className="card__info">
                <p className="card__info__title">{props.title}</p>
                <p className="card__info__address">{props.address}</p>
                <p className="card__info__sale">New Properties for Sale from <b>£{props.price}</b></p>
                <p className="card__info__shared">Shared Ownership Available</p>
            </div>
        </NavLink>
    );
};

export default Card;