import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/channels4_profile.jpg'
import { IoMdHome } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaSearchLocation } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import './Header.scss'
import { useEffect, useState } from 'react';
import ModalNotification from '../Auth/ModalNotification';
import { useDispatch, useSelector } from 'react-redux';
import { doLogoutAction } from '../../redux/account/accountSlice';
import { callLogout, logoutUser } from '../../services/api';
import { message, notification } from 'antd';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.account.isAuthenticated);
    const user = useSelector(state => state.account.Users);
    console.log("user type: ", typeof users);
    const [isShowModalLogin, setIsShowModalLogin] = useState(false);
    const handleClose = () => {
        setIsShowModalLogin(false);
    }


    // const handleLogout = async () => {
    //     try {
    //         await callLogout();
    //         localStorage.removeItem('access_token');
    //         localStorage.removeItem('refresh_token');
    //         dispatch(doLogoutAction());
    //         message.success('Đăng xuất thành công!');
    //         navigate('/login');
    //     } catch (error) {
    //         console.error('Logout error:', error);
    //         notification.error({
    //             message: 'Có lỗi xảy ra',
    //             description: error.response ? error.response.data.message : error.message,
    //             duration: 5
    //         });
    //     }
    // };

    const handleLogOut = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        dispatch(doLogoutAction());
        message.success('Đăng xuất thành công!');
        navigate('/login');
      };
    return (
        <>
            <Navbar bg="#262D34" className='header-container'  expand="lg">
                <Container >
                    <Navbar.Brand href="/">
                        <div className='header-logo'>
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top header-logo-img"
                                alt="React Bootstrap logo"
                            />
                            <span className='header-logo-content ml-2'>LAND INVEST</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav list-item">
                        <Nav className="list-item-icon">
                            <NavLink to="/" className='nav-link'><IoMdHome className='nav-link-icon' size={24}/></NavLink>
                            <NavLink to="/users" className='nav-link'><GrAnnounce className='nav-link-icon' size={20}/></NavLink>
                            <NavLink to="/admins" className='nav-link'><HiMiniUserGroup className='nav-link-icon' size={20}/></NavLink>
                            <Nav.Link href="/test" className='nav-link'><FaSearchLocation className='nav-link-icon' size={20}/></Nav.Link>
                        </Nav>
                        <div className='header-search'>
                                <input placeholder='Type here to search...'></input>
                        </div>
    
                       
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <div className='header-right'>
                        <div className='header-notification'>
                            <IoIosNotifications size={24}/>
                        </div>
                        {
                            !isAuthenticated ? 
                            <button className='btn' onClick={()=>setIsShowModalLogin(true)}>Đăng nhập</button>
                            :
                            <>
                            <span style={{color:"#fff"}}><span style={{marginLeft:"2px"}}>{user.Username}</span></span>
                            <button className='btn' onClick={()=>handleLogOut()}>Đăng xuất</button>
                            </>
                        }
                        
                    </div>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
            <ModalNotification 
                show={isShowModalLogin}
                handleClose={handleClose}
            />
        </>
    );
}

export default Header;


