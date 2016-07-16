'use strict';
var mongoose = require('mongoose');
var Pet = require('./pets.model');
var _ = require('lodash');

const getById = (id) => {
    return _.find(dogs, (dog) => { return dog.id === id });
};

const getMaxId = () => {
    var ids = dogs.map((item) => {
        return typeof item.petId === 'undefined' ? 0 : item.petId;
    });

    return _.max(ids);
};

const repository = () => {

    mongoose.connect('mongodb://will:border@ds017175.mlab.com:17175/rescue');

    return {
        getAll: (cb) => {
            Pet.find(cb);
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
            Pet.findByIdAndUpdate(item._id, item, {}, (err, updated) => {
                cb(updated);
            });
            
        },
        delete: (id, cb) => {
            Pet.findByIdAndRemove(id, (err, doc) => {
                if (err || !doc) {
                    cb('Unable to remove, document may no longer exist');
                }
                else {
                    cb('Removed');
                }
            });   
        } 
    };
};

module.exports = repository;
