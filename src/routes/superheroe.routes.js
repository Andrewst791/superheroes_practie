const express = require('express')
const superheroe_model = require('../models/superheroe.model')
const superheroe_routes = express.Router()

superheroe_routes.post('/superheroe', (req, res)=>{
    const superheroe_new = superheroe_model(req.body)
    superheroe_new
        .save()
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
})
superheroe_routes.get('/', (req, res)=>{
    superheroe_model
        .find()
        .then(data=>res.json(data))
        .catch(error=>res.json({mensaje:error}))
})
superheroe_routes.get('/:superheroe_id', (req, res)=>{
    const {superheroe_id} = req.params
    superheroe_model
        .findById(superheroe_id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})
superheroe_routes.put('/:superheroe_id', (req, res)=>{
    const {superheroe_id} = req.params
    const{real_name, super_name, power, city} = req.body
    superheroe_model
        .updateOne({ _id: superheroe_id },{$set:{real_name, super_name, power, city}})
        .then(data=>res.json(data))
        .catch(error=>res.json({message:error}))
})
superheroe_routes.delete('/:superheroe_id', (req, res)=>{
    const {superheroe_id} = req.params
    superheroe_model
        .deleteOne({ _id: superheroe_id })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

module.exports = superheroe_routes