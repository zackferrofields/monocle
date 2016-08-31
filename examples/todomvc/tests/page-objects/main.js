module.exports = {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    'newTodo': {
      selector: 'input[name=new-todo]'
    },
    'title': {
      selector: 'h1'
    }
  },
  sections: {
    todoList: {
      selector: '.todo-list',
      sections: {
        latest: {
          selector: 'li:last-child',
          elements: {
            label: {
              selector: 'label'
            },
            toggle: {
              selector: 'input.toggle'
            }
          }
        }
      }
    },
    todoCount: {
      selector: '.todo-count',
      elements: {
        items: {
          selector: 'strong'
        }
      }
    }
  }
};
