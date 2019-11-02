import React from "react";
import PropTypes from "prop-types";

function Potato({name, picture, rating}) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={picture} />
            <h4>{rating}/5.0</h4>
        </div>
    );
}

//name, picture(속성값) 규정
Potato.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
};

export default Potato;