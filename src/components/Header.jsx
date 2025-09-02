import { IoMdSettings } from 'react-icons/io'
import { MdArrowBackIos } from 'react-icons/md'
import { useLocation } from 'react-router';
import { FiInbox } from 'react-icons/fi';
import {Link } from "react-router-dom";


const Header = () => {

    const location = useLocation()
    return (
<<<<<<< HEAD
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px" }}>
=======
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
>>>>>>> 3bb737c5ef328791c5b57cdefc23ed218fb05a46

            <Link to="/archive">
             <button style={{background:"white", border:"none"}}>
            {location.pathname === "/" ? <FiInbox size={25} />: <MdArrowBackIos size={25} />  }

            </button>
            </Link>
            <h1 style={{ margin: "0" }}>{location.pathname === "/" ? "NewsBox" : "Archive"}</h1>
            <Link to="/setting">
            <button style={{background:"white", border:"none"}}>
            <IoMdSettings size={25} />
            </button>
            </Link>
            
        </header>
    );
}

export default Header;