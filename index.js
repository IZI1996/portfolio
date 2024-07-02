// script.js

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'CSS', level: 80 },
    { name: 'CSS', level: 80 },
    { name: 'CSS', level: 80 },
    // Add more skills as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const skillElements = document.querySelectorAll('.skill');

    skillElements.forEach((skillElement, index) => {
        const skill = skills[index];
        const percentage = skill.level;
        const angle = (percentage / 100) * 360;

        const outerCircle = skillElement.querySelector('.outer-circle');
        outerCircle.style.background = `conic-gradient(
            #4caf50 0deg,
            #4caf50 ${angle}deg,
            #d3d3d3 ${angle}deg,
            #d3d3d3 360deg
        )`;

        const skillText = skillElement.querySelector('.skill-text');
        const skillPercentage = skillElement.querySelector('.skill-percentage');

        skillText.textContent = skill.name;
        skillPercentage.textContent = `${percentage}%`;
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-img');
    const projectIframe = document.getElementById('project-iframe');
    const projectPreview = document.querySelector('.project-preview');
    const closeBtn = document.querySelector('.close-btn');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectUrl = item.getAttribute('data-url');
            projectIframe.src = projectUrl;
            projectPreview.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        projectIframe.src = '';
        projectPreview.style.display = 'none';
    });
});
