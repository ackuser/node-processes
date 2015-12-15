var spawn = require('child_process').spawn;
// Child will use parent's stdios
spawn('prg', [], { stdio: 'inherit' });
// Spawn child sharing only stderr
spawn('prg', [], { stdio: ['pipe', 'pipe', process.stderr] });
// Open an extra fd=4, to interact with programs present a
// startd-style interface.
spawn('prg', [], { stdio: ['pipe', null, null, null, 'pipe'] });
