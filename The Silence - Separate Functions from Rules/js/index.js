var PEOPLE = [{name:'Herman'},{name:'Camila'},{name:'Thomas'}];
var counter = 0;


function get(property,object){
	counter++;
	return object[property];
}

//NOT WORK, return 4 elements mapped
var _names = PEOPLE.map(get('name'));

console.warn(names);
/*
	// IT WORKS
	function getPersonName(person){
		return get('name',person);
	}
	var names = PEOPLE.map(getPersonName);
*/