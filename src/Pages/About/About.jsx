 import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutBannerBg from '../../Assets/Pictures/about_banner_bg.webp'
import Collapse from '../../Components/Collapse/Collapse';
import './About.scss';
import Getaboutdata from '../../Components/Getaboutdata/Getaboutdata';

function About() {

	const  aboutData = Getaboutdata();

	return (
		<div>

    
		<Banner title='À propos de nous' backgroundSrc={AboutBannerBg} />
			<ul className='collapse-container'>
				{aboutData.map(({ index, title, content }) =>
				(
					<div key={`${index}-${title}`}>
						<Collapse
							title={title}
							content={content}
						/>
					</div>
				)
				)}
			</ul> 
		</div>
	);
};

export default About