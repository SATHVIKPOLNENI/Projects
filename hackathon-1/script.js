// script.js
const subjects = {
    'CSE': {
        '1': ['Introduction to Programming', 'Mathematics I', 'Physics'],
        '2': ['Data Structures', 'Mathematics II', 'Electronics'],
        '3': ['Algorithms', 'Discrete Mathematics', 'Computer Architecture'],
        '4': ['Operating Systems', 'Database Systems', 'Software Engineering'],
        '5': ['Computer Networks', 'Theory of Computation', 'Web Technologies'],
        '6': ['Machine Learning', 'Compiler Design', 'Artificial Intelligence'],
        '7': ['Big Data', 'Cryptography', 'Mobile Computing'],
        '8': ['Cloud Computing', 'Cyber Security', 'Internet of Things']
    },
    'ECE': {
        '1': ['Basic Electronics', 'Mathematics I', 'Physics'],
        '2': ['Digital Logic Design', 'Mathematics II', 'Circuits and Systems'],
        '3': ['Analog Electronics', 'Signals and Systems', 'Network Theory'],
        '4': ['Microprocessors', 'Communication Systems', 'Control Systems'],
        '5': ['Digital Communication', 'Electromagnetic Fields', 'VLSI Design'],
        '6': ['Embedded Systems', 'Antenna Theory', 'Digital Signal Processing'],
        '7': ['Wireless Communication', 'Optical Communication', 'Robotics'],
        '8': ['Satellite Communication', 'Nano Electronics', 'Internet of Things']
    },
    'ME': {
        '1': ['Engineering Mechanics', 'Mathematics I', 'Physics'],
        '2': ['Thermodynamics', 'Mathematics II', 'Material Science'],
        '3': ['Fluid Mechanics', 'Manufacturing Processes', 'Mechanics of Solids'],
        '4': ['Heat Transfer', 'Dynamics of Machines', 'Engineering Design'],
        '5': ['Internal Combustion Engines', 'Machine Design', 'Control Engineering'],
        '6': ['Renewable Energy', 'Robotics', 'Mechatronics'],
        '7': ['Automobile Engineering', 'Aerospace Engineering', 'Biomechanics'],
        '8': ['Industrial Engineering', 'Production Planning', 'Maintenance Engineering']
    },
    'CE': {
        '1': ['Engineering Drawing', 'Mathematics I', 'Chemistry'],
        '2': ['Surveying', 'Mathematics II', 'Building Materials'],
        '3': ['Structural Analysis', 'Geotechnical Engineering', 'Fluid Mechanics'],
        '4': ['Concrete Technology', 'Transportation Engineering', 'Hydrology'],
        '5': ['Steel Structures', 'Environmental Engineering', 'Construction Management'],
        '6': ['Water Resources Engineering', 'Foundation Engineering', 'Structural Design'],
        '7': ['Advanced Structural Analysis', 'Bridge Engineering', 'Urban Planning'],
        '8': ['Earthquake Engineering', 'Coastal Engineering', 'Sustainable Construction']
    }
};

document.getElementById('branch').addEventListener('change', updateSubjects);
document.getElementById('semester').addEventListener('change', updateSubjects);

function updateSubjects() {
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const subjectSelect = document.getElementById('subject');

    // Clear previous subjects
    subjectSelect.innerHTML = '';

    if (subjects[branch] && subjects[branch][semester]) {
        subjects[branch][semester].forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.replace(/\s+/g, '-').toLowerCase(); // Create a URL-friendly value
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
    }
}

function redirectToSubject() {
    const branch = document.getElementById('branch').value.toLowerCase();
    const semester = document.getElementById('semester').value;
    const subject = document.getElementById('subject').value.replace(/\s+/g, '-').toLowerCase();

    // Construct the URL based on branch, semester, and subject
    const targetUrl = `${branch}${semester}-${subject}.html`;

    // Redirect to the constructed URL
    window.location.href = targetUrl;

    // Prevent form submission
    return false;
}

// Initialize subjects on page load
updateSubjects();
