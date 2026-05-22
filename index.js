let calculateTip = (billAmount, numberOfPeople, serviceQuality = "good") => {
    if(numberOfPeople > 0 && billAmount > 0) {
        let tip_percentage = 0;
        switch(serviceQuality) {
            case "excellent":
                tip_percentage = 0.2;
                break;
            case "good":
                tip_percentage = 0.15;
                break;
            case "poor":
                tip_percentage = 0.1;
                break;
        }
        let totalTip = billAmount * tip_percentage;
        let tipPerPerson = totalTip / numberOfPeople;
        let totalPerPerson = (billAmount + totalTip) / numberOfPeople;
        let totalBill = billAmount + totalTip;
        return `tipPerPerson: ${tipPerPerson}, totalPerPerson: ${totalPerPerson}, totalBill: ${totalBill}`;
    } else if(numberOfPeople <= 0) {
        return("error: number of people must be atleast 1");
    } else {
        return("error: bill amount must be a positive number");
    }
};

console.log(calculateTip(100, 4, "excellent"));

// grade calculator
function calculateGrade(scores) {
    // 1. Calculate total weight 
    let totalWeight = 0;
    for (let i = 0; i < scores.length; i++) {
        totalWeight = totalWeight + scores[i].weight;
    }
    
    // Check if the weights are close enough to 1.0
   
    if (totalWeight < 0.99 || totalWeight > 1.01) {
        return "Error: Total weight must add up to 1.0";
    }

    // 2. Calculate the weighted average manually
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        let currentItem = scores[i];
        // Multiply score by weight (e.g., 85 * 0.4) and add it to our total
        totalScore = totalScore + (currentItem.score * currentItem.weight);
    }
    

    let weightedAverage = Math.round(totalScore * 10) / 10;

    // 3. Determine the letter grade and passing status
    let letterGrade = "";
    let status = "Pass"; // Assume they pass unless they get an F

    if (weightedAverage >= 70 && weightedAverage <= 100) {
        letterGrade = "A";
    } else if (weightedAverage >= 60 && weightedAverage < 70) {
        letterGrade = "B";
    } else if (weightedAverage >= 50 && weightedAverage < 60) {
        letterGrade = "C";
    } else if (weightedAverage >= 40 && weightedAverage < 50) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
        status = "Fail";
    }

    // returning the result as an object
    return {
        weightedAverage: weightedAverage,
        letterGrade: letterGrade,
        status: status
    };
}

// testing

let studentScores = [
    { name: "Exam", score: 85, weight: 0.4 },
    { name: "Assignment", score: 90, weight: 0.3 },
    { name: "Project", score: 78, weight: 0.3 }
];

let result = calculateGrade(studentScores);

// Print the object result
console.log(result); 

// Password Strength Checker Task 3
function checkPasswordStrength(password) {
    let strength = "Weak";
    let points = 0;
    let missing = []; // Track what's missing

    // 1. Check length
    if (password.length >= 8) {
        points = points + 1;
    } else {
        missing.push("At least 8 characters");
    }

    // 2. Check Uppercase
    let hasUpperCase = /[A-Z]/.test(password);
    if (hasUpperCase) {
        points = points + 1;
    } else {
        missing.push("Uppercase letter");
    }

    // 3. Check Lowercase
    let hasLowerCase = /[a-z]/.test(password);
    if (hasLowerCase) {
        points = points + 1;
    } else {
        missing.push("Lowercase letter");
    }

    // 4. Check Digits/Numbers
    let hasDigit = /\d/.test(password);
    if (hasDigit) {
        points = points + 1;
    } else {
        missing.push("Number");
    }

    // 5. Check Special Characters
    // We can use a loop over your 'characters' array to see if the password contains any of them
    let characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '='];
    let hasSpecialCharacters = false;
    
    for (let i = 0; i < password.length; i++) {
        if (characters.includes(password[i])) {
            hasSpecialCharacters = true;
            break; // We found one, so we can stop looking!
        }
    }

    if (hasSpecialCharacters) {
        points = points + 1;
    } else {
        missing.push("Special character");
    }

    // 6. Determine strength based on total points
    if (points === 3) {
        strength = "Medium";
    } else if (points >= 4) {
        strength = "Strong";
    }

    // Return the final object with all the required pieces
    return { 
        strength: strength, 
        score: points, // Your prompt requested 'score' here
        missing: missing 
    };
}
console.log(checkPasswordStrength("hello")); // Example password to test

