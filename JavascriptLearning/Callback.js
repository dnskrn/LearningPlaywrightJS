function Welcome(name,callback)    {
    console.log("Welcome to the class", name);
    callback(name);
}

function greet(name){
    console.log("Hello", name);
}
function bye(name){
    console.log("Bye", name);
}


Welcome("John", greet);
Welcome("John", bye);


function fetchUserData(callback) {
    console.log("Fetching user data from server...");

    setTimeout(function() {
        // Simulating server response after 2 seconds
        let user = { name: "Akshay", age: 25 };
        console.log("User data fetched!");
        callback(user); // Calling the callback with user data
    }, 2000);
}

function displayUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// Start the process
fetchUserData(displayUser);

