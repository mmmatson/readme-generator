//Function returns a license badge based on which license is passed in
function renderLicenseBadge(answers) {
  if (answers.license === 'MIT License') {
    return `![MIT License Badge](https://img.shields.io/badge/license-MIT-blue)`
  }
  else if (answers.license === 'Apache License 2.0') {
    return `![Apache 2.0 License Badge](https://img.shields.io/badge/license-Apache%202.0-blue)`
  }
  else if (answers.license === 'GPL License (aka GNU General Public License v3.0)') {
    return '![GNU GPLv3 License Badge](https://img.shields.io/badge/license-GNU%20GPLv3-blue)'
  }
  else if (answers.license === 'The Unlicense') {
    return `![The Unlicense License Badge](https://img.shields.io/badge/license-The%20Unlicense-blue)`
  }
  // If there is no license, return an empty string
  else {
    return ""
  }
}

//Function returns the license section of README
function renderLicenseSection(answers) {
  if (answers.license === 'MIT License') {
    return `This application is covered under the MIT License.`
  }
  else if (answers.license === 'Apache License 2.0') {
    return `This application is covered under the Apache License Version 2.0.`
  }
  else if (answers.license === 'GPL License (aka GNU General Public License v3.0)') {
    return 'This application is covered under the GNU GENERAL PUBLIC LICENSE Version 3'
  }
  else if (answers.license === 'The Unlicense') {
    return `This application is covered under The Unlicense.`
  }
  // If there is no license, return no license string
  else {
    return "No license"
  }
}

//Generate markdown for README
function generateMarkdown(answers) {
  return `${renderLicenseBadge(answers)}

  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  You may send questions about this project to me through:
  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - Email: ${answers.email}

  ## License
  ${renderLicenseSection(answers)}`
}

module.exports = generateMarkdown;
