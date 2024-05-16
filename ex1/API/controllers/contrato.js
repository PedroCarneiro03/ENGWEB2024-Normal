const mongoose = require('mongoose')
var CONTRATO = require("../models/contrato")



module.exports.findByQuery = query =>{
    return CONTRATO
        .find(query)
        .exec()
}

module.exports.distincts = param =>{
    return CONTRATO
        .distinct(param)
        .exec()
}

module.exports.list = () => {
    return CONTRATO
        .find()
        .sort({_id : 1})
        .exec()
}

module.exports.findById = id => {
    return CONTRATO
        .findOne({_id : id})
        .exec()
}

module.exports.insert = contrato => {
    if((CONTRATO.find({_id : contrato._id}).exec()).length != 1){
        var newCONTRATO = new CONTRATO(contrato)
        return newCONTRATO.save()
    }
}

module.exports.update = (id, contrato) => {
    return CONTRATO
        .findByIdAndUpdate(id, contrato, {new : true})
        .exec()
}

module.exports.remove = id => {
    return CONTRATO
        .find({_id : id})
        .deleteOne()
        .exec()
}