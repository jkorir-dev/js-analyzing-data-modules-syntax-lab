// Step 5 requirement: Require datejs at the top, outside of the function
require('datejs');

function combineUsers(...args) {
    // Step 2: Initialize the Return Object
    const combinedObject = {
        users: []
    };

    // Step 3: Loop through args to isolate each array
    for (const usernameArray of args) {
        // Step 4: Using a spread operator, merge arrays together into the users attribute
        combinedObject.users = [...combinedObject.users, ...usernameArray];
    }

    // Step 5: Get today's date using datejs and format as M/d/yyyy
    // Date.today() is provided globally by the datejs library package
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Step 7: Return object
    return combinedObject;
}

// Export the function so your test environment suite can read it
module.exports = { combineUsers };
