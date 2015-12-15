var environment = process.env,
  //  someVar,
    envDup = {},
    child_process = require('child_process');

// Duplicate the parent's environment object
/*for (someVar in env) {
    envDup[someVar] = env[somevar];
}*/
envDup = environment;

// Now, extend this with some new variables:
envDup['VAR NAME'] = 'var value';
envDup['HOME'] = '/';

//console.log(envDup);

// Run child process with these environment variables
child_process.exec('ls -l $HOME',
    { env: envDup},
    function (err, stdout, stderr) {
        if (err) {
            throw err;
        }
    console.log(stdout);
});
