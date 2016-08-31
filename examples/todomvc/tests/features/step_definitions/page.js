module.exports = function() {

  this.Given(/^I open Monocle ToDoMVC page$/, function() {
    const main = this.page.main();
    main.navigate();
    main.expect.element('body').to.be.present.before(1000);
  });

  this.Then(/^I see title "([^"]*)"$/, function(title) {
    this.assert.title(title);
    // this.expect.element('title').text.to.equal(title);
  });

  this.Then(/^I see header "([^"]*)"$/, function(header) {
    const main = this.page.main();
    main.expect.element('@title').text.to.equal(header);
  });

  this.Then(/^I see input with placeholder "([^"]*)"$/, function(placeholder) {
    const main = this.page.main();
    main.expect.element('@newTodo').to.have.attribute('placeholder').equals(placeholder);
  });
};
