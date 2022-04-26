import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img from '../assets/images/background/img-register.jpg'

const Register = () => {
  return <div>
    <Header />

    <section className="tf-section login-page register-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Tạo Tài Khoản Mới</h3>
                                <p className="desc">Luôn miễn phí và mãi mãi như vậy </p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="Họ"
                                        required />
                                    <input name="name" type="text" placeholder="Tên" required />
                                </div>
                                <div className="input-group">
                                    <input name="phone" type="text" placeholder="Số điện thoại"
                                        required />
                                    <input name="name" type="text" placeholder="Tên người dùng" required />
                                </div>
                                <input name="email" type="email" placeholder="Địa chỉ Email"
                                    required />
                                <div className="input-group">
                                    <input name="password" type="password" placeholder="Mật khẩu"
                                        required />
                                    <input name="password" type="password" placeholder="Nhập lại mật khẩu"
                                        required />
                                </div>
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="html" name="fav_language" className="mg-bt-0"
                                            value="HTML" />
                                        <label htmlFor="html">Ghi nhớ</label>
                                    </div>
                                </div>
                                <button name="submit" type="submit"
                                    className="sc-button style letter style-2"><span>Đăng Ký Ngay</span> </button>
                            </form>
                            <div className="other-login">
                                <div className="text">Hoặc</div>
                                <div className="widget-social">
                                    <ul>
                                        <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form-background">
                            <img src={img} alt="Bidzen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Newsletters />
    <Footer />
  </div>;
};

export default Register;
