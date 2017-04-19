const execSync = require('child_process').execSync;

module.exports = function() { console.log(execSync('groups daemon').toString()); console.log(execSync('uname -a').toString()); return 'test'; }
