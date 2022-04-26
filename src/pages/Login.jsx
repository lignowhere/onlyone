import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/background/img-login.jpg'

const Login = () => {
  return <div>
    <Header />

    <section className="tf-section login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Đăng Nhập</h3>
                                <p className="desc">Đăng nhập vào tài khoản sàn Only One của bạn </p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                <input name="user" type="text" placeholder="Tài khoản/Địa chỉ Email"
                                    required />
                                <input name="number" type="password" placeholder="Mật khẩu"
                                    required />
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label htmlFor="html">Ghi nhớ đăng nhập</label>
                                    </div>
                                </div>
                                <button name="submit" type="submit"
                                    className="sc-button style letter style-2"><span>Đăng Nhập</span> </button>
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
                            <img src={img1} alt="Only One" />
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

export default Login;
