function sendGetRequest() {
  Axios.request({
      url: 'http://localhost:3001/users/2',
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      withCredentials: true
  }).then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
}