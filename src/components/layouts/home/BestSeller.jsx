import React from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

const BestSeller = props => {
    const data = props.data;
    return (
        <section className="top-seller tf-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2">
                            <div className="content-left">
                                <div className="inner">
                                    <h3>Nhà Sáng Tạo Hàng Đầu</h3>
                                    <p className="desc">Những nhà sáng tạo nội dung phổ biến được yêu thích nhất </p>
                                </div>
                            </div>
                            <div className="content-right">
                            <Dropdown>
                                <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                    <span>Từ trước đến nay</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    <span>Từ trước đến nay</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <span>1 ngày</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <span>1 tuần</span>
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    <span>1 tháng</span>
                                </Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>
                    </div>
                    {
                        data.slice(0,6).map((item,index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="sc-author style-2">
                                    <div className="card-avatar">
                                        <img src={item.img} alt="Only One" />
                                    </div>
                                    <div className="infor">
                                        <h5><Link to="/creator">{item.name}</Link></h5>
                                        <div className="details">{item.price}</div>
                                        <ul className="rating">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li className="un-rate"><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div className="button-follow">
                                        <Link to="/login" className="sc-button style-2"><span>Follow</span></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default BestSeller;
