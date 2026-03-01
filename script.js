// script.js - controls navigation, job listing and modal behavior

// ---------- CONFIGURABLE DATA ----------
// To add a new job, add an object to the `jobs` array below.
// Each job object may include: title, img (relative path), description, contact.
// Example:
// { title: 'Baker', img: 'images/baker.jpg', description: 'Bake bread', contact: 'Name - Phone' }
const jobs = [
    {
        title: 'Driver',
        img: 'images/Driver.Webp',
        description: 'Responsible for transporting goods safely.',
        contact: 'Mr. Santos - 0917-555-1234',
    },
    {
        title: 'Cook',
        img: 'images/cook.jpg',
        description: 'Prepare meals according to instructions.',
        contact: 'Ms. Reyes - 0917-555-5678',
    },
    {
        title: 'Cashier',
        img: 'images/cashier.jpg',
        description: 'Handle customer transactions.',
        contact: 'Mr. Cruz - 0917-555-9999',
    },
];

// ---------- NAVIGATION HANDLING ----------
const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('nav .nav-btn');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        showSection(target);
    });
});

// showSection will hide all sections and make the named one visible
function showSection(id) {
    sections.forEach(sec => {
        if (sec.id === id) {
            sec.classList.remove('hidden');
            sec.classList.add('active');
        } else {
            sec.classList.add('hidden');
            sec.classList.remove('active');
        }
    });
    // When showing jobs section, make sure the list is populated
    if (id === 'jobs') {
        populateJobs();
    }
}

// ---------- JOB LISTING ----------
const jobListElem = document.getElementById('jobList');

function populateJobs() {
    // clear previous content
    jobListElem.innerHTML = '';

    jobs.forEach((job, index) => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <img src="${job.img}" alt="${job.title}">
            <div class="job-info">
                <h3>${job.title}</h3>
                <p>${job.description}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(index));
        jobListElem.appendChild(card);
    });
}

// ---------- MODAL ----------
const jobModal = document.getElementById('jobModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalContact = document.getElementById('modalContact');
const closeModalBtn = document.getElementById('closeModal');

function openModal(jobIndex) {
    const job = jobs[jobIndex];
    modalTitle.textContent = job.title;
    modalImage.src = job.img;
    modalDesc.textContent = job.description;
    modalContact.textContent = job.contact;
    jobModal.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', () => {
    jobModal.classList.add('hidden');
});

// Clicking outside modal content should also close it
jobModal.addEventListener('click', e => {
    if (e.target === jobModal) {
        jobModal.classList.add('hidden');
    }
});

// ---------- UTILITY NOTES ----------
// To add a new job:
// 1. Place the job image into the /images folder.
// 2. Add a new object to the `jobs` array above with the correct
//    `img` path and other properties.
// 3. When the "Find a Job" section is shown, it will update automatically.
//
// To change contact information per job, simply update the `contact` field
// in the corresponding object.
//
// No other code modification is required; the layout and modal logic are
// reusable for any number of jobs.
