import NavBar from '../components/NavBar';
import {useState} from "react";
import '../css/GcashPayment.css';
import gifImage from '../loading-gif.gif';
import {useNavigate} from "react-router-dom";

const GcashPayment = () => {
    const [phoneNumber, setPhoneNumber] = useState('+63');
    const [isNextClicked, setIsNextClicked] = useState(false);
    const navigate = useNavigate();

    const handlePhoneNumberChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        if (numericValue.startsWith('63')) {
          setPhoneNumber(`+${numericValue}`);
        } else if (numericValue.length === 10 && numericValue.startsWith('9')) {
          setPhoneNumber(`+63${numericValue}`);
        } else {
          setPhoneNumber('+63');
        }
    };

    const proceed = () => {
        if (phoneNumber.length === 13) {
            setIsNextClicked(true);

            setTimeout(() => {

            navigate('/gcashReceipt');
          }, 2000);
        }
        else {
            alert("Invalid Inputs!")
        }
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
            
            {isNextClicked ? (
            <center>
            <img id="gifLoad" src={gifImage} alt="Animated GIF" />
            </center>
            ) : (
                <div>
                <img id='displayImageGcashPay' 
                src="https://orangemagazine.ph/wp-content/uploads/2020/05/GCash_Horizontal-Full-Blue-BG-3-1.png" ></img>
            
                <div className='gcashContainer'>
                <span>Merchant: <span id='merchName'>SIXSOME</span></span>
                <span>Amount Due: <span id='amountDue'>PHP 865.00</span></span>

                <div className='gcashBody'>
                    <span>Login to pay with GCash</span>
                    <input
                        className='tel'
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="+63"
                    />
                </div>

                <button className='next' onClick={() => proceed()}>NEXT</button>
                <button id='cancelGcash' onClick={() => cancelBooking()}>Cancel</button>
                </div>
            </div>
            )}       
        </div>
    )
}

export default GcashPayment;