const jobs = [
    {
        title: 'Driver',
        img: '/Golor23/again/blob/main/Driver.png',
        description: 'Responsible for transporting goods safely.',
        contact: 'Mr. Santos - 0917-555-1234',
    },
    {
        title: 'Cook',
        img: '/images/Driver.png',
        description: 'Prepare meals according to instructions.',
        contact: 'Ms. Reyes - 0917-555-5678',
    },
    {
        title: 'Cashier',
        img: '/images/Driver.png',
        description: 'Handle customer transactions.',
        contact: 'Mr. Cruz - 0917-555-9999',
    },
];

const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('nav .nav-btn');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        showSection(target);
    });
});

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
    
    if (id === 'jobs') {
        populateJobs();
    }
}


const jobListElem = document.getElementById('jobList');

function populateJobs() {
   
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


jobModal.addEventListener('click', e => {
    if (e.target === jobModal) {
        jobModal.classList.add('hidden');
    }
});













