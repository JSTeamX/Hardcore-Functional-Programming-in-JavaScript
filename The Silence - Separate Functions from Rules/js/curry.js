//http://output.jsbin.com/romun
function curry(fn){
	return function(){
		if(fn.length > arguments.length){
			var slice = Array.prototype.slice;
			var args  = slice.apply(arguments);
			return function(){
				return fn.apply(
					null,
					args.concat(slice.apply(arguments))
				);
			} 
		}
		return fn.apply(null,arguments);
	}
}

var PEOPLE = [{name:'Herman'},{name:'Camila'},{name:'Thomas'}];

var get = curry(function(property,object){
	return object[property];
});

var names = PEOPLE.map(get('name'));

console.log(names);

