const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');

class Results extends React.Component {
  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results) => {
      console.log(results);
    });
  }

  render() {
    return (
      <div>Result</div>
    )
  }
}

module.exports = Results;
