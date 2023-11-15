function saveToLocalStorage() {
    // Fetch values from the form
    var fullName = document.querySelector('input[placeholder="Full name"]').value;
    var email = document.querySelector('input[placeholder="Email address"]').value;
    var phoneNumber = document.querySelector('input[placeholder="Phone number"]').value;
    var roleType = document.querySelector('input[placeholder="Valorant Role Type"]').value;
    var password = document.querySelector('input[placeholder="Create password"]').value;
    var repeatPassword = document.querySelector('input[placeholder="Repeat password"]').value;
    var ign = document.querySelector('input[placeholder="IGN"]').value;

    // Create an object to store user information
    var user = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        roleType: roleType,
        password: password,
        repeatPassword: repeatPassword,
        ign: ign
        // Add other properties as needed
    };

    // Convert the object to a JSON string
    var userJSON = JSON.stringify(user);

    // Log the data being stored
    console.log('Setting user data to local storage:', userJSON);

    // Save the JSON string to local storage under the key 'user'
    localStorage.setItem('user', userJSON);

    // Log a message after setting the item
    console.log('User data has been saved to local storage.');

    // Redirect to the login page or perform other actions as needed
    window.location.href = 'login.html';
}
