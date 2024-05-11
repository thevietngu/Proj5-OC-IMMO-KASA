import React, { useState, useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import HomeBannerBg from '../../Assets/Pictures/home_banner_bg.webp';
import Card from '../../Components/Card/Card';
import './Home.scss';

function Home() {
  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datas/logdatas.json');

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        setLogementData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner title='Chez vous, partout et ailleurs' backgroundSrc={HomeBannerBg} />

      <div className='gallery'>
        {logementData.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
