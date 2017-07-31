'use strict';

var expect = require('chai').expect;
var greeting = '';
module.exports =function() {
    
       this.Given(/^I am on the HomePage$/, function () {
          expect("I am on home page").to.equals("I am on home page");
        });

         this.When(/^I enter the text "([^"]*)"$/, function (arg1) {
           this.greeting = arg1;
         });

        this.Then(/^I should be able to see the message "([^"]*)"$/, function (arg1) {
            expect(arg1).to.contains(this.greeting);
    });
};