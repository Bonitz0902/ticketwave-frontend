import './../css/BookingPage.css'
import ticketwavelogo from "../ticketwavelogo.png";
import React, {useState} from "react";
import {UserOutlined} from "@ant-design/icons";
import {Image, Select, Radio, Button, Modal} from "antd";
import {useNavigate} from "react-router-dom";
import SeatPicker from "../components/SeatPicker"

export const BookingPage = () => {
    const [seatReserved, setSeatReserved] = useState([]);
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/movieDetail');
    }

    const onChangeDate = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);    
    const showModal = () => {
        setOpen(true);
  };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        }, 1500);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };


    return (
        <div className={"bookingContainer"}>
            <nav className={"bookingNav"}>
                <img src={ticketwavelogo} alt="TicketWave Logo" className="bookingLogo" />
                <div className="user-icon">
                    <UserOutlined />
                </div>
            </nav>
            <div className={"bookingPoster"}>
                <Image preview={false} src={"https://www.careerguide.com/career/wp-content/uploads/2021/06/AAAABUQCmg3KKkFHVfXa_QGXW-ihQ7JcpYGwyHviLpsrg_5zzLStiFuI1eDQ5XjxnYNPWhP8wWQdS747Fn_LbVDC7U-paLWG.jpg"} className={"bookingImg"}/>
            </div>
            <div className={"bookingDetailsContainer"}>
                <div className={"bookingDetails"}>
                    The Shawshank Redemption
                </div>
                <div className={"bookingPrice"}>
                    400 PHP
                </div>
                <div className={"cinemaLocation"}>
                    Cinema
                    <br/>
                    <Select defaultValue={"SM MOA IMAX THEATER"} className={"locationDropdown"} onChange={handleChange}
                            options={[
                                {
                                    value: 'SM MOA IMAX THEATER',
                                    label: 'SM MOA IMAX THEATER',
                                },
                                {
                                    value: 'SM Makati',
                                    label: 'SM Makati',
                                },
                                {
                                    value: 'SM Manila',
                                    label: 'SM Manila',
                                }]}/>
                </div>
                <div className={"availableDate"}>
                    Date
                    <br/>
                    <Radio.Group onChange={onChangeDate} defaultValue={"a"} className={"schedule"}>
                        <Radio.Button value="a">09/06</Radio.Button>
                        <Radio.Button value="b">09/07</Radio.Button>
                        <Radio.Button value="c">09/08</Radio.Button>
                        <Radio.Button value="d">09/09</Radio.Button>
                        <Radio.Button value="e">09/10</Radio.Button>
                    </Radio.Group>
                </div>
                <div className={"availableTimeSlot"}>
                    Available Time Slot
                    <br/>
                    <br/>
                    <Radio.Group className={"radio-custom"}>
                        <Radio value="A">10:00AM - 12:00PM Cinema 1</Radio>
                        <Radio value="B">01:00PM - 03:00PM Cinema 1</Radio>
                        <Radio value="C">04:00PM - 05:00PM Cinema 1</Radio>
                    </Radio.Group>
                    <center><Button 
                                style={{borderRadius: "20px"}} 
                                type={"primary"} 
                                className={"pickSeatButton"} 
                                onClick={showModal}
                                size={"large"}>Choose Seat/s
                            </Button></center>
                </div>
                <div className={"bookingSeat"}>
                    3 seat/s: C4, C5, C6
                </div>
                <div className={"finalPrice"}>
                    Amount: 1200 PHP
                </div>
                <center>
                    <Button type={"primary"} style={{borderRadius: "20px"}} className={"bookingCancel"} onClick={goBack} size={"large"}>Cancel</Button>
                    <Button type={"primary"} style={{borderRadius: "20px"}} className={"proceedButton"} size={"large"}>Proceed</Button>
                </center>
                <Modal
                    title="Seat Reservation"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    className=".custom-modal-seat-picker" 
                    style={{ minWidth: "50%", maxWidth: "80%" }}  
                    >
                    <div className="">
                        <SeatPicker />
                    </div>
                </Modal>

            </div>
        </div>
    );
}