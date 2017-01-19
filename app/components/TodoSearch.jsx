var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(searchText, showCompleted);
  },
  render: function () {
    return (
      <div>
        <div>
          <input ref='searchText' type='search' placeholder='Search todos' onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input ref='showCompleted' type='checkbox' onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
