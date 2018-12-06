import React, {Component} from 'react';
import {connect} from 'react-redux';
import Output from '../components/Output';
import { withRouter } from 'react-router-dom';

class outputContainer extends Component {
  render(){
    const {form} = this.props;
    return <Output
              form = {form}
           />;
  }
}

const mapStateToProps = ({form}) => {
  return {
    form : form.whichGender
  }
};

export default withRouter(connect(mapStateToProps,null)(outputContainer));
