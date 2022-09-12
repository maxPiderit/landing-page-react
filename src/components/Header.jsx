import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';

const Header = ({ header }) => { // Destructuring Props (header)
    return (
        <header className="masthead text-black">
            <div className="masthead-content">
                <div className="container px-2">
                    <h1 className="masthead-heading">{header.title}</h1>
                    <h6 className="masthead-subheading">{header.subtitle}</h6>
                    <ButtonLink button={header.button} />
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    header: PropTypes.object.isRequired,
}

export default Header;