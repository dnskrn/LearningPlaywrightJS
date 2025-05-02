const fetchUserInfo = async function fetchData() {
    const response = await fetch('https://reqres.in/api/users?page=2');

    // (await response).ok ? console.log("Success") : throw new Error("Failed to fetch data");

    if ((await response).ok) {
        console.log("Success");
    } else {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json(); F
    console.log(data);

}

fetchUserInfo();
