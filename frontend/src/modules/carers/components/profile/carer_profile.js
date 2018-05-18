import React, { Component } from 'react';
import Auth from '../../../../components/auth/auth';
import PaymnetInformation from './payment_information';

class CarerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: { name: '' },
      carerIndiv: {},
    };
  }

  componentWillMount() {

    const auth = new Auth();
    this.setState({ profile: {} });
    const { userProfile, getProfile } = auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  componentDidMount() {
    const auth = new Auth();
    const clientId = auth.getUserId();
    fetch(process.env.REACT_APP_BACKEND_BASE_URL + 'carer/' + clientId, {
      method: 'GET',
      body: null,
    }).then((response) => {
      if (response.status !== 200) {
        console.log('Handle error' + response.status);
        return;
      }
      response.json().then((data) => {
        console.log('Successful load' + response.status);
        console.log('Number of entries' + data);
        this.setState({
          carerIndiv: data,
        });
      });
    });
  }

  render() {
    const { profile, carerIndiv } = this.state;
    return (

      <div className= "container">
        <div className="m-5">
          <h2>{profile.name}</h2>
          <div header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <h3>{profile.nickname}</h3>
            </div>
            <PaymnetInformation />
            <pre>{JSON.stringify(profile, null, 2)}</pre>
            <pre>{JSON.stringify(carerIndiv, null, 2)}</pre>
          </div>
        </div>
      </div>

    );
  }
}

export default CarerProfile;
