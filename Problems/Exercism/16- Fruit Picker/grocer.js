



/*
  Instructions
  You are creating a new online portal for your patrons to order their fruit fresh from the grocer. 
  The grocer has an API that you can use to see if they have the inventory desired by your customers. 
  You need to create a small library of functions for interacting with the grocer's API.

  1. Create a callback to be called when the order is successful
  Write a callback function called onSuccess to be called when the order is successful. It should invoke the imported notify function passing a success message to it.

  onSuccess();
  // => `notify` called with `{ message: 'SUCCESS' }`
  
  2. Create a callback to be called when the order fails with an error
  Write a callback function called onError to be called when the order encounters an error. 
  It should invoke the imported notify function passing an error message to it.

  onError();
  // => `notify` called with `{ message: 'ERROR' }`
  
  3. Create a wrapper to wrap the external api function
  The grocer's API provides a function to order from their inventory called order. 
  It receives three arguments: a query, a callback function to be invoked when the order is successful, 
  and a callback function to be invoked when the order encounters an error. 
  You decide to wrap the api function call in a newly defined function orderFromGrocer to insulate your codebase from external changes. 
  Your function should forward the arguments (which match the provided api function) to the api function.

  The query takes the form of an object:

  const query = {
    variety: string,
    quantity: number,
  };
  orderFromGrocer(
    { variety: 'pear', quantity: 12 },
    exampleSuccessCallback,
    exampleErrorCallback
  );
  // => `order` was called with the query and the callbacks
  
  4. Create a convenient short function
  You find that you are calling this function from many different places with the same functions. 
  Seeing an opportunity to refactor your code, you want to create a function where you can supply the variety and quantity to order as arguments.

  postOrder('peach', 100);
  // => order submitted for 100 peaches 
  
  07-April-2023
*/


let storeStatus = 'OFFLINE';
/**
 * For testing purposes, set the store status
 * @param  {string} status
 */
export function setStatus(status) {
  storeStatus = status;
}
/**
 * For testing purposes, reset the store status
 */
export function resetStatus() {
  storeStatus = 'OFFLINE';
}
/**
 * Invokes the callback with the store's status to simulate an API call
 * @param  {StatusCallback} callback
 */
export function checkStatus(callback) {
  return callback(storeStatus);
}
/**
 * INVENTORY API
 */
let lastInventoryQuery = undefined;
let inventoryResponse = undefined;
/**
 * For testing purposes, set the response to return when queried
 * @param  {any} ...nextResponse
 */
export function setResponse(...nextResponse) {
  inventoryResponse = nextResponse;
}
/**
 * For testing purposes, get the last query
 * @return {string}
 */
export function getLastQuery() {
  return lastInventoryQuery;
}
/**
 * For testing purposes, reset the last query
 */
export function resetQuery() {
  lastInventoryQuery = undefined;
  inventoryResponse = ['undefined response'];
}
/**
 * Checks the inventory (inventoryResponse) then invokes the callback with the result
 * @param  {GrocerQuery} query
 * @param  {InventoryCallback} callback
 * @return {AvailabilityAction} return the result of the callback
 */
export function checkInventory(query, callback) {
  lastInventoryQuery = query;
  return callback.apply(null, inventoryResponse);
}
