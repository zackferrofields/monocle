module.exports = function() {
  let count = 3;

  this.Given(/^I add a new todo "([^"]*)"$/, function(name) {
    const main = this.page.main();
    main.setValue('@newTodo', [name, this.Keys.ENTER]);
  });

  this.Then(/^I see "([^"]*)" is displayed$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const last = todoList.section.last;
    last.expect.element('@label').text.to.equal(name);
  });

  this.Then(/^I see todo count increment "([^"]*)"$/, function(number) {
    const main = this.page.main();
    const todoCount = main.section.todoCount;
    const value = count + parseInt(number);
    todoCount.expect.element('@items').text.to.equal(value);
  });

  this.Then(/^I see input without "([^"]*)"$/, function(text) {
    const main = this.page.main();
    main.expect.element('@newTodo').attribute('value').not.to.equal(text);
    main.expect.element('@newTodo').attribute('value').to.equal('');
  });
};
