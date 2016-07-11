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
};

module.exports = rescue; 
