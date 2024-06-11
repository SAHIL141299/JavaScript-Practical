let fs = require("fs");
let filename = "password.txt";
let Fetchdata = fs.readFileSync(process.cwd() + "/" + filename).toString();
let array = fs.readFileSync("password.txt", "utf8").split("\n");
array.map((item) => {
  let userID;
  const myArray = item.split(":");
  myArray[3] > 500 ? (userID = ", userID :" + myArray[3]) : (userID = "");
  console.log(
    `User: ${myArray[0]},Command interpreter: ${myArray[6]} ${userID}`
  );
});
