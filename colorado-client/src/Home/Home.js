import React, { Component } from 'react';
import TripsContainer from '../TripsContainer';
import Map from '../googleMaps/map'
import SearchBar from '../googleMaps/SearchBar'
import Auth from '../Auth/Auth'

const auth = new Auth();


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <div className="">
                You are logged in!
                <TripsContainer />

                <div>
              {auth.getProfile().given_name}
              <hr/>
              {auth.getProfile().nickname}
              <hr/>
                </div>
                    <SearchBar />

                    <Map />
              }
              }
              }
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;