
// object created using constructor => its Singleton - object
const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false; 

//console.log(tinderUser);

// Objects - Nesting
const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "shivam",
            lastname: "Raj"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2} // -> give same problem as array -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj3 = Object.assign({}, obj1, obj2) //{} optional to give in .assign() -> means all combine into that empty obj{} i.e; it treat as Target and rest as source
// console.log(obj3);

//===== BestWay: 🌟 using {... } spread operator => Same as array
const obj3 = {...obj1, ...obj2};
console.log(obj3);


// when we recieve from Data-Base
const users = [
    {
        id: 1,
        email: "s2gmail.com"
    },
    {
        id: 1,
        email: "s2gmail.com"
    },
    {
        id: 1,
        email: "s2gmail.com"
    }
]
console.log(users[1].email); // to access


// get back to tinderUser - object
console.log(tinderUser);

// to get all keys & values of object => Object.keys(obj)
// return all key as 🌟Array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// entries => makes each Key: value into a separarte array and return
 console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));