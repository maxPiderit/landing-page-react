import React from 'react';

const ButtonLink = ({ button })  => {
    return (
        <a className="btn btn-primary btn-xl rounded-pill mt-5" href={button.link}>{button.label}</a>
    )
}

export default ButtonLink;