'use strict';
var repository = require('./repository/repository')();

const parseRequestParams = (req) => {
    return { id: req.params.id };
}

const getApiBase = (req) => {
    return req.protocol + '://' + req.get('host');
};

const itemToResponseItem = (item, apiBase) => {
    return {
        _id: item._id,
        name: item.name,
        description: item.description,
        dateOfBirth: item.dateOfBirth,
        itemUri: `${apiBase}/dogs/${item._id}`
    }
};

const resultsToResponse = (results, apiBase) => {
    let response = results.map((item) => {
        return itemToResponseItem(item, apiBase);
    });

    return response;
}

const rescue = (app) => {

    app.get('/dogs', (req, res) => {
        repository.getAll((err, results) => {
            res.status(200).send(resultsToResponse(results, getApiBase(req)));
        });
    });

    app.get('/dogs/:id', (req, res) => {
        var params = parseRequestParams(req);
        repository.getById(params.id, (err, result) => {
            if (result) {    
             res.status(200).send(itemToResponseItem(result, getApiBase(req)));
            }
            else {
                res.status(404).send('Not found');
            }
        });
       
    });

    app.post('/dogs', (req, res) => {
        repository.create(req.body, (result) => {
            res.status(201).send(itemToResponseItem(result,  getApiBase(req)));
        });
    });

    app.put('/dogs', (req, res) => {
        repository.update(req.body, (result) => {
            res.send(itemToResponseItem(result,  getApiBase(req)));
        });
    });

    app.delete('/dogs/:id', (req, res) => {
        var params = parseRequestParams(req);
             
        repository.delete(params.id, (result) => {
            if (result) {
                return res.status(204).send();
            }
            
            return res.status(400).send('Unable to remove');
        });
    });

};

module.exports = rescue; 
