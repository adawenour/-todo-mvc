
// load mongoose since we need it to define a model
	var mongoose = require('mongoose');

	module.exports = mongoose.model('Todo', {
		text : String,
		done : Boolean
	});

angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	});
