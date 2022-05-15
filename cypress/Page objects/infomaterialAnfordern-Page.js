/// <reference types="cypress"/>
class infomaterialAnforderungPage {
    //here I am implementing page object model for Start page for test maintenance approach and avoiding code duplication. 
    // This class represents infomaterialAnforderung page in the task mediserv web page. 
    //This Page class will contain all the locators of the WebElements of the task web page and methods. 

    get PrivatabrechnungCheckbox() {
        //return cy.get('#choice_2_24_1');

        return cy.get('input[type="checkbox"]'); //getter function is returning our locator element  
    }







}