# MyPortfolio

A responsive personal portfolio website with data-driven sections for:
- About
- Experience
- Skills
- Education
- Projects
- Certifications
- Contact

## Run Locally

This project is a static website (HTML/CSS/JS).

From the project folder:

```bash
cd /Users/manoj.k/Desktop/workspace/my_folder/MyPortfolio
npx --yes http-server -p 8080 -c-1
```

Open:

```text
http://localhost:8080
```

## Project Structure

- `index.html` → page layout
- `index.css` → styling and responsive layout
- `script.js` → rendering logic, interactions, Ask Me behavior
- `data/*.json` → content for each section
- `img/*` → logos, profile image, icons

## Easy Configuration (Single Place)

In `script.js`, use `APP_CONFIG` to manage core paths.

### Profile Images

Update only these keys:

- `APP_CONFIG.images.profileFront`
- `APP_CONFIG.images.profileBack`

### Data Files

Update only these keys if file names move:

- `APP_CONFIG.dataFiles.about`
- `APP_CONFIG.dataFiles.experience`
- `APP_CONFIG.dataFiles.skills`
- `APP_CONFIG.dataFiles.education`
- `APP_CONFIG.dataFiles.projects`
- `APP_CONFIG.dataFiles.certifications`

### Ask Me Responses

The wording of each "Ask Me" answer lives in `data/ask-me.json`. Edit the templates there instead of the logic.

- `{token}` placeholders are filled from `data/*.json` (for example `{role}`, `{company}`, `{dates}`)
- `fallback` is shown when the matching data file has no entries
- `skills.cloudPattern` controls which skill labels are treated as cloud platforms
- `skills.coreCount` controls how many non-cloud skills are listed

## Content Updates

Edit JSON files in `data/`:

- `data/about.json`
- `data/experience.json`
- `data/skills.json`
- `data/education.json`
- `data/projects.json`
- `data/certifications.json`
- `data/ask-me.json`

After editing content, refresh the browser. The app uses cache-busting for JSON fetches to reflect updates quickly.

## Image Guidelines (Minimal)

- Profile image: square image (recommended `800 x 800`, minimum `400 x 400`)
- Company logo / certification badge: square image (`200 x 200` or higher)
- Prefer compressed PNG/WebP files for faster loading
