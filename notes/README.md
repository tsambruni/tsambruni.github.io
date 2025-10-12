# Notes

This folder contains blog notes for the personal website.

## Adding a New Note

1. Create a new HTML file in this directory (e.g., `my-first-note.html`)
2. Add an entry to `index.json` with the note details:

```json
[
  {
    "title": "My First Note",
    "slug": "my-first-note",
    "date": "2025-10-11"
  }
]
```

## Draft Notes

To mark a note as a draft (hidden from the notes list), add `"draft": true` to the note entry:

```json
[
  {
    "title": "Work in Progress Note",
    "slug": "wip-note",
    "date": "2025-10-11",
    "draft": true
  }
]
```

**Draft notes will:**
- Not appear in the homepage notes list
- Not appear in the "All Notes" page
- Still be accessible via direct URL if you know the slug

**To publish a draft:**
- Remove the `"draft": true` field, or set it to `"draft": false`
