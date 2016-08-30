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
      elements: {
        latestTodo: {
          selector: 'li:last-child'
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
