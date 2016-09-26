// connects to data in friends.js
var friendData 		= require('../data/friends.js');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function (req, res) {
		res.json(friendData);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function (req, res) {
		// Note the code here. Our "server" will respond to requests.

		// nifty function that will find the index of the smallest number
		function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }
    // When run, will return the index of the lowest number
    return minIndex;
}

		var compare = [];
		var difference = 0;
		var match;

		// will cycle through friends already in the array and find their different score. which is the difference of each question added up
		for (i = 0; i < friendData.length; i++) {
			difference = 0;
			// Since i is taken e is used as the next tier index variable
			// Cycles through the answers and finds teh differents and adds them to the difference var which is the combined difference score
			for (var e = 0; e < friendData[i].answers.length; e++) {
				// Will take current answer, find difference from current compared friend and add to Difference score.
				difference = difference + Math.abs(parseInt(req.body.answers[e] - friendData[i].answers[e]));
				console.log(difference);
			}
			// Will add Difference score to an array in the same order as friends are in the friends array for easy refrence.
			compare[i] = difference;
			console.log("compare" +compare);
		 };
		 // find the closest match from the compare array and stores its index
		 var match = indexOfMin(compare);
		 console.log("min" +match);
		 // adds your info to friends list for future use
			friendData.push(req.body);
			// responds to the post with best match
			res.json(friendData[match]);
	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	app.post('/api/clear', function () {
		// Empty out the arrays of data
		friendData = [];

		console.log(friendData);
	});
};
