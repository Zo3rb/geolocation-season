import React, { Component } from 'react';
import Loading from './Loading';
import DisplaySeason from './DisplaySeason';

class App extends Component {
  state = {
    lat: null,
    errMsg: '',
    errStyle: {
      textAlign: `center`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMsg: err.message })
    )
  }

  renderContent() {
    if (!this.state.late && this.state.errMsg) {
      return (
        <div style={this.state.errStyle}>
          <span></span>
          <h1>Error: {this.state.errMsg}</h1>
          <span></span>
        </div>
      )
    }
    if (this.state.lat && !this.state.errMsg) {
      return <DisplaySeason lat={this.state.lat} />
    }
    return <Loading MSG="Please Accept GEOLOCATION Permission!" />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;