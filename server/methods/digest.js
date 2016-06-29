Meteor.methods({
	"digestRequest": function(options) {
      var response = request.sync(options.host, {
          method: "GET",
          auth: {
              user: options.username,
              password: options.password,
              sendImmediately: false
          },
          followRedirect: true,
          followAllRedirects: true
      });
      return response.body;
    }
});
