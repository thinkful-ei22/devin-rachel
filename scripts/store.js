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

  const findById = function(id){
    return this.items.find(item => item.id === id);
  };

  const addItem = function(name){
    try{
      Item.validateName(name);
      const item = Item.create(name);
      this.items.push(item);
    }catch(e){
      console.log(`Cannot add item: ${e.message}`);
    }
  };

  const findAndToggleChecked = function(id){
    const item = this.findById(id);
    item.checked = !item.checked;
  };

  const findAndUpdateName = function(id, newName){
    try{
      Item.validateName(name);
      this.items.findById(id).name = newName;
    }catch(e){
      console.log(`Cannot update name: ${e.message}`);
    }
  };

  const findAndDelete = function(id){
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);

    // >>>> How to use filter when store.items is const?
    //this.items.filter(item => item.id !== id); 
  };

  return {
    items, hideCheckedItems, searchTerm,
    findById, addItem, findAndToggleChecked, findAndUpdateName, findAndDelete
  };

}() );

