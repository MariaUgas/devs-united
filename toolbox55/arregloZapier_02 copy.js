//https://platform.zapier.com/cli_tutorials/getting-started
/*
let user = {
  id: inputData.pipe,
  name: inputData.name,
  is_active: inputData.is_active,
  total_max: inputData.total_max,
  email: inputData.email,
};
console.log("Usuario  ", user);
let store = StoreClient("5a7849f4-25bd-4913-a01d-1843c5a2666d");

let myArray = store.users;
console.log("ARRAY before update : ", myArray);

let objIndex = myArray.findIndex((obj) => obj.id == user.id);

if (objIndex !== -1) {
  console.log("item before update: ", myArray[objIndex]);
  myArray[objIndex] = user;
  console.log("item after update: ", myArray[objIndex]);
} else {
  console.log("new register:", user);
  myArray.push(user);
}
console.log("ARRAY after update: ", myArray);

function nameField(arrayObj) {
  return {
    users: arrayObj,
  };
}

console.log(nameField(myArray));

store.setMany(output);


let store1 = StoreClient('5a7849f4-25bd-4913-a01d-1843c5a2666d');
const value = await store1.get('users'); 
console.log(value);


return {result: value}
*/
/******
 * 
 * 
 * 
// this is wrapped in an `async` function
// you can use await throughout the function

function nameField(){
return({'users':[{
      id: inputData.pipe,
      name: inputData.name, 
      is_active:inputData.is_active, 
      total_max:inputData.total_max,
      email:inputData.email
  }]})
};
output = nameField();
console.log("Desde Zapier  ",output.users[0]);

//let store = StoreClient('9601fad7-98f8-4539-8484-96ccd6c58bcb
let store = StoreClient('5a7849f4-25bd-4913-a01d-1843c5a2666d');
console.log("STORE",store!==undefined);
store.setMany(output);

let store1 = StoreClient('5a7849f4-25bd-4913-a01d-1843c5a2666d');
const value = await store1.get('users'); 
console.log(value);


return {result: value}
 * 
 * 
 * 
 * 
 * 
 */