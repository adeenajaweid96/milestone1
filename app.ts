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
    setupSkillSection();
};
