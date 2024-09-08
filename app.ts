window.onload = function (): void {
    function setupSkillSection(): void {
        const skillButton = document.getElementById("skillButton") as HTMLButtonElement | null;
        const skillBox = document.getElementById("skillBox") as HTMLElement | null;

        if (skillButton && skillBox) {
            skillButton.addEventListener("click", () => {
                skillBox.style.display = (skillBox.style.display === "none" || skillBox.style.display === "") ? "block" : "none";
            });
        } else {
            console.error("Skill elements not found");
        }
    }

    function setupEducationSection(): void {
        const educationButton = document.getElementById("educationButton") as HTMLButtonElement | null;
        const educationBox = document.getElementById("educationBox") as HTMLElement | null;

        if (educationButton && educationBox) {
            educationButton.addEventListener("click", () => {
                educationBox.style.display = (educationBox.style.display === "none" || educationBox.style.display === "") ? "block" : "none";
            });
        } else {
            console.error("Education elements not found");
        }
    }
 
    
    function setupExperienceSection(): void {
        const experienceButton = document.getElementById("experienceButton") as HTMLButtonElement | null;
        const experienceBox = document.getElementById("experienceBox") as HTMLElement | null;

        if (experienceButton && experienceBox) {
            experienceButton.addEventListener("click", () => {
                experienceBox.style.display = (experienceBox.style.display === "none" || experienceBox.style.display === "") ? "block" : "none";
            });
        } else {
            console.error("Experience elements not found");
        }
    }

    setupSkillSection();
    setupEducationSection();
    setupExperienceSection();
};
