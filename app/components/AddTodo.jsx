var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText) {
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className='container__footer'>
        <form onSubmit={this.onSubmit}>
          <input ref='todoText' type='text' placeholder='What do you need to do?'/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
