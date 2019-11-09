import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, year, title, summary, poster }) {
    return (
        //alt= 이미지 설명글
        <div>
            <img src={poster} alt={id} title={title}/>
            <div>
                <h1>{title}</h1>
                <h2>{year}</h2>
                <h3>{summary}</h3>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;