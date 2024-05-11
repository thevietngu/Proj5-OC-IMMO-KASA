import Banner from '../../Components/Banner/Banner';
import HomeBannerBg from '../../Assets/Pictures/home_banner_bg.webp';
import Card from '../../Components/Card/Card';
import './Home.scss';
import GetLogementdata from '../../Components/GetLogementdata/GetLogementdata'


function Home() {
  
	const  logementData = GetLogementdata();

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
