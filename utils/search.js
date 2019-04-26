const _ = require('lodash');

const arrayToLowerCase = (array) => {
	return array.map(function(element){
		let lowerEl = String(element).toLowerCase();
		return lowerEl;
	});
};

exports.findMatches = (schema, dataset, field, value) => {
	let matches = [];
	let fieldType = schema[field].type;
	let lowerValue = String(value).toLowerCase();
	if (fieldType === 'array'){
		matches = _.filter(dataset, (obj) => _.includes(arrayToLowerCase(obj[field]), lowerValue));
	} else {
		matches = _.filter(dataset,(obj) => String(obj[field]).toLowerCase() === lowerValue);
	}
	return matches;
};
