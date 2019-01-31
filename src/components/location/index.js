import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8914567375377!2d77.59762681418682!3d12.978793690851138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1664d3619b53%3A0xc13769784709aec!2sM+Chinnaswamy+Stadium!5e0!3m2!1sen!2sin!4v1548954790879" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen></iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    );
};

export default Location;