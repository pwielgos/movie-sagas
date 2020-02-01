import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    // takeToEdit = ()=>{
    //     this.props.history.push('/edit')
    // }

    // takeHome = ()=>{
    //     this.props.history.push('/')
    // }

  render() {
    return (
      <div>
          <h1>Details Page</h1>
          {/* {this.props.reduxState. */}
          {/* <button onClick={this.takeHome}>Back to List</button>
          <button onClick={this.takeToEdit}>Edit</button> */}
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