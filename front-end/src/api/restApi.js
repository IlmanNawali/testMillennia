import * as axios from 'axios';
const BASE_URL = "http://localhost:8081/";
function getFeed(path_url, token) {
    return new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: BASE_URL + path_url,
          };
          axios(config).then(function (response) {
            resolve(response);
          }).catch(function (error) {
            reject(error);
        });
    })
}
function getDelete(path_url, token) {
  return new Promise((resolve, reject) => {
    console.log("path_url", BASE_URL + path_url);
      var config = {
          method: 'delete',
          url: BASE_URL + path_url,
        };
        axios(config).then(function (response) {
          resolve(response);
        }).catch(function (error) {
          reject(error);
      });
  })
}
function PostFeed(path_url, token, data, method) {
    return new Promise((resolve, reject) => {
          var config = {
            method: method,
            url: BASE_URL + path_url,
            data : data
          };
          axios(config).then(function (response) {
            resolve(response);
          }).catch(function (error) {
            reject(error);
          });
    })
}
export { getFeed, PostFeed, getDelete }