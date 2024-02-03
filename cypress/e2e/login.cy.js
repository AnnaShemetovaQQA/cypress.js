describe('Тестирование формы логина', () => {
    beforeEach(() => {
      cy.visit('https://login.qa.studio/')
    })

    it('Верный логин и пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible').and('contain','Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click()
        cy.get('#messageHeader').should('be.visible').and('contain','Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    it('Неверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio5')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible').and('contain','Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    it('Неверный логин', function () {
        cy.get('#mail').type('germanf@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible').and('contain','Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    it('Логин без @', function () {
        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible').and('contain','Нужно исправить проблему валидации')
    })

    it('Неверный логин', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.get('#messageHeader').should('be.visible').and('contain','Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

})