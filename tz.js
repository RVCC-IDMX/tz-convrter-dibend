const moment = require('moment-timezone');
const { exit } = require('yargs');
const yargs = require('yargs');

if (yargs.argv._[0] === undefined) {
  console.log('enter timezone as argument 1');
  exit(1);
}
moment.tz.setDefault('America/New_York');
if (yargs.argv.format) {
  console.log(moment().tz(yargs.argv._[0]).format('dddd, MMMM Do YYYY, h:mm:ss a'));
} else {
  console.log(moment().tz(yargs.argv._[0]).format());
}
