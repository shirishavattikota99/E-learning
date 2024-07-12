let enrolledCourses = [];

function enroll(courseName) {
    if (!enrolledCourses.includes(courseName)) {
        enrolledCourses.push(courseName);
        updateEnrolledCourses();
    } else {
        alert('You are already enrolled in this course.');
    }
}

function updateEnrolledCourses() {
    const enrolledCoursesList = document.getElementById('enrolled-courses');
    enrolledCoursesList.innerHTML = '';
    enrolledCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        enrolledCoursesList.appendChild(li);
    });
}
