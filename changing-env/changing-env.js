var env = process.env,
  //  someVar,
    envDup = {},
    child_process = require('child_process');

// Duplicate the parent's environment object
for (someVar in env) {
    envDup[someVar] = env[somevar];
}

// Now, extend this with some new variables:
envDup['VAR NAME'] = 'var value';

console.log(env);
//console.log(envDup);

// Run child process with these environment variables
child_process.exec('ls',
    { env: envDup},
    function (err, stdout, stderr) {
        if (err) {
            throw err;
        }
    console.log(stdout);
});
