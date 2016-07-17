var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');
var Movise = mongoose.model('Movie', MovieSchema);

module.exports = Movise