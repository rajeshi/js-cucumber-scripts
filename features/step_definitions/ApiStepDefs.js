'use strict';

var expect = require('chai').expect;
var identifier = null;

module.exports =function() {

    this.Given(/^Session records as follows:$/, function (table) {
         // Write code here that turns the phrase above into concrete actions
       });
    
     this.Given(/^$/, function () {
         // Write code here that turns the phrase above into concrete actions
       });
    
    this.When(/^an update is received for a non\-matching field, like:$/, function (table) {
        table.get("Identifier") ;
        table.get("");
       });
    
    this.Then(/^the corresponding tin record should be updated$/, function () {
       });
    
    this.Then(/^the corresponding bronze record should be updated$/, function () {
       });
    
    
};