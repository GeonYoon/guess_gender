import React, {Component} from 'react';

class Output extends Component {

  render() {
    const gender = this.props.form
    return (
      <div style={{padding:20}}>
        <div className="row">
            <div className="card red accent-1 darken-1">
              <div className="card-content white-text">
                <span className="card-title">Probably, you will be a {gender}</span>
                <p>Because of these reasons, by 80% chance, you are a man!</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Output
