const moment = require('moment-timezone');
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');
if (yargs.argv.format) {
  console.log(moment().tz(yargs.argv._[0]).format('dddd, MMMM Do YYYY, h:mm:ss a'));
} else {
  console.log(moment().tz(yargs.argv._[0]).format());
}
