import './../css/BookingPage.css'
import ticketwavelogo from "../ticketwavelogo.png";
import React from "react";
import {ArrowLeftOutlined, UserOutlined} from "@ant-design/icons";
import {Image} from "antd";
import {useNavigate} from "react-router-dom";

export const BookingPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/movieDetail');
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
            <div className={"movieDetailsContainer"}>
                <div className={"movieDetails"}>
                    The Shawshank Redemption
                </div>
                <div className={"movieDetails"}>
                    $300
                </div>
            </div>
        </div>
    );
}