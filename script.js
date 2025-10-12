// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Load and render about section from Markdown
async function loadAbout() {
    try {
        const response = await fetch('content/about.md');
        const markdown = await response.text();

        // Configure marked
        marked.setOptions({
            breaks: true,
            gfm: true
        });

        // Render markdown to HTML
        const html = marked.parse(markdown);
        document.getElementById('aboutContent').innerHTML = html;
    } catch (error) {
        console.error('Error loading about content:', error);
    }
}

// Load and display notes (limited to 3 on homepage)
async function loadNotes(limit = 3) {
    try {
        const response = await fetch('notes/index.json');
        const notes = await response.json();

        const notesList = document.getElementById('notesList');

        // Filter out draft notes
        const publishedNotes = notes.filter(note => !note.draft);

        if (publishedNotes.length === 0) {
            notesList.innerHTML = '<p class="empty-state">No notes yet. Check back soon!</p>';
            return;
        }

        const sortedNotes = publishedNotes.sort((a, b) => new Date(b.date) - new Date(a.date));
        const displayNotes = limit ? sortedNotes.slice(0, limit) : sortedNotes;

        notesList.innerHTML = displayNotes
            .map(note => `
                <a href="notes/note.html?slug=${note.slug}" class="note-item">
                    <span class="note-title">${note.title}</span>
                    <span class="note-date">${note.date}</span>
                </a>
            `).join('');
    } catch (error) {
        console.log('Notes not yet available');
    }
}

// Load content on page load
loadAbout();
loadNotes();
