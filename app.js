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
    setupSkillSection();
};
