module.exports = function() {
  let count = 4;

  this.Given(/^I toggle a todo$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const latest = todoList.section.latest;
    latest.click('@toggle');
  });

  this.Then(/^I see a "([^"]*)" todo$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@latest').attribute('className').to.contain(name);
  });

  this.Then(/^I see todo count decrement "([^"]*)"$/, function(number) {
    const main = this.page.main();
    const todoCount = main.section.todoCount;
    count -= parseInt(number);
    todoCount.expect.element('@items').text.to.equal(count);
  });

  this.When(/^I untoggle a todo$/, function() {
    const main = this.page.main();
    const todoList = main.section.todoList;
    const latest = todoList.section.latest;
    latest.click('@toggle');
  });

  this.Then(/^I don't see a "([^"]*)" todo$/, function(name) {
    const main = this.page.main();
    const todoList = main.section.todoList;
    todoList.expect.section('@latest').attribute('className').not.to.contain(name);
  });

  this.Then(/^I see todo count incremented "([^"]*)"$/, function(number) {
    const main = this.page.main();
    const todoCount = main.section.todoCount;
    count += parseInt(number);
    todoCount.expect.element('@items').text.to.equal(count);
  });
};
