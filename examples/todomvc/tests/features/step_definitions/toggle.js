module.exports = function() {
  let count = 4;

  this.Given(/^I toggle a todo$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const last = todoList.section.last;
    last.click('@toggle');
  });

  this.Then(/^I see "([^"]*)" todo$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@last').attribute('className').to.contain(name);
  });

  this.Then(/^I see todo count decrement "([^"]*)"$/, function(number) {
    const main = this.page.main();
    const todoCount = main.section.todoCount;
    const value = count - parseInt(number);
    todoCount.expect.element('@items').text.to.equal(value);
  });
};
