window.onload = function () {
    function setupSkillSection() {
        var skillButton = document.getElementById("skillButton");
        var skillBox = document.getElementById("skillBox");
        if (skillButton && skillBox) {
            skillButton.addEventListener("click", function () {
                skillBox.style.display = (skillBox.style.display === "none" || skillBox.style.display === "") ? "block" : "none";
            });
        }
        else {
            console.error("Skill elements not found");
        }
    }
    function setupEducationSection() {
        var educationButton = document.getElementById("educationButton");
        var educationBox = document.getElementById("educationBox");
        if (educationButton && educationBox) {
            educationButton.addEventListener("click", function () {
                educationBox.style.display = (educationBox.style.display === "none" || educationBox.style.display === "") ? "block" : "none";
            });
        }
        else {
            console.error("Education elements not found");
        }
    }
    function setupExperienceSection() {
        var experienceButton = document.getElementById("experienceButton");
        var experienceBox = document.getElementById("experienceBox");
        if (experienceButton && experienceBox) {
            experienceButton.addEventListener("click", function () {
                experienceBox.style.display = (experienceBox.style.display === "none" || experienceBox.style.display === "") ? "block" : "none";
            });
        }
        else {
            console.error("Experience elements not found");
        }
    }
    setupSkillSection();
    setupEducationSection();
    setupExperienceSection();
};
