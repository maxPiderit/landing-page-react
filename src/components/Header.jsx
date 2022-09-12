import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';

const Header = ({ header }) => { // Destructuring Props (header)
    return (
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">{header.title}</h1>
                    <h2 className="masthead-subheading mb-0">{header.subtitle}</h2>
                    <ButtonLink button={header.button} />
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
    )
}

Header.propTypes = {
    header: PropTypes.object.isRequired,
}

export default Header;