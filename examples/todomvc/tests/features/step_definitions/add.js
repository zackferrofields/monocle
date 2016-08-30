module.exports = function() {
  let count = 3;

  this.Given(/^I add a new todo "([^"]*)"$/, function(name) {
    const main = this.page.main();
    main.setValue('@newTodo', [name, this.Keys.ENTER]);
  });

  this.Then(/^I see "([^"]*)" is displayed$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.element('@latestTodo').text.to.equal(name);
  });

  this.Then(/^I see todo count increment "([^"]*)"$/, function(number) {
    const main = this.page.main();
    const todoCount = main.section.todoCount;
    const value = count + parseInt(number);
    todoCount.expect.element('@items').text.to.equal(value);
  });
};
