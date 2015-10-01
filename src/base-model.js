angular.module("lr.utils.AbstractModel", []).factory("AbstractModel", ["RootClass", function(RootClass){



	return RootClass.extend({
		/**
		 * All parameters passed are typed onto the model from the constructor
		 * @param attrs {Object} Optional object to hold initial params
		 */
		initialize: function(attrs){
			if (attrs) this.populate(attrs);
		},

		/**
		 * Generates an UUID for the model
		 * @param idName {String} Optional name to use instead of id
		 */
		generateId: function(idName){
			idName = idName == null ? "id" : idName;

			var d = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (d + Math.random()*16)%16 | 0;
				d = Math.floor(d/16);
				return (c=='x' ? r : (r&0x3|0x8)).toString(16);
			});

			this[idName] = uuid;

			return uuid;
		},

		/**
		 * Populates an arbitrary number of properties onto this model
		 * @param attrs {Object} Plain JS Object
		 */
		populate: function(attrs){
			for (var propName in attrs){
				this[propName] = attrs[propName];
			}
		}
	});
}]);