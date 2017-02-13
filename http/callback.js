function learn(something){
	console.log(something);
}
function we(callback,something){
	something += ' is magical!';
	callback(something)
}

we(learn,'Node');