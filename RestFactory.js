'use strict';

var request = require('request');

var Configuration = require('./Configuration');

var RestFactory = function RestFactory(callback) {

  var self = this;

  this.lastResponse = null;

  this.get = function(path, callback) {
    var uri = this.uri(path)
    request.get({url: uri, headers: {'User-Agent': 'request'}},
        function(error, response) {
      if (error) {
        return callback.fail(new Error('Error on GET request to ' + uri +
          ': ' + error.message))
      }
      self.lastResponse = response;
      callback();
    })
  }

  this.post = function(path, requestBody, callback) {
    var uri = this.uri(path)
    request({url: uri, body: requestBody, method: 'POST',
          headers: {'User-Agent': 'request'}},
        function(error, response) {
      if (error) {
        return callback(new Error('Error on POST request to ' + uri + ': ' +
          error.message));
      }
      self.lastResponse = response;
      callback(null, self.lastResponse.headers.location);
    })
  }

  this.put = function(path, requestBody, callback) {
    var uri = this.uri(path)
    request({url: uri, body: requestBody, method: 'PUT',
          headers: {'User-Agent': 'request'}},
        function(error, response) {
      if (error) {
        return callback(new Error('Error on PUT request to ' + uri + ': ' +
            error.message));
      }
      self.lastResponse = response;
      callback(null, self.lastResponse.headers.locations);
    })
  }

  this.delete = function(path, callback) {
    var uri = this.uri(path);
    request({url: uri, method: 'DELETE'},
        function(error, response) {
      if (error) {
        return callback(new Error('Error on DELETE request to ' + uri + ': ' +
            error.message));
      }
      self.lastResponse = response;
      callback();
    })
  }

  this.options = function(path, callback) {
    var uri = this.uri(path)
    request({'uri': uri, method: 'OPTIONS',
          headers: {'User-Agent': 'request'}},
        function(error, response) {
      if (error) {
        return callback.fail(new Error('Error on OPTIONS request to ' + uri +
            ': ' + error.message))
      }
      self.lastResponse = response;
      callback();
    })
  }

  this.uri = function(path) {
    return Configuration.BASE_URL + path;
  }

  callback();
}

exports.RestFactory = RestFactory;