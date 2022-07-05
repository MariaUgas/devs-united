// this is wrapped in an `async` function
// you can use await throughout the function

let identificador="id_"+inputData.row_id+"";
console.log(identificador);
output = {identificador:{
      id: inputData.pipe,
      name: inputData.name, 
      is_active:inputData.is_active, 
      total_max:inputData.total_max,
      email:inputData.email
  }
};

console.log("Desde Zapier",output);

//let store = StoreClient('9601fad7-98f8-4539-8484-96ccd6c58bcb
let store = StoreClient('5a7849f4-25bd-4913-a01d-1843c5a2666d');
console.log("STORE",store!==undefined);
  store.setMany(output);

//const values= await store.getMany(`inputData.pipe`);
//console.log("Registro Creado:", values);