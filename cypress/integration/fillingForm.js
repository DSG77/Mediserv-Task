/// <reference types="cypress"/>
import infomaterialAnfordernPage from "../Page objects/infomaterialAnfordern-Page";

it('infometarial_anforderung test', function() {
    cy.visit('https://mediservbank.de/infomaterial/')

})
it('Clicking PrivatabrechnungCheckbox', () => {


    infomaterialAnfordernPage.PrivatabrechnungCheckbox.check('Privatabrechnung')




});