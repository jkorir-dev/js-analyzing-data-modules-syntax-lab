function combineUsers(...usernameArrays) {
    // 1. Merge all input arrays into a single flat array
    const flatUsers = usernameArrays.flat();
    
    // 2. Generate today's date in "M/d/yyyy" format
    const today = new Date();
    const month = today.getMonth() + 1; // Months are 0-indexed, so add 1
    const day = today.getDate();
    const year = today.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    
    // 3. Return the combined object required by the assertions
    return {
        users: flatUsers,
        merge_date: formattedDate
    };
}

// Export the function so the test suite can import it
module.exports = { combineUsers };
