const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results) => {
      if (results === null) {
        return this.setState(() => {
          return {
            error: 'Looks like there was an error. Check that both users exist on Github',
            loading: false
          }
        });
      }
    });
  }

  render() {
    let error = this.state.error;
    let winner = this.state.winner;
    let loser = this.state.loser;
    let loading = this.state.loading;

    if (loading === true) {
      return <p>Loading</p>
    }

    return (
      <div>Result</div>
    )
  }
}

module.exports = Results;
