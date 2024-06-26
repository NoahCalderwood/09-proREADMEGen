// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case 'Apache-2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
    case 'GPL-3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'None':
      return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '- [License](#license)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '## License'
  } else {
    return ''
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

  ## Description
  
  ${data.motivation}
  ${data.reason}
  ${data.solve}
  ${data.learn}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.collab}

  ${data.assets}
  
  ${renderLicenseSection(data.license)}
  
  
  ## Badges
  ${renderLicenseBadge(data.license)}
  
  ## Features
  ${data.features}
  
  ## How to Contribute
  ${data.contribute}
  
  ## Tests
  ${data.tests}

  ## Questions
  GitHub: ${data.username}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
