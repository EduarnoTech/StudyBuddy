import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import axios from 'axios';


const CustomNavbar = (props) => {
        let {mClass, nClass, cClass, slogo, hbtnClass, onClickService, onClickFeatures, onClickPricing, onClickReview} = props;
        let user = JSON.parse(localStorage.getItem('user'));

        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        const handleLogout = () => {
            localStorage.removeItem("user");
            window.location.reload();
        }
        // const transferingData=async()=>{
        //     const oldMsgs=await axios.get("https://device6chatapi.el.r.appspot.com/api/messages/lastmonth/2022-04-10T18:30:00.000Z");
        //     let oldMsgsAr=oldMsgs.data;
        //     if(oldMsgsAr){
        //         for(let i=0; i<oldMsgs.data.length;i=i+50){
        //             let oldMsgPart=oldMsgsAr.slice(i,i+50)
        //         const insertMsg=await axios.post("https://device2api.el.r.appspot.com/api/messages/insertToDev1db",{
        //             resultantAr:oldMsgPart
        //         })
                
        //     }
        //         // console.log({insertMsg})
        //         alert("messges transfered from device 2")
              
        //     }
        // }
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area"  >
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand`} to="/">
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={require("../img/logo1.png")} alt=""/>
                            <img style={{width: '35px'}} src={require("../img/logo1.png")} alt="logo"/>
                            <div style={{fontFamily: '"Poppins", sans-serif', fontSize: '22px'}}>&nbsp;tutorlancer</div>
                            </div>
                        </Link>


                        {!props.tutorSignup && 
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>}

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                               
                              
                                { !props.tutorSignup && <><div className="dropdown submenu nav-item">
                                    <Link to="/dashboard" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Dashboard</Link>
                                    {/* <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink exact title="Service" className="nav-link" to='/Service'>Service</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Service Details" className="nav-link" to='/ServiceDetails'>Service Details</NavLink></li>
                                    </ul> */}
                                </div>
                                <div className="dropdown submenu nav-item"  onClick={onClickService}>
                                    <Link to="./" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Services</Link>
                                    {/* <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink exact title="Service" className="nav-link" to='/Service'>Service</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Service Details" className="nav-link" to='/ServiceDetails'>Service Details</NavLink></li>
                                    </ul> */}
                                </div>
                                <div className="dropdown submenu nav-item" onClick={onClickFeatures}>
                                    <Link to="./" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Features</Link>
                                    {/* <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink exact title="About" className="nav-link" to='/About'>About</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Process" className="nav-link" to='/Process'>Process</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Team" className="nav-link" to='/Team'>Team</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Price" className="nav-link" to='/Price'>Price</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Faq" className="nav-link" to='/Faq'>Faq</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="SignIn" className="nav-link" to='/SignIn'>Sign In</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="SignUp" className="nav-link" to='/SignUp'>Sign Up</NavLink></li>
                                    </ul> */}
                                </div>
                                <div className="dropdown submenu nav-item" onClick={onClickPricing}>
                                    <Link to="./" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Pricing</Link>
                                    {/* <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink title="Portfolio 2" className="nav-link" to='/Portfolio-2col'>Portfolio 2col</NavLink></li>
                                        <li className="nav-item"><NavLink title="Portfolio 3" className="nav-link" to='/Portfolio-3col'>Portfolio 3col</NavLink></li>
                                        <li className="nav-item"><NavLink title="Portfolio Fullwidth" className="nav-link" to='/Portfolio-fullwidth-4col'>Portfolio fullwidth</NavLink></li>
                                        <li className="nav-item"><NavLink title="PortfolioSingle" className="nav-link" to='/PortfolioSingle'>Portfolio Single</NavLink></li>
                                    </ul> */}
                                </div>
                                {/* <li className="nav-item dropdown submenu">
                                    <a className="nav-link dropdown-toggle" href=".#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/Bloglist" className="nav-link">Blog List</NavLink></li>
                                        <li className="nav-item"><NavLink to="/BlogGridPage" className="nav-link">Blog Grid</NavLink></li>
                                        <li className="nav-item"><NavLink to="/BlogSingle" className="nav-link">Blog Single</NavLink></li>
                                    </ul>
                                </li> */}
                                <div className="dropdown submenu nav-item" onClick={onClickReview}>
                                    <Link to="./" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Reviews</Link>
                                </div>
                                
                                {/* <div className="nav-item" onClick={onClickReview}><Link title="Pricing" className="nav-link">Reviews</Link></div> */}
                                {/* <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="/Faq">FAQs</NavLink></li> */}
                                {/* <li className="nav-item"><a title="Pricing" className="nav-link" href="https://myassignmentbuddy.tutorpoint.in/registration-form" target='_blank'>Become A Tutor</a></li> */}
                                <li className="nav-item"><Link title="Pricing" className="nav-link" to="/TutorSignup" target="_blank" >Become A Tutor</Link></li>
                                {/* <li className="nav-item"><Link title="Pricing" className="nav-link" to="/admin" >Admin</Link></li> */}
                                <li className="nav-item"><Link title="Pricing" className="nav-link" to="/admin" >Admin</Link></li>
                                </>
                                }
                            </ul>
                            {user ?
                            <>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <Tooltip title="My Account">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32, backgroundColor: '#5e2ced' }}>{user?.saveUser?.name?.slice(0, 1)}</Avatar>
                                    </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Link to="/dashboard" style={{color: "black"}}>
                                <MenuItem>
                                <ListItemIcon>
                                    <DashboardRoundedIcon fontSize="small" />
                                </ListItemIcon>
                                Dashboard
                                </MenuItem>
                                </Link>
                                <Link to="/dashboard/account" style={{color: "black"}}>
                                <MenuItem>
                                <ListItemIcon>
                                    <AccountCircleRoundedIcon fontSize="small" />
                                </ListItemIcon>
                                My Profile
                                </MenuItem>
                                </Link>
                                <Divider />
                                <Link to="/dashboard/dashboard/settings" style={{color: "black"}}>
                                <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                                </MenuItem>
                                </Link>
                                <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                                </MenuItem>
                            </Menu>
                            </> : !props.tutorSignup  && <Link className={`btn_get btn_hover ${hbtnClass}`} to="/SignIn">Sign In</Link>}
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    
}

export default CustomNavbar;