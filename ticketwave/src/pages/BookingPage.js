import './../css/BookingPage.css'
import ticketwavelogo from "../ticketwavelogo.png";
import React from "react";
import {ArrowLeftOutlined, UserOutlined} from "@ant-design/icons";
import {Image, Select, Radio} from "antd";
import {useNavigate} from "react-router-dom";

export const BookingPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/movieDetail');
    }

    const onChangeDate = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }

    return (
        <div className={"bookingContainer"}>
            <nav className={"bookingNav"}>
                <img src={ticketwavelogo} alt="TicketWave Logo" className="bookingLogo" />
                <div className="user-icon">
                    <UserOutlined />
                </div>
            </nav>
            <ArrowLeftOutlined onClick={goBack} className={"arrowBack"} />
            <div className={"bookingPoster"}>
                <Image preview={false} width={300} src={"https://c8.alamy.com/comp/2JH2MYR/robbinsposter-the-shawshank-redemption-1994-2JH2MYR.jpg"} className={"bookingImg"}/>
            </div>
            <div className={"bookingDetailsContainer"}>
                <div className={"bookingDetails"}>
                    The Shawshank Redemption
                </div>
                <div className={"bookingPrice"}>
                    $300
                </div>
                <div className={"cinemaLocation"}>
                    Cinema
                    <Select defaultValue={"Cinema 1"} className={"cinemaDropdown"}/>
                </div>
                <div className={"availableDate"}>
                    Date
                    <Radio.Group onChange={onChangeDate} defaultValue={"a"} className={"schedule"}>
                        <Radio.Button value="a">Monday</Radio.Button>
                        <Radio.Button value="b">Tuesday</Radio.Button>
                        <Radio.Button value="c">Wednesday</Radio.Button>
                        <Radio.Button value="d">Thursday</Radio.Button>
                        <Radio.Button value="d">Friday</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
        </div>
    );
}