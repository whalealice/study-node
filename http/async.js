var a = 0;
// function printIt(){
// 	console.log(a);
// }
// function plus(){
// 	a +=1;
// };
// plus();
// printIt();

function printIt(){
	console.log(a);
}
function plus(callback){
	setTimeout(function(){
		a +=1;
		callback()
	},1000)
	
};
plus(printIt);
// printIt(plus);