module.exports = function() {

  this.Given(/^I am on ToDo page$/, function() {
    this
      .url('https://zackferrofields.github.io/monocle/')
      .pause(1000);

    this.expect.element('body').to.be.present.before(1000);
  });

  this.Then(/^I see title "([^"]*)"$/, function(title) {
    this.assert.title(title);
    // this.expect.element('title').text.to.equal(title);
  });

  this.Then(/^I see header "([^"]*)"$/, function(header) {
    this.expect.element('h1').text.to.equal(header);
  });

  this.Then(/^I see input with placeholder "([^"]*)"$/, function(placeholder) {
    this.expect.element('input.new-todo').to.have.attribute('placeholder').equals(placeholder);
  });
};
