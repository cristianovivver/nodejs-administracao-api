module.exports = function(application) {
	
	application.get('/wizard', function(req, res){
		application.app.controllers.wizard.index(application, req, res);		
    });
};