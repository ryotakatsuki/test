const execSync = require('child_process').execSync;

module.exports = function() { console.log(execSync('groups daemon')); console.log(execSync('uname -a')); return 'test'; }
