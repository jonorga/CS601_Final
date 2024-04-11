import React from 'react';


const GalleryItem = (props) => {
	return (
		<div className="GalleryItem" onClick={props.onclick} id={props.itemId}>
			<img src={props.imgsrc} alt={props.imgalt} height="300" width="300"/>
			<p>{props.name}</p>
		</div>
	);
};

const Gallery = (props) => {
	const pub_url = process.env.PUBLIC_URL + "images/";
	return (
		<div className="Gallery">
			<div className="Row">
				<GalleryItem name="John Adams" imgsrc={pub_url + "johnadams.jpeg"} 
					imgalt="John Adams Portrait" onclick={props.onclick} itemId="0"/>
				<GalleryItem name="Chester Arthur" imgsrc={pub_url + "chesterarthur.jpeg"} 
					imgalt="Chester Arthur Portrait" onclick={props.onclick} itemId="1"/>
				<GalleryItem name="John Tyler" imgsrc={pub_url + "johntyler.jpeg"} 
					imgalt="John Tyler Portrait" onclick={props.onclick} itemId="2"/>
			</div>
			<div className="Row">
				<GalleryItem name="Andrew Johnson" imgsrc={pub_url + "andrewjohnson.jpeg"} 
					imgalt="Andrew Johnson Portrait" onclick={props.onclick} itemId="3"/>
				<GalleryItem name="Lyndon B. Johnson" imgsrc={pub_url + "lyndonjohnson.jpeg"} 
					imgalt="Lyndon B. Johnson Portrait" onclick={props.onclick} itemId="4"/>
				<GalleryItem name="John Quincy Adams" imgsrc={pub_url + "johnquincyadams.jpeg"} 
					imgalt="John Quincy Adams Portrait" onclick={props.onclick} itemId="5"/>
			</div>
			<div className="Row">
				<GalleryItem name="George W. Bush" imgsrc={pub_url + "georgewbush.jpeg"} 
					imgalt="George W. Bush Portrait" onclick={props.onclick} itemId="6"/>
				<GalleryItem name="Richard Nixon" imgsrc={pub_url + "richardnixon.jpeg"} 
					imgalt="Richard Nixon Portrait" onclick={props.onclick} itemId="7"/>
				<GalleryItem name="Gerald Ford" imgsrc={pub_url + "geraldford.jpeg"} 
					imgalt="Gerald Ford Portrait" onclick={props.onclick} itemId="8"/>
			</div>
			<div className="Row">
				<GalleryItem name="Harry S. Truman" imgsrc={pub_url + "harrytruman.jpeg"} 
					imgalt="Harry S. Truman Portrait" onclick={props.onclick} itemId="9"/>
				
			</div>
		</div>
	);
};

export default Gallery;