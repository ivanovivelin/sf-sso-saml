const request = require('request');

module.exports = function(app, config, passport) {
	app.get("/", function(req, res) {
		if(req.isAuthenticated()) {
		  res.render("index.html",
		  	{
		  		user : req.user,
		  		title: config.app.name,
		  		backUrl: config.app.backUrl,
		  	});
		} else {
			res.render("index.html",
				{
					user : null,
					title: config.app.name,
					backUrl: config.app.backUrl,
				});
		}
	});

	app.get("/login",
		passport.authenticate('saml', { failureRedirect: '/error', failureFlash: true }),
		function(req, res) {
			res.redirect('/');
		}
	);

	app.post('/login/callback',
		passport.authenticate('saml', { failureRedirect: '/error', failureFlash: true }),
		function(req, res) {
			res.redirect('/');
		}
	);

	app.get("/signup", function (req, res) {
		res.render("signup");
	});

	app.get("/profile", function(req, res) {
		console.log(req.user);
    	if(req.isAuthenticated()){
			res.render("profile.html",
				{
					user : req.user,
					title: config.app.name,
				});
   		} else {
    	    res.redirect("/login");
	    }
	});

	app.get('/logout', function(req, res) {
		req.logout();
		// TODO: invalidate session on IP
		res.redirect('/');
	});

	app.get('/accessToken', function(req, res) {
		console.log('hitting register');

		const options = {  
				url: 'https://test.salesforce.com/services/oauth2/token',
				method: 'POST',
				headers: {
						'Accept': 'application/json'
				},
				form: {
					
				}
		};

		request(options, function(err, response, body) {  
				let json = JSON.parse(body);
				console.log(json);
				res.send({ hello: json });
		});
	});

	app.get('/register', function(req, res) {
		res.render("register.html",
		{
			user: null,
		  title: config.app.name
		});
	});

	app.post('/register', function(req, res) {
		var data = { 
			userInfo: {
				firstname: req.body.firstName,
				lastname: req.body.lastName,
				email: req.body.email,
				password: req.body.password
			}
		}

		const options = {  
				url: '',
				method: 'POST',
				headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer 00D0E0000000peZ!AQEAQMDAMqoMLXARrvh7CuOT.OpfFsjINBMbi4jDmMCVUWFlRzHkdwCqoMYPidLVApmM_lgn4o3ysfR1XI_gKvONr8cZ2KDg'
				},
				body: JSON.stringify(data)
		};

		request(options, function(err, response, body) {  
				let json = JSON.parse(body);
				console.log(json);
				res.render("profile.html",
				{
					user : req.user,
					title: config.app.name,
				});
				//res.send({ 'User created !': json.dreiID });
		});
	});
}