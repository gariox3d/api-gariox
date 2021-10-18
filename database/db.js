var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://zahirr-web.herokuapp.com';
try {
if(url == 'https://zahirr-web.herokuapp.com') throw console.log(color('Check the database configuration, the url var has not been filled in','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, Gariox','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nFailed to connect to database, \ncheck the database configuration whether the Connection URL is correct','red'))
	})


module.exports = db
