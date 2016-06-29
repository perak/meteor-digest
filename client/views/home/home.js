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

Template.HomeNewForm.rendered = function() {
	

	pageSession.set("homeNewFormInfoMessage", "");
	pageSession.set("homeNewFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
};

Template.HomeNewForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("homeNewFormInfoMessage", "");
		pageSession.set("homeNewFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var homeNewFormMode = "read_only";
			if(!t.find("#form-cancel-button")) {
				switch(homeNewFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("homeNewFormInfoMessage", message);
					}; break;
				}
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("homeNewFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.HomeNewForm.helpers({
	"infoMessage": function() {
		return pageSession.get("homeNewFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("homeNewFormErrorMessage");
	}
	
});
