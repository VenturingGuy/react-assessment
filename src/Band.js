import React from 'react';
function Band(props) {
    const { band_name, formed, origin, fans } = props;
    return (
        <div className='Band'>
            <h1>{band_name}</h1>
            <p>Formed: {formed}</p>
            <p>Place of Origin: {origin}</p>
            <p>Fans: {fans}</p>
        </div>
    )
}

export default Band