exports.arrayToLowerCase = (array) =>
    array.map(function(element){
        let lowerEl = String(element).toLowerCase();
        return lowerEl;
    });
