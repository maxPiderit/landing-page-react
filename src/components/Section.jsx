import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ index, section }) => {
    return (
        <section id={index === 0 ? "scroll" : null}>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className={"col-lg-6" + (section.orientation === 'left' ? " order-lg-2" : "")}>
                        <div className="p-5"><img className="img-fluid rounded-circle" src={section.imageURL} alt="..." /></div>
                    </div>
                    <div className={"col-lg-6" + (section.orientation === 'left' ? " order-lg-1" : "")}>
                        <div className="p-5">
                            <h2 className="display-4">{section.title}</h2>
                            <p>{section.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Section.propTypes = {
    index: PropTypes.number.isRequired,
    section: PropTypes.object.isRequired
}

export default Section;