describe('Тестирование магазина аватаров', function () {
    it('Покупка фото для тренера', function () {
         cy.visit('https://pokemonbattle.me/login');
         cy.get(':nth-child(1) > .auth__input').type('anashemetova@yandex.ru');
         cy.get('#password').type('Pokemons4evarr');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4711183993385109');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ana Banana');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').should('be.visible').and('contain','Покупка прошла успешно');
         cy.get('.payment__adv').click();
     })
 })