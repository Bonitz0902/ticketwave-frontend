import NavBar from '../components/NavBar';
import {useState} from "react";
import '../css/GcashPayment.css';
import gifImage from '../loading-gif.gif';
import {useNavigate} from "react-router-dom";
import ticketwavelogo from "../ticketwavelogo.png";

const GcashPayment = () => {
    const [phoneNumber, setPhoneNumber] = useState('+63');
    const [isNextClicked, setIsNextClicked] = useState(false);
    const navigate = useNavigate();

    const gotoBookingPage = () => {
        navigate('/booking');
    }

    const cancelBooking = () => {
        navigate('/booking');
        alert("Payment Failed!")
    }


    return (
        <div className="parent">
             <nav>
                <NavBar/>
            </nav>
                <img id='displayImageGcash' 
                src="https://orangemagazine.ph/wp-content/uploads/2020/05/GCash_Horizontal-Full-Blue-BG-3-1.png" >
                </img>   

                <div className='gcashReceiptContainer'>
                    <div className='gcashReceipt'>
                        <span id="succRec">Successfully Paid To</span>
                        {/* <img src={ticketwavelogo} alt="TicketWave Logo" className="logo" /> */}
                        <span id="titleRec">TicketWave</span>
                        <span id="totalRec">php 865</span>
                        
                    </div>
                    <span id="desc">Payment Method: <span id='gcash'>GCASH</span></span>
                    <span id="line">------------------------</span>
                    <button className='continueGcash' onClick={() => gotoBookingPage()}>PROCEED</button>
                    <button className='cancelGcash' onClick={() => cancelBooking()}>CANCEL</button>
                </div>
        </div>
    )
}

export default GcashPayment;