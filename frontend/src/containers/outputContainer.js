import React, {Component} from 'react';
import {connect} from 'react-redux';
import Output from '../components/Output';
import { withRouter } from 'react-router-dom';

class outputContainer extends Component {
  render(){
    const {nbcm_gender,mnbcm_gender,lcm_gender,most_common_gender,username} = this.props;
    return <Output
              nbcm_gender = {nbcm_gender}
              mnbcm_gender = {mnbcm_gender}
              lcm_gender = {lcm_gender}
              most_common_gender = {most_common_gender}
              username = {username}
           />;
  }
}

const mapStateToProps = ({form,auth}) => {
  return {
    nbcm_gender : form.nbcm_gender,
    mnbcm_gender : form.mnbcm_gender,
    lcm_gender : form.lcm_gender,
    most_common_gender : form.most_common_gender,
    username : auth.user
  }
};

export default withRouter(connect(mapStateToProps,null)(outputContainer));
