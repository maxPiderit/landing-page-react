import React from 'react';
import PropTypes from 'prop-types';



const Cards = ({ cards }) => {
    return (
        <div className="row">
            {
                cards.map((card, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card">
                                <img src={card.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.title}</p>
                                    <a href={card.buttonUrl} className="btn btn-primary">{card.buttonLabel}</a>
                                </div>
                            </div>
                        </div>
                    
                )})
            }

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