import { useLocation } from 'react-router';
import { FiUser } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { GrHomeRounded } from 'react-icons/gr';
import { FiActivity } from 'react-icons/fi';



const Footer = () => {

    const location = useLocation()
    console.log(location);
    return (
        <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", position: "fixed", left: "0", bottom: "0", width: "380px", zIndex: "1", backgroundColor: "white" }}> 
            
            <GrHomeRounded size={25} />
            <FiActivity size={25} />
            <BiSearch size={25} />
            <FiUser size={25} />
            
        </footer>
    );
}

export default Footer;