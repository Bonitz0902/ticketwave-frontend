import ticketwavelogo from "../ticketwavelogo.png";
import {UserOutlined} from "@ant-design/icons";
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <div className="parent">
            <nav className={"bookingNav"}>
                <img src={ticketwavelogo} alt="TicketWave Logo" className="bookingLogo" />
                <div className="user-icon">
                    <UserOutlined />
                </div>
            </nav>
        </div>
    )
};

export default NavBar;