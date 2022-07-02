function generateMarkdown(data) {
  console.log(data);
 return `# ${data.title}
***
## Description
${data.description}
***
## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
***
## Usage
${data.purpose}
***
## Contributing User(s)
${data.username}
***
## License
${data.license}
***
## Questions
https://github.com/${data.username}
***
email:${data.email}`;

  return `# ${data.title}`;
}

module.exports = generateMarkdown;
