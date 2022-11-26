// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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
  ${answer.license}
`;
}

module.exports = generateMarkdown;
