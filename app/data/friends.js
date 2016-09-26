// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friendsArray = [
	{
		name: 'Ahmed1',
		pic: 'https://scontent.ftpa1-2.fna.fbcdn.net/t31.0-8/14425330_10102034614303993_5506831476770893126_o.jpg',
		answers: [1,2,3,4,5,1,2,3,4,5]
	},
	{
		name: 'Ahmed2',
		pic: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/14117779_10101997499686983_7315135815481408661_n.jpg?oh=565e8af5708964d127a226820a90c092&oe=5885DEBC',
		answers: [5,4,4,3,3,5,4,3,2,1]
	},
	{
		name: 'Ahmed3',
		pic: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/14054173_10101991575379343_1113959917564554876_n.jpg?oh=111abcfe3d6187dfc14b79b249db3066&oe=588214E6',
		answers: [1,5,4,2,3,4,5,4,3,1]
	},
	{
		name: 'Ahmed4',
		pic: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/14100357_10101990252340723_5906210049222978327_n.jpg?oh=70e238ccbd45d42a34258f94666016cf&oe=58774E0F',
		answers: [1,5,4,3,3,4,4,1,2,1]
	},
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
