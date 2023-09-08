import NavBar from '../components/NavBar';
import {useState} from "react";
import '../css/BankTransfer.css';
import gifImage from '../loading-gif.gif';
import {useNavigate} from "react-router-dom";

const BankTransfer = () => {
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [isNextClicked, setIsNextClicked] = useState(false);
    const navigate = useNavigate();

    const handleName = (event) => {
        setAccountName(event.target.value);
    };

    const handleAccountChange = (event) => {
        setAccountNumber(event.target.value);
    }
    
    const gotoBookingPage = () => {
        if (accountName || !accountName.trim() === "" || accountNumber.startsWith('00') && accountNumber.length === 12) {
            setIsNextClicked(true);

            setTimeout(() => {

                navigate('/booking');
              }, 2000);
            
        } else {
            alert("Invalid Credentials!")
        }
    }

    const cancelBooking = () => {
        navigate('/booking');
        alert("Payment Failed!")
    }

    const proceed = () => {
        setIsNextClicked(true);

        setTimeout(() => {

            navigate('/gcashReceipt');
          }, 2000);
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
                <img id='displayImage' 
                src="https://asianbankingandfinance.net/sites/default/files/styles/opengraph/public/2022-10/untitled-design-2.png?h=131e0991&itok=TwpfW4Yt" ></img>
            
                <div className='bankContainer'>
                <span>Merchant: <span id='merchName'>SIXSOME</span></span>
                <span>Amount Due: <span id='amountDue'>PHP 1200</span></span>

                <div className='bankBody'>
                <input id='accountName' placeholder='Account Name'/>
                <input id='accountNum' placeholder='Account Number' onChange={handleAccountChange}/>
                   
                </div>
                <button className='continue' onClick={() => gotoBookingPage()}>PROCEED</button>
                <button className='cancel' onClick={() => cancelBooking()}>CANCEL</button>
                </div>
            </div>
            )}       
        </div>
    )
}

export default BankTransfer;