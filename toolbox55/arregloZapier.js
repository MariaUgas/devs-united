/*** INICIO Escribir Arreglo ****/

function nameField() {
  return {
    users: [
      {
        id: inputData.pipe,
        name: inputData.name,
        is_active: inputData.is_active,
        total_max: inputData.total_max,
        email: inputData.email,
      },
    ],
  };
}
output = nameField();
console.log("Desde Zapier  ", output.users[0]);
//let store = StoreClient('9601fad7-98f8-4539-8484-96ccd6c58bcb
let store = StoreClient("5a7849f4-25bd-4913-a01d-1843c5a2666d");
console.log("STORE", store !== undefined);
store.setMany(output);

/*** FIN Escribir Arreglo ****/

/*** INICIO Leer Arreglo ****/

let store1 = StoreClient("5a7849f4-25bd-4913-a01d-1843c5a2666d");
const value = await store1.get("users");
console.log(value);

// esto se incluye al momento de leer
//** return {result: value}

/*** FIN Leer Arreglo ****/
