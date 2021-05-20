import React from 'react';

const MovieShow = ({match, movies}) => {
    // And here we access the `movieId` stored in match.params to render 
    // information about the selected movie
    return (
      <div>
        <h3>{ movies[match.params.movieId].title }</h3>
      </div>
    );
  }
  

export default MovieShow; 
