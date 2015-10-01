describe("RootClass test", function() {

	var ProjectModel;

	beforeEach(module("lr.utils.AbstractModel"));

	beforeEach(inject(function(AbstractModel){
		ProjectModel = AbstractModel.extend({

			defaults: function(){
				return {
					name	: "Project",
					tasks	: []
				};
			}

		});
	}));

	it("Test creation", inject(function(AbstractModel) {
		expect(new AbstractModel()).toBeDefined();
	}));


	it("Test defaults", function() {
		var project = new ProjectModel();
		expect(project.name).toBe("Project");
		expect(project.tasks.length).toBe(0);
	});

	it("Test auto population on constructor", function() {
		var project = new ProjectModel({
			name: "Best Project",
			tasks: [1]
		});
		expect(project.name).toBe("Best Project");
		expect(project.tasks.length).toBe(1);
	});

	it("Test populate", function() {
		var project = new ProjectModel();
		project.populate({
			budget:5000
		});
		expect(project.budget).toBe(5000);
	});

	it("Test UUID generation", function() {
		var store = {};
		for (var i = 0; i < 100; i++){
			var inst = new ProjectModel();
			inst.generateUID();
			expect(store[inst.id]).not.toBeDefined();
			store[inst.id] = true;
		}
	});
});