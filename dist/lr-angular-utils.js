angular.module("lr.utils.AbstractModel", ["RootClass"]).factory("AbstractModel", ["RootClass", function(RootClass){


	return RootClass.extend({
		/**
		 * Override the constructor to call any defualt setup
		 * @param attrs {Object} Optional object of properties to type onto the model
		 */
		constructor: function(attrs){
			this.populate(this.defaults());
			if (attrs) this.populate(attrs);

			this.initialize.apply(this, arguments);
		},

		/**
		 * Empty initialize function that can be overriden
		 */
		initialize: function(){},

		/**
		 * Returns an object of with default properties for the model
		 */
		defaults: function(){ return {}; },

		/**
		 * Populates an arbitrary number of properties onto this model
		 * @param attrs {Object} Plain JS Object
		 */
		populate: function(attrs){
			if (attrs != null && typeof attrs === "object"){
				for (var propName in attrs){
					this[propName] = attrs[propName];
				}
			}
		},

		/**
		 * Generates an UUID for the model
		 * @param idName {String} Optional name to use instead of id
		 */
		generateUID: function(idName){
			idName = idName == null ? "id" : idName;

			var d = new Date().getTime();
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (d + Math.random()*16)%16 | 0;
				d = Math.floor(d/16);
				return (c=='x' ? r : (r&0x3|0x8)).toString(16);
			});

			this[idName] = uuid;

			return uuid;
		}
	});
}]);