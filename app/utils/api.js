const axios = require('axios');

module.exports = {
  fetchPopularRepos: (language) => {
    let popularRepoURL = 'https://api.github.com/search/repositories?q=stars:>1+language';
    let encodedURI = window.encodeURI(`${popularRepoURL}+${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  }
};
