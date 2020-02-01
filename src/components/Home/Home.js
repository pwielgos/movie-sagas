import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    handleClick = (movieSelected) => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: movieSelected })
        this.props.history.push('/details')
    }

    render() {
        return (
            <div className="App">
                {this.props.reduxState.movies.map((movie, i) => {
                    return <ul>
                        <img src={movie.poster} onClick={() => this.handleClick(movie)} />
                        <h1>{movie.title}</h1>
                        <p>{movie.description}</p>
                    </ul>
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}

export default connect(mapStateToProps)(Home);