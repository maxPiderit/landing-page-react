import React from 'react';

const ButtonLink = ({ button })  => {
    return (
        <a className="btn btn-primary btn-xl mt-3 p-2" href={button.link}>{button.label}</a>
    )
}

export default ButtonLink;