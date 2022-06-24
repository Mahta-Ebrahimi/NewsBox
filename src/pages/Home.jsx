import Header from '../components/Header';
import Search from '../components/Search';
import Sections from './../components/Sections';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { MainContext } from './../context/Provider';
import PullToRefresh from 'react-simple-pull-to-refresh';


const Home = () => {

    const { news, handleGetData } = useContext(MainContext)

    return (
        <div>
            <Header />
            <PullToRefresh onRefresh={handleGetData}>
                <Search />
                <Sections data={news} />
            </PullToRefresh>
            <Footer />

        </div>

    );
}

export default Home;