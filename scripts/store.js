/* global cuid, Item*/
'use strict';


const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  const hideCheckedItems = false;

  const searchTerm = '';

  const addItem = function(name){
    try{
      Item.validateName(name);
      const item = Item.create(name);
      this.items.push(item);
    }catch(e){
      console.log(`Cannot add item: ${e.message}`);
    }
  };

  return {
    items, hideCheckedItems, searchTerm
  };

}() );

