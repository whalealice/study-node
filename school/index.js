var klass = require("./klass.js");

exports.add_school = function(klasses){
	klasses.forEach(function(item,index){
		var teacher = item.teacherName;
		var students = item.students;
		klass.add_klass(teacher,students)
	})
	
}
var school = require('./index.js');
school.add_school([
	{"teacherName":"scott","students":["白富美","高富帅"]},
	{"teacherName":"marry","students":["小黑","小白"]}
]);