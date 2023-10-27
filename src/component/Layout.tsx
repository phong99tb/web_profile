import { Col, Row, Menu } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import type { MenuProps } from 'antd';



const Layout = () => {
    let navigate = useNavigate();
    const [current, setCurrent] = useState('');

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: '',
        },
        {
            label: 'About me',
            key: 'about',
        },
        {
            label: 'Project',
            key: 'project',
        },
        {
            label: 'Contacts',
            key: 'contacts',
        },
    ];

    const onClick: MenuProps['onClick'] = (e:any) => {
        setCurrent(e.key);
        navigate("/" + e.key)
    };
    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <img src={require('../assets/img/Logo.png')} className="logo" />
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </div>
            </div>
            <Outlet />
            <div className="content">
                <Row gutter={16}>
                    <Col lg={12} span={24} >
                        <div className="flex--column">
                            <div className="flex" style={{ marginBottom: 5, justifyContent: "center" }}>
                                <img src={require('../assets/img/Logo.png')} className="logo--footer" />
                                <p style={{ fontSize: 16, color: "#9c9797", marginLeft: 10 }}>phong99tb@gmail.com</p>
                            </div>
                            <p style={{ textAlign: "center" }}>Lập trình viên Front-end</p>
                        </div>
                    </Col>
                    <Col lg={12} span={24} >
                        <div className="flex--column">
                            <p style={{ textAlign: "center", fontSize: 16, marginBottom: 5 }}>Mạng xã hội</p>
                            <div className="footer__social">
                                <SocialIcon className="custom-class" url="https://www.facebook.com/phong.nguyentrung.798" />
                                <SocialIcon className="custom-class" url="https://www.instagram.com/popenguyen56108" />
                                <SocialIcon className="custom-class" url="https://www.linkedin.com/in/pope-nguyen-85444b202/" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="footer__overight">
                    <p className="footer__text">© 2019 All Rights Reserved Phong</p>
                </div>
            </div>
        </div>
    )
};

export default Layout;