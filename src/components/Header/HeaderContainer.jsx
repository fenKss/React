import React           from 'react';
import Header          from './Header';
import * as axios      from 'axios';
import { connect }     from 'react-redux';
import { setAuthData } from '../../redux/authReduser';

const HeaderContainer = class extends React.Component {
  componentDidMount = () => {

    axios.get(`https://127.0.0.1:8000/api/auth/me`, {
      withCredentials: true,
    }).then(r => {
      const { id, login, email } = r.data;
      this.props.setAuthData(login, id, email);
    });
  };

  render = () => <Header {...this.props} />;
};
const mapStateToProps = (state) => ({
  isAuth: false,
});

const mapDispatchToProps = { setAuthData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);