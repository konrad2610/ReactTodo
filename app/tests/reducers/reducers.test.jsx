var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'code'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var showCompleted = false;
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(showCompleted), df(action));

      expect(res).toEqual(!showCompleted);
    });
  });

  describe('todosReducer', () => {
    it('should add todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Write some code'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: '12345',
        text: 'Do something',
        completed: true,
        createdAt: 0,
        completedAt: 1
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '12345'
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

    it('should add todos', () => {
      var todos = [{
        id: 10,
        text: 'Write some more code',
        completed: true,
        completedAt: 1000,
        createdAt: 100
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
