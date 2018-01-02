module.exports.index = function(application, req, res){
    res.render("login/index", { validacao: [] } );	
}
module.exports.auth = function(application, req, res){
    var login = req.body;
    req.assert('login','O login é obrigatório').notEmpty();
    req.assert('senha','A senha é obrigatória').notEmpty();        
    var erros = req.validationErrors();  
    // if(erros){
    //    res.render("login/index", {validacao : erros} );	
    //    return;
    //}
    res.render("login/index", {validacao: erros} );	
}

  
