var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VerboIrregularSchema   = new Schema({
	infinitivo: String,
	pasado: String,
	participio: String,
	traduccion: String
});

module.exports = mongoose.model('VerbosIrregulares', VerboIrregularSchema);