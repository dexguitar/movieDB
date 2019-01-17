import React, { Component } from "react";

import "./MovieRow.css";

class MovieRow extends Component {
  viewMovie = () => {
    const url = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
    window.location.href = url;
  };

  render() {
    return (
      // <table key={this.props.movie.id}>
      //   <tbody>
      //     <tr>
      //       <td>
      //         <img src={this.props.movie.poster_src} alt="movie poster" />
      //       </td>
      //       <td>
      //         <span className="movieTitle">{this.props.movie.title}</span>
      //         <p>{this.props.movie.overview}</p>
      //         <button className="viewBtn" onClick={this.viewMovie}>
      //           VIEW
      //         </button>
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <img src={this.props.movie.poster_src} alt="movie poster" />
          </div>
          <div id="content" className="col-md-10">
            <span className="movieTitle">{this.props.movie.title}</span>
            <p>{this.props.movie.overview}</p>
            <button className="viewBtn" onClick={this.viewMovie}>
              VIEW
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;
