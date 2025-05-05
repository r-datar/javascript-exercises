const removeFromArray = function(inputArray,...elements) {
        // code for multiple elemets to be removed
        for(let i = 0; i < elements.length; i++) {
            const locateElement = (item) => item === elements[i];
            let foundElement = inputArray.filter(locateElement);
            console.log(foundElement);
            for (let j = 0; j < foundElement.length; j++) {
                let whereAt = inputArray.indexOf(foundElement[j]);
                console.log(whereAt);
                if (whereAt !== -1) {
                    inputArray.splice(whereAt,1);
                }
                    
            }
            
        }    
        return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
