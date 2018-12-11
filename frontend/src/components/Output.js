import React, {Component} from 'react';

class Output extends Component {

  render() {
    const {nbcm_gender,mnbcm_gender,lcm_gender,most_common_gender,username} = this.props;
    return (
      <div style={{padding:20}}>
        <div className="row">
            <div className="card red accent-1 darken-1">
              <div className="card-content white-text">
                <span className="card-title">Hi {username}!<br />Probably, you will be a <strong>{most_common_gender}</strong></span>
                <p>Naive bayes classifier guesses you as a <strong>{nbcm_gender}</strong></p>
                <p>Multinomial naive bayes classifier guesses you as a <strong>{mnbcm_gender}</strong></p>
                <p>Logistic regression classifier guesses you as a <strong>{lcm_gender}</strong></p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Output
