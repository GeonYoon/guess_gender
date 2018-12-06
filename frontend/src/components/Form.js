import React, {Component} from 'react';
import { Row, Input } from 'react-materialize';


class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      about1 : '',
      about2 : ''
    };
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value});
  };

  handleSubmit = e => {
    this.props.handleForm(this.state.about1,this.state.about2,this.props.history);
  }

  render() {
    return(
            <div style={{padding:20}}>
              <Row>
                <Input
                  type='textarea'
                  label="One simple line that can represnet yourself"
                  s={12}
                  name="about1"
                  onChange={this.handleChange}
                />
                <Input
                  type='textarea'
                  label="Describe about Yourself"
                  s={12}
                  name="about2"
                  onChange={this.handleChange}
                />
              </Row>
              <div className="fixed-action-btn">
                <div className="btn-floating btn-large red">
                    <i
                      className="material-icons"
                      onClick={this.handleSubmit}
                    >
                      add
                    </i>
                </div>
              </div>
            </div>
          );
  }
}

export default Form
