import React, { Component } from "react";
import MovieRow from "./MovieRow";
import $ from "jquery";
import "./App.css";

class App extends Component {
  state = {
    rows: []
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = searchTerm => {
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=dbb56bc922cb48a1a1d08c351dddfb32`;

    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("SUCCESS!");
        const results = searchResults.results;

        let movieRows = [];

        results.forEach(movie => {
          movie.poster_src = `https://image.tmdb.org/t/p/w185/${
            movie.poster_path
          }`;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({
          rows: movieRows
        });
      },
      error: (xhr, status, err) => {
        console.error("FAILED!");
      }
    });
  };

  searchChangeHandler = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };

  render() {
    const { rows } = this.state;

    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="green_app_icon.svg" alt="app icon" />
              </td>
              <td width="8" />
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          onChange={this.searchChangeHandler}
          type="text"
          placeholder="Enter search term"
        />

        {rows}
      </div>
    );
  }
}

export default App;
