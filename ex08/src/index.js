var users = [
  { firstName: "John", lastName: "Doe", age: 24, gender: "male " },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female " },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male " },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female " }
];

function getUsers() 
{
  var output="";
  for (let i = 0; i < users.length; i++) 
  {
   output+=`${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender} \n`;
     

  }
  return output;
   
}
function findUsers(lastName,gender) 
{
  try {
      let users=_find(users,{lastName:lastName,gender:gender});
      let iFindUser=`${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender} \n`;
      return iFindUser;
      
  } catch (error) {
      console.log("Cannot read property 'firstName' of undefined");
      return "Cannot read property 'firstName' of undefined";
      
  }
  
}
console.log(getUsers());
console.log(findUsers());