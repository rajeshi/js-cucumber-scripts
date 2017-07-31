'use strict';

var expect = require('chai').expect;
var identifier = null;
var restFactory = require("../../RestFactory");

module.exports =function() {

    this.Given(/^there are Identity records as follows:$/, function (table) {
         // Write code here that turns the phrase above into concrete actions
        checkWhetherRecordsPresent();
       });
    
    var checkWhetherRecordsPresent = function(){
        // Call the mongoDB and check whether the table contents are present in the database MongoDB utility
        // If not, insert the contents into the database
        // then validate true to complete this step.
    };
    
    this.When(/^a valid new event is received$/, function () {
         // Write code here that turns the phrase above into concrete actions
         restFactory.post("/track","{\"event\":\"Place Order\",\"platform\":\"sms\",\"platformId\":\"111-222-3333\",\"values":{\"color\":\"red\",\"age\":\"10\"}}");
};