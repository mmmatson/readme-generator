// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

//Function returns the license section of README
function renderLicenseSection(answer) {
  if (answer.license === 'MIT License') {
    return `This application is covered under the MIT License.`
  }
  else if (answer.license === 'Apache License 2.0') {
    return `This application is covered under the Apache License Version 2.0.`
  }
  else if (answer.license === 'GPL License (aka GNU General Public License v3.0)') {
    return 'This application is covered under the GNU GENERAL PUBLIC LICENSE Version 3'
  }
  else if (answer.license === 'The Unlicense') {
    return `This application is covered under The Unlicense.`
  }
  // If there is no license, return no license string
  else {
    return "No license"
  }
}

//Generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}

  ## Description
  ${answer.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${answer.installation}

  ## Usage
  ${answer.usage}

  ## Contributing
  ${answer.contributing}

  ## Tests
  ${answer.tests}

  ## Questions
  You may send questions about this project to me through:
  - GitHub: [${answer.github}](https://github.com/${answer.github})
  - Email: [${answer.email}](${answer.email})

  ## License
  ${renderLicenseSection(answer)}`
}

module.exports = generateMarkdown;
