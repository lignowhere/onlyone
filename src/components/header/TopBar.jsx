import React from 'react';
import { Link } from 'react-router-dom'
import Countdown from "react-countdown";
import { Dropdown } from 'react-bootstrap';
const renderer = ({ hours, minutes, seconds }) => 
        <span>
          {hours}:{minutes}:{seconds}
        </span>
     
const TopBar = () => {
  return    <div className="topbar">
                <div className="container">
                    <div className="topbar-inner flex">
                        <div className="menu-options flex">
                            <div className="ethereum">
                                <div id="ethereum" className="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                            <span>Ethereum</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                            <span>Ethereum</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <span>BSC</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <span>Polygon</span>
                                        </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="english">
                                <div id="english" className="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                            <span>Tiếng Việt</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                            <span>Tiếng Việt</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <span>English</span>
                                        </Dropdown.Item>
                                        

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="topbar-right flex">
                            <span>Sản phẩm mới sắp ra mắt</span>
                            <div className="countdown">
                            <Countdown date={Date.now() + 50000000} renderer={renderer} />
                            </div>
                            <ul className="socical-icon flex">
                                <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>;
};

export default TopBar;
