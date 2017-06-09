const React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map((lang) => {
            return (
              <li
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}>
                {lang}
              </li>
            )
          }, this)}
      </ul>
    )
  }
}

module.exports = Popular;
