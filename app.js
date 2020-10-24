let myName = 'Julie Crotzer';
let careerGoal = 'Frontend Web developer';
let selfDescription = 'I am a wife, mother and love Jesus!';
let myInterests = ['Reading', 'Traveling'];
let skills = ['HTML', 'BAM:CSS'];

function displayPosition(jobTitle, company, description) {
    console.log("* " + jobTitle + "at " + company + "-" +  description); 
}

function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* "+ skill);
    }
}

function displayInterests() {
    console.log("\nMy interests:");
    for (i of myInterests) {
        console.log("* " + i);
    }
}

function displayAll() {
    console.log("Name:\t\t\t" + myName.toUpperCase());
    console.log("Career:\t" + careerGoal);
    console.log("Description:\t" + selfDescription);
    displayInterests();
    console.log("\nExperience:");
    displayPosition("Regisitered Nurse ", "Krucial Staffing", "Take care of COVID patients in the ER");
    displayPosition("Regisitered Nurse ", "Williamson Medical Center", "Take care of critical patients in the ER");
    displayPosition("Registered Nurse ", "Healthtrust Workforce Solutions", "Take care of critically ill patients in the Intensive Care Unit");
    console.log("\nMy Skills:");
    displaySkill("HTML", true);
    displaySkill("CSS", true);
    displaySkill("Dancing", false);
    displaySkill("Cooking", true);
    displaySkill("Gardening", false);
}

displayAll();



