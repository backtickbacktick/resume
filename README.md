# Resume Starter

This is a resume starter app that build a static print ready resume in your browser.

It uses Babel, Express, React, Sass, and nodemon local development.

## Scripts

### `build`

Deletes the dist folder and builds a static version of your site and copies over anything in the public folder to the dist folder.

### `dev`

Starts a local running version of your site rebuilding the site anytime you make changes to anything in the `src` folder.

### `deploy`

Runs the default action for <a href="https://www.npmjs.com/package/gh-pages">`gh-pages`</a> which publish files to a gh-pages branch on GitHub (or any other branch anywhere else).

## Setup Github Site

Setup your github repo to serve pages from the `gh-pages` branch

## Data

Almost all the resume data is stored in the data file found here: `src/data.js`
