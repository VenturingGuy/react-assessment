import React from 'react';
import Band from './Band';
import Like from './Like';
import './BandList.css'
import data from './metal.json';

function BandList() {
    const band_info = data.map(({ band_name, formed, origin, fans }) => {
        return (
            <div className='BandList'>
                <Band
                  band_name={band_name}
                  formed={formed}
                  origin={origin}
                  fans={fans}
                />
                <Like />
            </div>
        );
    });
    return <div className='BandList'>{band_info}</div>;
}

export default BandList;