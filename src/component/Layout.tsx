import { Outlet, Link, useNavigate   } from "react-router-dom";


const Layout = () => {
    let navigate  = useNavigate ();
    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <p>icon</p>
                    <div className="menuHeader">
                        <p onClick={()=>navigate("/")}>HOME</p>
                        <p onClick={()=>navigate("/about")} >ABOUT</p>
                        <p>SERVICES</p>
                        <p>PORTFOLIO</p>
                        <p>EXPERIENCE</p>
                        <p>BLOG</p>
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    )
};

export default Layout;