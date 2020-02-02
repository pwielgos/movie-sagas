import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    takeToEdit = () => {
        this.props.history.push('/edit')
    }

    takeHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>{this.props.reduxState.detailsReducer.title}</h1>
                <p>{this.props.reduxState.detailsReducer.description}</p>
                {this.props.reduxState.genresReducer.map(genre => {
                    return <ul>
                        <li>{genre.name}</li>
                    </ul>
                })}
                <button onClick={this.takeHome}>Back to List</button>
                <button onClick={this.takeToEdit}>Edit</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}
export default connect(mapStateToProps)(Details);