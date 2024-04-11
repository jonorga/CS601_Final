import React from 'react';

const presInfo = [ 
	{
		name: "John Adams",
		src: "johnadams.jpeg",
		presyears: "2001 - 2014",
		hometown: "The town his house is in",
		univ: "Hogwarts",
		date: "1920/1922",
		party: "Democrat",
		art: "The Beatles, Queen",
		infl: "Queen Elizabeth I, Napoleon Bonaparte",
		quote: "Im not short, I'm just more down to earth than most people."
	},
	{
		name: "Chester Arthur",
		src: "chesterarthur.jpeg",
		presyears: "1207 - 1683",
		hometown: "Disneyland, Mars",
		univ: "McD's Universitees",
		date: "1926/1923",
		party: "Republican",
		art: "Nirvana, Pearl Jam",
		infl: "Joan of Arc, Genghis Khan",
		quote: "Im not arguing, I'm just explaining why I'm right."
	},
	{
		name: "John Tyler",
		src: "johntyler.jpeg",
		presyears: "1602 - 1901",
		hometown: "A Gas Station, New Jersey",
		univ: "Whoomp there it is",
		date: "1970/1926",
		party: "Democrat",
		art: "Beyoncé, Rihanna",
		infl: "Aristotle, Plato",
		quote: "Im not clumsy, it's just the floor hates me, the tables and chairs are bullies, and the walls get in my way."
	},
	{
		name: "Andrew Johnson",
		src: "andrewjohnson.jpeg",
		presyears: "1492 - 2109",
		hometown: "Utah, Unfortunately",
		univ: "Schooly school",
		date: "1520/1922",
		party: "Republican",
		art: "Coldplay, Radiohead",
		infl: "Rosa Parks, Martin Luther King Jr.",
		quote: "Im not shy, I'm just holding back my awesomeness so I don't intimidate you."
	},
	{
		name: "Lyndon B. Johnson",
		src: "lyndonjohnson.jpeg",
		presyears: "1992 - 2002",
		hometown: "Lollipop, Guild",
		univ: "Is anyone even reading this",
		date: "1980/1722",
		party: "Democrat",
		art: "Taylor Swift, Adele",
		infl: "Marie Curie, Galileo Galilei",
		quote: "The early bird can have the worm, because worms are gross and mornings are stupid."
	},
	{
		name: "John Quincy Adams",
		src: "johnquincyadams.jpeg",
		presyears: "1886 - 1956",
		hometown: "Wimbleton",
		univ: "What is a university anyways",
		date: "1720/1822",
		party: "Democrat",
		art: "Led Zeppelin, The Rolling Stones",
		infl: "Cleopatra, Julius Caesar",
		quote: "Im writing a book. I've got the page numbers done."
	},
	{
		name: "George W. Bush",
		src: "georgewbush.jpeg",
		presyears: "1700 - 1850",
		hometown: "That one town, you know",
		univ: "A school",
		date: "1948/1922",
		party: "Democrat",
		art: "Kendrick Lamar, Drake",
		infl: "Nelson Mandela, Mahatma Gandhi",
		quote: "I told my wife she was drawing her eyebrows too high. She looked surprised."
	},
	{
		name: "Richard Nixon",
		src: "richardnixon.jpeg",
		presyears: "1970 - 1990",
		hometown: "Wherever man",
		univ: "Words words school",
		date: "1890/1892",
		party: "Republican",
		art: "Bob Dylan, Bruce Springsteen",
		infl: "William Shakespeare, Jane Austen",
		quote: "Im not lazy, I'm just in energy-saving mode."
	},
	{
		name: "Gerald Ford",
		src: "geraldford.jpeg",
		presyears: "1934 - 1982",
		hometown: "Honestly who knows",
		univ: "Yelp Uni",
		date: "1929/1935",
		party: "Republican",
		art: "Metallica, Iron Maiden",
		infl: "Leonardo da Vinci, Michelangelo",
		quote: "Im sorry, if you were right, I'd agree with you."
	},
	{
		name: "Harry S. Truman",
		src: "harrytruman.jpeg",
		presyears: "1702 - 1876",
		hometown: "Hometownland, USA",
		univ: "Ohio State",
		date: "1919/1999",
		party: "Democrat",
		art: "Michael Jackson, Prince",
		infl: "Albert Einstein, Isaac Newton",
		quote: "Im not superstitious, but I am a little stitious."
	}
];

const Portrait = (props) => {
	const pub_url = process.env.PUBLIC_URL + "images/";
	return (
		<div className="Portrait" onClick={props.onclick}>
			<h3>{presInfo[props.idNum].name}</h3>
			<div className="PortraitBody">
				<img src={pub_url + presInfo[props.idNum].src} alt={presInfo[props.idNum].name + " Portrait"} height="400" width="300"/>
				<div>
					<strong>Years of Presidency</strong>
					<p>{presInfo[props.idNum].presyears}</p>
					<strong>Hometown</strong>
					<p>{presInfo[props.idNum].hometown}</p>
					<strong>University</strong>
					<p>{presInfo[props.idNum].univ}</p>
					<strong>Date</strong>
					<p>{presInfo[props.idNum].date}</p>
					<strong>Political Party</strong>
					<p>{presInfo[props.idNum].party}</p>
					<strong>Favorite Artist</strong>
					<p>{presInfo[props.idNum].art}</p>
					<strong>Influences</strong>
					<p>{presInfo[props.idNum].infl}</p>
					<strong>Famous Quote</strong>
					<p>{presInfo[props.idNum].quote}</p>
				</div>
			</div>
		</div>
	);
};

export default Portrait;