// // Synchronous Code
// function myFunc() {
//   console.log("Inside Function ");
// }

// console.log("Strat");
// myFunc();
// console.log("End");

// // Asynchoronous Code
// console.log("start");
// setTimeout(() => {
//   console.log("Inside Function");
// }, 2000);
// console.log("End");

// CallBacks

//callback hell
// function callbackHell(callback) {
//   setTimeout(() => {
//     const data = "Inside CallBackHell Function";
//     console.log(data);
//     callback(data);
//   }, 2000);
// }

// function firstFunc(data, callback) {
//   setTimeout(() => {
//     const proccessedData1 = `${data}- Proccessed First`;
//     console.log(`Inside firstFunc Function`);
//     callback(proccessedData1);
//   }, 1500);
// }

// function secondFunc(data, callback) {
//   setTimeout(() => {
//     const proccessedData2 = `${data}- Proccessed Second`;
//     console.log(`Inside secondFunc Function`);
//     callback(proccessedData2);
//   }, 1000);
// }

// callbackHell((data) => {
//   firstFunc(data, (proccessedData1) => {
//     secondFunc(proccessedData1, (proccessedData2) => {
//       console.log(`Final Result off all Function -  ${proccessedData2}`);
//     });
//   });
// });

// Callbacks are not always Asynchronous
// console.log("Start");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((n) => console.log(n));

// console.log("End");

// Example - 1
// console.log("Start");

// function getUserDataFromDB(name, callback) {
//   setTimeout(() => {
//     console.log(`Getting user name`);
//     callback(name);
//   }, 2000);
// }

// function getuserHobbies(name, callback) {
//   setTimeout(() => {
//     console.log("Getting user Hobbies");
//     const hobbies = ["eating", "Sleeping", "Coding"];
//     callback(hobbies);
//   }, 2000);
// }

// getUserDataFromDB("Sangar", (data) => {
//   console.log(data);
//   getuserHobbies(data, (hobby) => {
//     console.log(hobby);
//   });
// });
// console.log("End ");

// Promises
// function checknumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 === 0) {
//       resolve(`${number} is Even`);
//     } else {
//       reject(`${number} is Odd`);
//     }
//   });
// }

// checknumber(9)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

// callback hell in promises
// function callBackHell(callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Inside call back hell";
//       console.log(data);
//       resolve(data);
//     }, 2000);
//   });
// }

// function firstFunction(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const proccessedData1 = `${data} - Proccessed data`;
//       console.log("Inside First Function");
//       resolve(proccessedData1);
//     }, 2000);
//   });
// }

// function secondFunction(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const proccessedData2 = `${data} - Proccessed data`;
//       console.log("Inside Second Function");
//       resolve(proccessedData2);
//     }, 1500);
//   });
// }

// callBackHell()
//   .then((data) => firstFunction(data))
//   .then((proccessedData1) => secondFunction(proccessedData1))
//   .then((proccessedData2) =>
//     console.log(`Final Result Of All Promises`, proccessedData2)
//   )
//   .catch((error) => console.log(error));

// Example 1 promises
// function getuserDataFromDB(name, callback) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("Getting user name");
//       res(name);
//     }, 2000);
//   });
// }

// function getUserHobbies(name, callback) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("Getting user Hobbies");
//       res(["eat", "sleep", "code"]);
//     });
//   }, 2000);
// }

// getuserDataFromDB("Sangar")
//   .then((data) => {
//     console.log(data);
//     return getUserHobbies(data);
//   })
//   .then((hobbies) => {
//     console.log(hobbies);
//   })
//   .catch((err) => console.log(err));

// Asynchronous
// function fetchDataFromServer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User data retrived from server");
//     }, 2000);
//   });
// }

// async function getUserData() {
//   try {
//     const data = await fetchDataFromServer();
//     console.log(data);
//     console.log("Remaing task can be executed");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserData();

// callback hell
// function callbackHell() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       const data = "Inside CALLBACK FUNCTION ";
//       console.log(data);
//       res(data);
//     }, 2000);
//   });
// }

// function firstFuntion(data) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       const proccessedData1 = `${data} -> Inside FIRST FUNCTION`;
//       console.log("Inside FIRST FUNCTION");
//       res(proccessedData1);
//     }, 2000);
//   });
// }

// function secondFunction(data) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       const proccessedData2 = `${data} -> inside SECOND FUNCTION`;
//       console.log("inside SECOND FUNCTION");
//       res(proccessedData2);
//     }, 2000);
//   });
// }

// async function getDatafromUSerDatabase() {
//   try {
//     const data = await callbackHell();
//     const proccessedData1 = await firstFuntion(data);
//     const proccessedData2 = await secondFunction(proccessedData1);
//     console.log(proccessedData2);
//   } catch (error) {
//     console.log(object);
//   }
// }

// getDatafromUSerDatabase();

// Example 1
function getUserDataFromDB(data, callback) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("getting user Data");
      res(data);
    }, 2000);
  });
}

function getuserHobbies(data, callback) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(data);
      console.log("getting user Hobbies");
      const hobbies = ["eat", "sleep", "code"];
      res(hobbies);
    }, 2000);
  });
}

async function getUserInfo() {
  try {
    const data = await getUserDataFromDB("Sangar");
    const secondData = await getuserHobbies(data);
    console.log(secondData);
  } catch (error) {
    console.log(error);
  }
}

getUserInfo();
