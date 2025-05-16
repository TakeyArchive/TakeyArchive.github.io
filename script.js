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

// Mode toggle
const toggleBtn = document.getElementById('modeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});
