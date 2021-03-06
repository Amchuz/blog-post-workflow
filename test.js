const process = require('process');
const path = require('path');
const fs = require('fs');
// language=markdown
const template = `# Readme test
Post list example:
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->

# Other contents
Test content
`;
fs.writeFileSync(path.join(__dirname, 'test', 'Readme.md'), template);

process.env.INPUT_MAX_POST_COUNT = "5";
process.env.INPUT_FEED_LIST = "http://localhost:8080";
process.env.INPUT_README_PATH = "./test/README.md";
process.env.TEST_MODE = "true";
require('./blog-post-workflow');
