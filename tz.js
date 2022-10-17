const moment = require('moment-timezone');
const yargs = require('yargs');

if (yargs.argv._[0] === undefined) {
  console.log('Usage: node tz <timezone> [--format]');
  process.exit(1);
}
moment.tz.setDefault('America/New_York');
if (yargs.argv.format) {
  console.log(moment().tz(yargs.argv._[0]).format('dddd, MMMM Do YYYY, h:mm:ss a'));
} else {
  console.log(moment().tz(yargs.argv._[0]).format());
}
