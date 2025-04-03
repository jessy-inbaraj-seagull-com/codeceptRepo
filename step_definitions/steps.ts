const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {

    I.amOnPage('/');
    I.wait(3);
    I.click('(//a[contains(text(),"Sign in")])[2]')
    I.wait(2);
});
When(/^I do something$/, function () {

});
Given('I am in BTC', () => {});

When(/^I log in with valid credentials$/, function () {
    I.amOnPage('/');
    I.wait(5);
    I.fillField('input[id="1-email"]','abc');
    I.fillField('input[id="1-password"]','abc');
    I.wait(5);


});
Then(/^I should land on the home page$/, function () {

});