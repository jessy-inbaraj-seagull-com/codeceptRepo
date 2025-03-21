const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {

    I.amOnPage('/');
    I.wait(3);
});
When(/^I have to do something$/, function () {

});