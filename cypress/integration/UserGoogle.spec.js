//const { groupBy } = require("cypress/types/lodash")

describe('Use Google', function () {
    it('Make a search', function (){
        cy.visit('https://www.google.com/') 
        cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').click() 
        cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf').type('this is a test') 
        cy.get('.UUbT9 > .aajZCb > .tfB0Bf > center > .gNO89b').click() 
    })

})







