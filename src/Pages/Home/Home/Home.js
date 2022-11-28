import useTitle from '../../../Hooks/useTitle';
import Categories from '../../Categories/Categories';
import About from '../About/About';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <p className='text-center text-xs'>use "admin@admin.com" and pass: 123456 for admin login. For other view angel please sign up as you want.</p>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
            <About></About>
        </div>
    );
};

export default Home;