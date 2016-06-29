var pageSession = new ReactiveDict();

Template.Home.rendered = function() {
	
};

Template.Home.events({
	
});

Template.Home.helpers({
	
});

Template.HomeNewCustomComponent.created = function() {

};

Template.HomeNewCustomComponent.destroyed = function() {

};

Template.HomeNewCustomComponent.rendered = function() {

};

Template.HomeNewCustomComponent.helpers({

});

Template.HomeNewCustomComponent.events({
	"submit": function(e, t) {
        e.preventDefault();
		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				Meteor.call("digestRequest", values, function(err, res) {
					if(err) {
						alert(err);
                    }
             console.log(res);
                  	$(".response").text(res);
                });
            }
		);
		return false;      
    }
});
