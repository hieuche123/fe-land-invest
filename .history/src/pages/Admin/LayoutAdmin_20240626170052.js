import React,{useEffect, useState} from "react";
import {
    AppstoreAddOutlined,
    ExceptionOutlined,
    HeartTwoTone,
    TeamOutlined,
    UserOutlined,
    DollarCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined,
    AppstoreOutlined,
} from '@ant-design/icons'
import { Layout, Menu ,Dropdown, Space, message } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './LayoutAdmin.scss'
import { useDispatch, useSelector } from "react-redux";
// import { callLogout } from "../../services/api";
// import { doLogoutAction } from "../../redux/account/accountSlice";
const {Content, Footer, Sider} = Layout




const LayoutAdmin = () => {
    const listBoxs = useSelector((state) => state.listbox.list);
    console.log("res listBoxs",listBoxs)
const items = [
   
    {
        label: <Link to='/admin'>Quản lý dữ liệu tải lên</Link>,
        key: 'upload',
        icon: <ExceptionOutlined/>
    },
    {
        label: <Link to='/admin/listbox'>Quản lý thông tin</Link>,
        key: 'listbox',
        icon: <DollarCircleOutlined/>
    },
    {
        label: <Link to='/admin/listbox'>Quản lý người dùng</Link>,
        key: 'user',
        icon: <DollarCircleOutlined/>
    },
    {
        label: <Link to='/admin/listbox'>Quản lý bài đăng</Link>,
        key: 'posts',
        icon: <DollarCircleOutlined/>
    },
    {
        label: <Link to='/admin/listbox'>Quản lý group</Link>,
        key: 'group',
        icon: <DollarCircleOutlined/>,
        children: [
            {
                label: <Link to='/admin/user'>CRUD</Link>,
                key: 'crud',
                icon: <TeamOutlined/>
            },
        ]
    },
]
const listBoxName = listBoxs.map((boxName) =>{
    return (
        {
            label: <Link to='/admin/user'>{boxName.BoxName}</Link>,
            key: 'crud',
            icon: <TeamOutlined/>
        }
    )
})
const [collapsed, setCollapsed] = useState(false);
const [activeMenu, setActiveMenu] = useState('upload');
// const user = useSelector(state => state.account.user);

// const navigate = useNavigate();
// const dispatch = useDispatch();

// useEffect(()=> {
//     if(window.location.pathname.includes('/book')){
//         setActiveMenu('book');
//     }
//     if(window.location.pathname.includes('/admin/user')){
//         setActiveMenu('crud');
//     }
// },[])
// const hanldeLogout = async () => {
//     const res = await callLogout();
//     if(res && res.data) {
//         dispatch(doLogoutAction());
//         message.success('Đăng xuất thành công!');
//         navigate('/')
//     }
// }

const itemsDropdown = [
    {
        label: <label 
            style={{cursor: 'pointer'}}
        >
            Quản lý tài khoản
        </label>,
        key: 'account',

    },
    {
        label: <label 
        style={{cursor: 'pointer'}}
        // onClick={()=>hanldeLogout()}
        >
            Đăng xuất
        </label>,
        key: 'logout',
    },
];

   
    // const isAuthenticated = window.location.pathname.startsWith('/admin');
    // const userRole = user.role;
    return (
        <Layout
            style={{minHeight:'100vh'}}
            className="layout-admin"
        >
            <Sider
                theme="light"
                collapsible
                collapsed={collapsed}
                onCollapse={(value)=>{setCollapsed(value)}}
            >
                <div
                    style={{height:32, margin: 16, textAlign:'center'}}
                >
                    Admin
                </div>
                <Menu
                    selectedKeys={[activeMenu]}
                    //defaultSelectedKeys={[activeMenu]}
                    mode="inline"
                    items={items}
                    onClick={
                        (e)=>setActiveMenu(e.key)
                    }
                />
                
            </Sider>
            <Layout>
                <div className="admin-header">
                    <span>
                        {
                            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,{
                            className: 'trigger',
                            onClick: ()=> setCollapsed(!collapsed),
                        })}
                    </span>

                    <Dropdown menu={{items: itemsDropdown}} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                {/* Welcome {user?.fullName} */}
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <Content>
                    <Outlet/>
                </Content>
                {/* <Footer style={{padding: 0}}>
                    &copy; 2023. Made with <HeartTwoTone/>
                </Footer> */}
            </Layout>

        </Layout>

        
    //   <div className="layout-app">
    //     {/* <Header/> */}
    //     {isAuthenticated && user.role === 'ADMIN' && <Header/>}
    //     <Outlet/>
    //     {isAdminRoute && user.role === 'ADMIN' && <Footer/>}
    //     {/* <Footer/> */}
    //   </div>
    )
}
export default LayoutAdmin