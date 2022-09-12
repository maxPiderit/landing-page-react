import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ footer }) => {
    return (
        <footer className="py-5 bg-black">
            <div className="container px-5"><p className="m-0 text-center text-white small">{footer.text}</p></div>
        </footer>
    )
}

Footer.propTypes = {
    footer: PropTypes.object.isRequired
}

export default Footer;