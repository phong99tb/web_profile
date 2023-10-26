import { Row } from "antd";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';



const Layout = () => {
    let navigate = useNavigate();
    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <img src={require('../assets/img/Logo.png')} className="logo"/>
                    <div className="menuHeader">
                        <p onClick={() => navigate("/")}>HOME</p>
                        <p onClick={() => navigate("/about")} >ABOUT</p>
                        <p>SERVICES</p>
                        <p>PORTFOLIO</p>
                        <p>EXPERIENCE</p>
                        <p>BLOG</p>
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
            <Outlet />
            <div className="content">
                <div className="footer__social">
                    <SocialIcon className="custom-class" url="https://www.facebook.com/phong.nguyentrung.798" />
                    <SocialIcon className="custom-class" url="https://www.instagram.com/popenguyen56108" />
                    <SocialIcon className="custom-class" url="https://www.linkedin.com/in/pope-nguyen-85444b202/" />
                </div>
                <div className="footer__overight">
                    <p className="footer__text">© 2019 All Rights Reserved Phong</p>
                </div>
            </div>
        </div>
    )
};

export default Layout;