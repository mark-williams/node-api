'use strict';
var _ = require('lodash');

var dogs = [
    { id: 10001, name: 'Bert' },
    { id: 10002, name: 'Missy' },
    { id: 10003, name: 'Rosy' },
    { id: 10004, name: 'Buster' }
];

const getById = (id) => {
    return _.find(dogs, (dog) => { return dog.id === id });
};

const getMaxId = () => {
    var ids = dogs.map((item) => { return item.id });
    return _.max(ids);
};

const repository = () => {
    return {
        getAll: (cb) => {
            cb(dogs);
        },
        getById: (id, cb) => {
            var dog = getById(id);
            cb(dog);
        },
        create: (item, cb) => {
            var newId = getMaxId() + 1;
            item.id = newId;
            dogs.push(item);

            cb(item);
        },
        update: (updatedItem, cb) => {
            var dog = getById(updatedItem.id);
            _.merge(dog, updatedItem);
            cb(updatedItem);
        },
        delete: (id, cb) => {
            console.log('Deleting ', id);
            _.remove(dogs, (dog) => { return dog.id === id });
            cb('Item deleted');
        } 
    };
};

module.exports = repository;
