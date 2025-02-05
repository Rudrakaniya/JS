// Implementing the promises functions

function userLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getUserTimeLine(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3", "post4"]);
    }, 2000);
  });
}

console.log("Start");
console.log("We are on website");

// async function details

async function displayUserDetails() {
  try {
    const loggedInUser = await userLogin(
      "rudra.kaniya.rk@gmail.com",
      "rudra123"
    );
    console.log(loggedInUser);
    const TimeLine = await getUserTimeLine(loggedInUser.userEmail);
    console.log(TimeLine);
  } catch (err) {
    console.log("There was an error getting the user data.");
  }
}

displayUserDetails();

console.log("End");
