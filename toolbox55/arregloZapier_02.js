//https://platform.zapier.com/cli_tutorials/getting-started

let user = {
  id: inputData.pipe,
  name: inputData.name,
  is_active: inputData.is_active,
  total_max: inputData.total_max,
  email: inputData.email,
};
// let user = {
//  id: 654,
//  name: "Prueba4",
//  is_active: true,
//  total_max: 2,
//  email: "prueba4@correo.cl",
// };

/*let myArray = [
  {
    id: 123,
    name: "Prueba2",
    is_active: true,
    total_max: 2,
    email: "prueba2@correo.cl",
  },
  {
    id: 321,
    name: "Prueba3",
    is_active: true,
    total_max: 2,
    email: "prueba3@correo.cl",
  },
];*/
console.log("ARRAY before update : ", myArray);

objIndex = myArray.findIndex((obj) => obj.id == user.id);

debugger;
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
