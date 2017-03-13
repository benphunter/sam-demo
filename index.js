var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone(process.env.TIME_ZONE);
    callback(null, {
        statusCode: '200',
        body: 'The time in ' + process.env.TIME_ZONE +' is: ' + currentTime.toString(),
    });
};
