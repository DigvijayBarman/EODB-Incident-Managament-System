const { urlencoded } = require('body-parser');
var userdb = require('../model/model');
const { query } = require('express');

//create and save new user
exports.create = (req, res)=>{
    //validate req
    if(!req.body){
        res.status(400).send({
            message: 'Content cannot be empty!'
        })
        return;
    }
    //new user

    const user = new userdb({
        date: req.body.date,
        department: req.body.department,
        service: req.body.service,
        details: req.body.details,
        status: req.body.status,
        remark: req.body.remark,
        rdate: req.body.rdate,
        issuetype: req.body.issuetype
    })

    //save user in database

    user.save(user)
    .then(data=>{
        // res.send(data)
        res.redirect('/add_user')
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || 'Create operation error!'
        })
    })

   
}

//retrieve and return all user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })
    }
    else if(req.query.status){
        const status = req.query.status;

        userdb.find({status: status})
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}

//update a new user by user id

exports.update = (req, res)=>{

    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
                
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

//delete a user
exports.delete = (req, res)=> {
    const id = req.params.id;

    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404)
            .send({message: 'Cannot delete with id or id not found'})
        }
        else{
            res.send({
               message: 'User was deleted successfully!'
            })
        }
    })
    .catch(err=>{
        res.status(500)
        .send({message: 'could not delete user w'})
    })
}