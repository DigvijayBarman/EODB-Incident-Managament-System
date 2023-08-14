const axios = require('axios');


exports.homeRoutes = (req, res) => {

    //make get request to api
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index', {users:response.data})
    })
    .catch(err=>{
        console.log(err)
    })
    
}

exports.view_case = (req, res)=>{
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
    .then(function(userData){
        res.render("view_case", {user: userData.data})
    })
    .catch(err=>{
        res.send(err);
    })
}


 exports.active_case = (req, res)=>{
    
    //make get request to api
    axios.get('http://localhost:3000/api/users?status=Active')
    .then(function(response){
        res.render('active_case', {users:response.data})
    })
    .catch(err=>{
        console.log(err)
    })
 }


exports.add_user = (req, res)=>{
    res.render('add_user')
}

exports.update_user = (req, res)=>{
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
    .then(function(userData){
        res.render("update_user", {user: userData.data})
    })
    .catch(err=>{
        res.send(err);
    })
}