/// <reference types="cypress"/>
describe('Location', function() {

    beforeEach(function() {
        cy.visit('https://mediservbank.de/infomaterial/');
        cy.get('.col-sm-3>:nth-child(1)>').click()
    });
    it('should have title tag with value "Infomaterial anfordern"', function() {
        cy.title().should('eq', 'Infomaterial anfordern');
        // if title should be as written in task as "Infomaterial anfordern",then it is a bug to be fixed***
        //because title is <title>Jetzt kostenloses Infomaterial anfordern! » mediserv Bank GmbH</title> on the page.
    })
    it('filling form', function() {

        cy.get('input[value="Geldanlage"]').wait(500).then((txt) => {
            cy.get('input[value="Geldanlage"]').click() //check('Geldanlage')
        })
        cy.get('input[value="Privatabrechnung"]').wait(500).then((txt) => {
                cy.get('input[value="Privatabrechnung"]').click() //check('Privatabrechnung')
            })
            //cy.get('#input_2_3').type('Salih')
            //cy.contains('Privatabrechnung').click()
            //cy.get('input[type="checkbox"]').check('Privatabrechnung')
            //  cy.get('#choice_2_24_1').click()
            // cy.get('#choice_2_24_1').check()
        cy.get("input[name='input_3']").wait(500).then((txt) => {
            cy.get("input[name='input_3']").type("salih")
        })
    })


})