'use strict';
var repository = require('./repository/repository')();

const parseRequestParams = (req) => {
    return { id: req.params.id };
}

const rescue = (app) => {

    app.get('/dogs', (req, res) => {
        repository.getAll((err, results) => {
            res.send(results);
        });
    });

    app.get('/dogs/:id', (req, res) => {
        var params = parseRequestParams(req);
        repository.getById(params.id, (err, result) => {
            if (result) {    
             res.send(result);
            }
            else {
                res.status(404).send('Not found');
            }
        });
       
    });

    app.post('/dogs', (req, res) => {
        repository.create(req.body, (result) => {
            res.send(result);
        });
    });

    app.put('/dogs', (req, res) => {
        repository.update(req.body, (result) => {
            res.send(req.body);
        });
    });

    app.delete('/dogs/:id', (req, res) => {
        var params = parseRequestParams(req);
             
        repository.delete(params.id, (result) => {
            return res.send(result);
        });
    });

};

module.exports = rescue; 
