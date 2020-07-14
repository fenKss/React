import React          from 'react';
import Profile        from './Profile';
import * as axios     from "axios";
import { connect }    from 'react-redux';
import { setProfile } from '../../../redux/profileReduser';

const ProfileContainer = class extends React.Component {

  componentDidMount = () => {
      axios.get(`https://127.0.0.1:8000/api/users/1`).then(r =>{
        const user = r.data;
        this.props.setProfile(user);
      })
  };

  render = () => <Profile {...this.props} profile={this.props.profile} />;
};

const mapStateToProps = (state) =>({
 profile:state.profilePage.profile
});

const mapDispatchToProps = {
  setProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);