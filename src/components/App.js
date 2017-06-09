import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import GrommetApp from 'grommet/components/App';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <GrommetApp>
        <IndexLink to="/">Chat</IndexLink>
        {' | '}
        <Link to="/photos">Photos</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        {this.props.children}
      </GrommetApp>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
