import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    takeToDetails = ()=>{
        this.props.history.push('/details')
    }

  render() {
    return (
      <div>
          <h1>Edit Page</h1>
          <input></input>
          <input></input>
          <button onClick={this.takeToDetails}>Cancel</button>
          <button onClick={this.takeToDetails}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
    return {
        reduxState: reduxState
    }
}
export default connect(mapStateToProps)(Edit);