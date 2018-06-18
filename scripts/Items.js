/* global cuid, store */
'use strict';

const Item = (function () {
    const validateName = function(name) {
        if (name === '') {
            throw new TypeError('Name does not exist.');
        }
    };
    const create = function(name) {
        const item = {
            id: cuid(),
            name: name,
            checked: false
        };

        return item;
    };

    return { 
        validateName, 
        create 
    };

}() );
