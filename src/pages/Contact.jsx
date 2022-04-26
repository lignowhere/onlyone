import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const Contact = () => {
    const [data] = useState(
        [
            {
                title: 'Hotline Hỗ Trợ',
                icon: 'fal fa-phone-volume',
                info: '+84 (912) 345 678',
                link: 'tel:0912345678'
            },
            {
                title: 'Trụ Sở Chính',
                icon: 'fal fa-map-marker-alt',
                info: '536A Minh Khai, Hai Bà Trưng, Hà Nội',
                link: ''
            },
            {
                title: 'Thông Tin Khác',
                icon: 'fal fa-envelope-open',
                info: 'info@sanonlyone.com www.onlyone.com',
                link: 'mailto:abc@gmail.com'
            },
        ]
    )
  return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Liên Hệ</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Trang chủ</Link></li>
                                <li>Liên hệ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="tf-contact tf-section">
        <div className="container">
            <div className="row">
                {
                    data.map((item,index)=> (
                        <div key={index} className="col-md-4">
                            <div className="sc-contact-infor">
                                <h4>{item.title}</h4>
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="infor">
                                    <Link to={item.link}>{item.info}</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    <section>
        <div className="container-fluid">
            <div className="row">
                <iframe title="Only One" className="map-contact"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8520937346316!2d105.86734051531351!3d20.99856519418354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac040d6d6819%3A0x1b6d41a75285d29d!2zNTM2IFAuIE1pbmggS2hhaSwgVsSpbmggUGjDuiwgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1647854343002!5m2!1sen!2s"
                    width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" />
            </div>
        </div>
    </section>
    <section className="tf-section login-page contact-page pd-top-0">
        <div className="container">
            <div className="row jtf-content-center">
                <div className="col-md-8">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Gửi Thư Tới Only One</h3>
                                <p className="desc">Vui lòng gửi thư cho chúng tôi nếu bạn cần hỗ trợ hay có bất kỳ góp ý nào </p>
                            </div>
                            <form id="create-item-1"
                                action="#" method="GET" acceptCharset="utf-8">
                                <input type="text" id="name" className="tb-my-input" name="name" tabIndex="1"
                                    placeholder="Tên đầy đủ của bạn" aria-required="true" required />
                                <input type="email" id="email" className="tb-my-input" name="email" tabIndex="2"
                                    placeholder="Địa chỉ Email" aria-required="true" required />
                                <select className="valid">
                                    <option value="1">Tiêu đề</option>
                                    <option value="2">Subject</option>
                                    <option value="3">Subject</option>
                                </select>
                                <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Nội dung" aria-required="true"></textarea>
                                <button name="submit" type="submit" id="comment-reply"
                                    className="sc-button style letter style-2"><span>Gửi Đi</span> </button>
                            </form>
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

export default Contact;
