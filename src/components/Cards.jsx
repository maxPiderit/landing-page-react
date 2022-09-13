import React from 'react';
import PropTypes from 'prop-types';



const Cards = ({ cards }) => {
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <img src={cards.image} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{cards.title}</h5>
                        <p className="card-text">{cards.description}</p>
                        <a href={cards.buttonUrl} className="btn btn-primary">{cards.buttonLabel}</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

Cards.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Cards;