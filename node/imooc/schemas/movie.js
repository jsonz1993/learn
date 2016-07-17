var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

// 每次在保存的时候
MovieSchema.pre('save', function(next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	} else {
		this.meta.updateAt = Date.now();
	}

	next();
})

// 实例化之后才会进入该方法
MovieSchema.statics = {
	fetch: function(cb){
		return this.
		find({}) // 寻找所有
		.sort('meta.updateAt')  // 按时间排序
		.exec(cb);
	},

	findById: function(id, cb) {
		return this
		.findOne({_id: id})
		.exec(cb);
	}
}

module.exports = MovieSchema;