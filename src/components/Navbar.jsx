import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navbar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top bg-dark">
            <div className="container px-0">
                <a className="navbar-brand" href="#page-top">{navbar.logo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        {/* {
                                navbar.options.map((option) => {
                                    return (
                                        <li className="nav-item"><a className="nav-link" href={option.link}>{option.label}</a></li>
                                    )
                                })
                            } */}
                        {
                            navbar.options.map(({ link, label }, index) => {
                                return (
                                    <li className="nav-item" key={index}><a className="nav-link" href={link}>{label}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    navbar: PropTypes.object.isRequired,
}

export default Navbar;