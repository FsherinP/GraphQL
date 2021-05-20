const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   student:store.collection('student'),
   college:store.collection('college')
};
