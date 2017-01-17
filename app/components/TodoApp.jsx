var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Start a business'
        }, {
          id: 2,
          text: 'Travel around the world'
        }, {
          id: 3,
          text: 'Buy a house'
        }, {
          id: 4,
          text: 'Find your soulmate'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
