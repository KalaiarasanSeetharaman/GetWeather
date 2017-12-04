var axios = require('axios');
const OPEN_FOODAPP_URL = "http://192.168.0.106:1003/";

module.exports = {
	 addUsers: function (formdata) {
    var requestUrl = `${OPEN_FOODAPP_URL}`;
    console.log(formdata);
    return axios.post(requestUrl+'/api/user/add',formdata)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    /*return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error(err.response.data.message);
    });*/
  }

}