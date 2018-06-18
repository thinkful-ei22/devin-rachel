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

    const findById = function(id){

        return store.items.find(item => item.id === id);
    };

    return { 
        validateName, 
        create 
    };

}() );
