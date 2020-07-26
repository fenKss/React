import React           from 'react';
import Header          from './Header';
import * as axios      from 'axios';
import { connect }     from 'react-redux';
import { setAuthData } from '../../redux/authReduser';

const HeaderContainer = class extends React.Component {
  componentDidMount = () => {

    const data = new FormData();
    data.append(`username`, `user1`);
    data.append(`password`, `user`);

    // const data = {
    //   username:`user1`,
    //   password:`user`
    // }
    const baseUrl = process.env.REACT_APP_BASE_URL;
    axios({
      method         : `post`,
      url            : `${baseUrl}/api/login`,
      data,
      withCredentials: true,
      headers        : {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(response => {
      console.log(response);
    }).catch(e => console.error(e))
      .then(r => {
        axios.get(`${baseUrl}/api/auth/me`, {
          withCredentials: true,
        }).then(rs => {
          console.log(rs);
          // const { id, login, email } = r.data;
          // this.props.setAuthData(login, id, email);
        });
      });

  };

  render = () => <Header {...this.props} />;
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = { setAuthData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);