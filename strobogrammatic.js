function findStrobogrammatic(n) {
    const strobogrammaticPairs = [
        ["0", "0"],
        ["1", "1"],
        ["6", "9"],
        ["8", "8"],
        ["9", "6"]
    ];
    

    function helper(current, length) {
    if (current.length === length) {
        // Prevent multi-digit numbers starting with '0'
        if (length > 1 && current[0] === "0") {
            return [];
        }
        return [current.join("")];
    }

    const result = [];

    for (const pair of strobogrammaticPairs) {
        // Avoid leading zeros in multi-digit numbers
        if (length > 1 && current.length === 0 && pair[0] === "0") {
            continue;
        }

        // Add valid pairs symmetrically
        result.push(...helper([pair[0], ...current, pair[1]], length));
    }

    return result;
}
    if (n <= 0) {
        return [];
    }

    return helper([], n);
}

// Test the function
const n = parseInt(prompt("Enter the number of digits:"), 10);
const strobogrammaticNumbers = findStrobogrammatic(n);

console.log(`Strobogrammatic numbers with ${n} digits:`);
for (const number of strobogrammaticNumbers) {
    console.log(number);
}