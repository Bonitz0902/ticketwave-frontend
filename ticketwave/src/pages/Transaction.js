import '../css/Transaction.css';
import NavBar from '../components/NavBar';
import {useSelector} from "react-redux";
import QRCode from 'qrcode.react';
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

export const Transaction = () => {
    const movieList = useSelector(state => state.movieSlice.movieSlice);
    const navigate = useNavigate();
    const textData = 'Hello, World!';

    const homepage = () => {
        navigate('/');
    }

    return (
        <div className='parent'>
            <nav>
                <NavBar/>
            </nav>

            <ArrowLeftOutlined className="arrowBack" onClick={homepage}/>
            <div className='ticketContainer'>
                <img id='displayImage' src="https://cdn.mos.cms.futurecdn.net/q8D2qjugGnMbzajVbWWC7R.jpg" ></img>
                <div className='ticketBody'>
                    <span id='title'>DUNE <span id='total'>TOTAL PHP</span></span>
                    <span className="ticket-info">Ticket no. 01</span>
                    <span className="ticket-info" id='location'>SM MOA Imax Theater  </span>
                    <span className="ticket-info" id='sched'>06/09/2023 10:00 - 13:00</span>
                    <span className="ticket-info">
                        Seats/s:  C4,C5,C6
                    </span>
                    <QRCode 
                    id='qrCode' 
                    style={{ 
                        width: '100px',
                        height: '100px'
                    }}      
                    value={textData}/>
                    <span className="ticketCode">0409C4001</span>
                </div>
            </div>
           
        </div>
    );
}