'use strict';
var mongoose = require('mongoose');
var Pet = require('./pets.model');
var _ = require('lodash');

const repository = () => {

    mongoose.connect('mongodb://will:border@ds017175.mlab.com:17175/rescue');

    return {
        getAll: (cb) => {
            Pet.find({ animal: 'dog' }, cb);
        },
        getById: (id, cb) => {
            Pet.findById(id, cb)
        },
        create: (item, cb) => {
            var petSpec = {
                name: item.name,
                animal: item.animal,
                description: item.description,
                dateOfBirth: item.dateOfBirth
            };
            var newPet = new Pet(petSpec);
            newPet.save((err) => {
                if (err) {
                    cb('Error creating [' + err + ']');
                    return;
                }

                cb(newPet);
            });
            
        },
        update: (item, cb) => {
            var query = { _id: item._id};
            Pet.findByIdAndUpdate(item._id, item, { new: true }, (err, updated) => {
                cb(updated);
            });
            
        },
        delete: (id, cb) => {
            Pet.findByIdAndRemove(id, (err, doc) => {
                if (err || !doc) {
                    cb(false);
                }
                else {
                    cb(true);
                }
            });   
        } 
    };
};

module.exports = repository;
