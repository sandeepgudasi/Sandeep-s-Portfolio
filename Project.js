function toggleProject(projectId) {
    const projectDetails = document.getElementById(projectId);
    const projectName = projectDetails.previousElementSibling;
    const toggleIcon = projectName.querySelector('.toggle-icon');
    
    // Close all other projects
    document.querySelectorAll('.project-details').forEach(item => {
        if (item.id !== projectId && item.classList.contains('active')) {
            item.classList.remove('active');
            item.previousElementSibling.classList.remove('active');
            item.previousElementSibling.querySelector('.toggle-icon').textContent = '+';
        }
    });

    // Toggle current project
    projectDetails.classList.toggle('active');
    projectName.classList.toggle('active');
    toggleIcon.textContent = projectDetails.classList.contains('active') ? '−' : '+';

    // Add smooth height animation
    if (projectDetails.classList.contains('active')) {
        const height = projectDetails.scrollHeight;
        projectDetails.style.height = `${height}px`;
    } else {
        projectDetails.style.height = '0';
    }
}

// Initialize projects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect for project items
    document.querySelectorAll('.project-list').forEach(item => {
        const projectName = item.querySelector('.project-name');
        
        projectName.addEventListener('mouseenter', () => {
            if (!item.querySelector('.project-details').classList.contains('active')) {
                item.style.transform = 'translateX(10px)';
            }
        });

        projectName.addEventListener('mouseleave', () => {
            if (!item.querySelector('.project-details').classList.contains('active')) {
                item.style.transform = 'translateX(0)';
            }
        });
    });
}); 