import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        //alt= 이미지 설명글
        <div className="movie">
            <img src={poster} alt={id} title={title}/>
            <div>
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>
                <p>{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired //배열사용
};

export default Movie;