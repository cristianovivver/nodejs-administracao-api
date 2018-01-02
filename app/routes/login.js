module.exports = function(application) {
	
	application.get('/login', function(req, res){
		application.app.controllers.login.index(application, req, res);		
    });

	application.post('/login', function(req, res){
		application.app.controllers.login.auth(application, req, res);		
    }); 
    
};