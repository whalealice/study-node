var teacher = require("./teacher.js");
var student = require('./student.js');

function add_klass(teacherName,students){
	teacher.add_teacher(teacherName);

	students.forEach(function(item,index){
		student.add_satudent(item)
	})
}
exports.add_klass = add_klass;