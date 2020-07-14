import React          from 'react';
import Profile        from './Profile';
import * as axios     from 'axios';
import { connect }    from 'react-redux';
import { setProfile } from '../../../redux/profileReduser';
import { withRouter } from 'react-router-dom';

const ProfileContainer = class extends React.Component {

  componentDidMount = () => {
    const userId = this.props.match.params.id ?? 1;
    axios.get(`https://127.0.0.1:8000/api/users/${userId}`).then(r => {
      const user = r.data;
      this.props.setProfile(user);
    });
  };

  render = () => <Profile {...this.props} profile={this.props.profile} />;
};

const mapStateToProps = (state) =>({
 profile:state.profilePage.profile
});

const mapDispatchToProps = {
  setProfile,
};
const ComponentWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentWithUrlData);