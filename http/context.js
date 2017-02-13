var pet = {
	words:'汪汪汪!',
	speak:function(){
		console.log("......")
		console.log(this.words);
		console.log(this);
		console.log(this === pet);
	}
}
pet.speak();

function pet1(words){
	console.log("------")
	console.log(this.words);
	console.log(this);
	console.log(this === global);
}
pet1('...');

function pet2(words){
	this.words = words;
	this.speak = function(){
		console.log("++++++")
		console.log(this.words);
		console.log(this)
	}
}
var cat = new pet2('喵喵喵！');
cat.speak();