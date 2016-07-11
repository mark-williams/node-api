const dogs = [
    { id: 1, name: 'Bert' },
    { id: 2, name: 'Missy' },
    { id: 3, name: 'Rosy' },
    { id: 4, name: 'Buster' }
];

const rescue = (app) => {

    app.get('/dogs', (req, res) => {
        res.send(dogs);
    });

    app.post('/dogs', (req, res) => {
        var newId = dogs.length + 1;
        req.body.id = newId;
        dogs.push(req.body);

        res.send(dogs);
    });


};

module.exports = rescue; 
