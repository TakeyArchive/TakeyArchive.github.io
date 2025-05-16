// script.js

// Load clips from JSON
fetch('clips.json')
  .then(res => res.json())
  .then(clips => {
    const container = document.getElementById('clipList');

    clips.forEach(clip => {
      const card = document.createElement('div');
      card.className = 'clip-card';

      card.innerHTML = `
        <h2>${clip.title}</h2>
        <p>${clip.description}</p>
        <p><small>${new Date(clip.date).toLocaleDateString()}</small></p>
        <video controls src="${clip.file}"></video>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error loading clips:', err);
  });

// Mode toggle (button-based)
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Apply stored preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Handle toggle button click
darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
    localStorage.setItem('darkMode', 'false');
  } else {
    enableDarkMode();
    localStorage.setItem('darkMode', 'true');
  }
});

function enableDarkMode() {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  body.style.backgroundImage = "url('wp3210282-600034375.jpg')";
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
  body.style.backgroundImage = "url('windows-xp-bliss-4k-lu-1920x1080.jpg')";
}
