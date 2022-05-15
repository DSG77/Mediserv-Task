/// <reference types="cypress"/>
describe('checking title and filling form', () => {
    it('infomaterial_anforderung test', function() {
        cy.visit('https://mediservbank.de/infomaterial/')

        cy.get('.col-sm-3>:nth-child(1)>').click()
        cy.title().should('eq', 'Jetzt kostenloses Infomaterial anfordern! » mediserv Bank GmbH'); //in task it says that,
        //title should be "Infomaterial anfordern".I assumed this was a typo.If it was a typo, then this assertion is OK.
        // if title should be as written in task as "Infomaterial anfordern",then please see my assertion 
        //on page Checking title.js, and then it is a bug to be fixed***


        cy.get('input[value="Geldanlage"]').wait(500).then((txt) => {
                cy.get('input[value="Geldanlage"]').click() //check('Geldanlage')
            })
            //selecting Zahnarzt/Zahnärztin from static dropwdon
        cy.get('#input_2_27').wait(500).then((dropdown) => {
            cy.wrap(dropdown).select('Zahnarzt/Zahnärztin')
        })

        //selecting “Veranstaltungen” from “Wie sind Sie uns aufmerksam geworden“ static dropdown menu
        cy.get('#input_2_45').wait(500).then((dropdown) => {
            cy.wrap(dropdown).select('Veranstaltungen')
        })




        // Anrede slected as Herr (this is not in requirement but according to the page this is a mandatory field to be selected)
        cy.get('#choice_2_2_1').click() //Herr radio button is selected

        cy.get('#input_2_37').wait(500).then((txt) => {
            cy.get('#input_2_37').type("Dr.")
        })

        cy.get("input[name='input_3']").wait(500).then((txt) => {
            cy.get("input[name='input_3']").type("Demir Salih")
        })

        cy.get('#input_2_4').wait(500).then((txt) => {
            cy.get('#input_2_4').type("GURSOY")
        })

        cy.get('#input_2_7').wait(500).then((txt) => {
            cy.get('#input_2_7').type("Am Stuhl 4")
        })

        cy.get('#input_2_9').wait(500).then((txt) => {
            cy.get('#input_2_9').type("66849")
        })

        cy.get('#input_2_10').wait(100).then((txt) => {
            cy.get('#input_2_10').type("Landstuhl")
        })

        cy.get('#input_2_22').wait(0).then((txt) => {
            cy.get('#input_2_22').type("slh.gursoy@hotmail.com")
        })

        cy.get('#choice_2_16_1').wait(500).then((txt) => {
            cy.get('#choice_2_16_1').click() //Datenschutzerklärung is checked
        })
        cy.get('#choice_2_23_1').wait(500).then((txt) => {
            cy.get('#choice_2_23_1').click() //Infomaterial anfordern is checked
        })
        cy.get('#gform_submit_button_2') // button is blue
            .should('have.css', 'background-color')
            .and('eq', 'rgb(0, 68, 135)')


    })
})