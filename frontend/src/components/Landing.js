import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Landing extends Component {
  render() {
    const isAlreadyLoggedin = this.props.auth
    return isAlreadyLoggedin
          ? (<Redirect to="/form" />)
          : (
            <div style ={{ textAlign : 'center'}}>
                <h1>
                    Guess Your Gender
                </h1>
                    Guess your Gender based on what you give.
            </div>
          );
  }
}

export default Landing