import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component
{
    constructor() {
        super();
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
    }

    handleSubmit(event) {
        alert("Name: "+this.state.Title+
              "\nYear: "+this.state.Year+
              "\nPoster: "+this.state.Poster);
        event.preventDefault();
    }

    onChangeMovieTitle(event) {
        this.setState({
            Title:event.target.value
        })
    }

    onChangeMovieYear(event) {
        this.setState({
            Year:event.target.value
        })
    }

    onChangeMoviePoster(event) {
        this.setState({
            Poster:event.target.value
        })
    }

    render(){
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                        Add Movie Name:
                        <input type="text" value={this.state.Title} onChange={this.onChangeMovieTitle}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                        Add Release Year:
                        <input type="text" value={this.state.Year} onChange={this.onChangeMovieYear}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                        Add Poster Url:
                        <input type="text" value={this.state.Poster} onChange={this.onChangeMoviePoster}/>
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;