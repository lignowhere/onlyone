import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Countdown from 'react-countdown';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LiveAution from '../components/layouts/home/LiveAution';
import dataLiveAution from '../assets/fake-data/dataLiveAution'
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/avatar/avt-6.jpg'
import img2 from '../assets/images/avatar/avt-5.jpg'
import img3 from '../assets/images/avatar/avt-4.jpg'
import imgdetail1 from '../assets/images/product-item/item-1.jpg'
import avt1 from '../assets/images/avatar/avt-18.jpg'
import avt2 from '../assets/images/avatar/avt-2.jpg'
import collection1 from '../assets/images/img-collection/collection-14.jpg'

const ItemDetails = () => {
    const [dataHistory] = useState(
        [
            {
                img: img1,
                name:"@H.ThuyLinh",
                time: "2 giờ trước ",
                price: "25 ETH ",
            },
            {
                img: img2,
                name:"@ThuyTien",
                time: "3 giờ trước ",
                price: "25 ETH ",
            },
            {
                img: img3,
                name:"@Jack97",
                time: "4 giờ trước ",
                price: "25 ETH ",
            },
        ]
    )
  return <div className='item-details'>
        <Header />
        <section className="fl-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-title-inner flex">
                            <div className="page-title-heading">
                                <h2 className="heading">Thông Tin Sản Phẩm</h2>
                            </div>
                            <div className="breadcrumbs">
                                <ul>
                                    <li><Link to="/">Trang chủ</Link></li>
                                    <li>Thông tin sản phẩm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="tf-section item-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="item-media">
                                <div className="media">
                                    <img src={imgdetail1} alt="Only One" />
                                </div>
                                <div className="countdown style-2">
                                    <Countdown  date={Date.now() + 500000000} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="content-item">
                                <h3> Binz - DBMH - Gold 46/50 [Tuniver]</h3>
                                <p className="mg-bt-42">Song: Don't Break My Heart <br />
                                                        - 0.24% Revenue Share <br />
                                                        - Private Live Session and Limited Merch from Binz <br />
                                                        - Early access to future projects</p>
                                <div className="author-item">
                                    <div className="avatar">
                                        <img src={avt1} alt="Only One" />
                                    </div>
                                    <div className="infor">
                                        <div className="create">Chủ Sở Hữu</div>
                                        <h6><Link to="/authors">Lignowhere</Link> </h6>
                                        <div className="widget-social">
                                            <ul>
                                                <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link>
                                                </li>
                                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-details-item">
                                    <li><span className="name">Giá hiện tại 1.5 ETH</span><span
                                            className="price">$500.89</span> <span className="pagi">1 trên 5</span> </li>
                                    <li>Kích thước 14000 x 14000 px</li>
                                    <li> Khối lượng giao dịch 252</li>
                                </ul>
                                <div className="author-bid">
                                    <div className="author-item">
                                        <div className="avatar">
                                            <img src={avt2} alt="Only One" />
                                        </div>
                                        <div className="infor">
                                            <h6><Link to="/authors">Binz</Link> </h6>
                                            <div className="create">Nhà sáng tạo</div>
                                        </div>
                                    </div>
                                    <div className="author-item">
                                        <div className="avatar">
                                            <img src={collection1} alt="Only One" />
                                        </div>
                                        <div className="infor">
                                            <h6><Link to="/authors">Don't breake my heart</Link> </h6>
                                            <div className="create">Bộ sưu tập</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="infor-bid">
                                    <div className="content-left">
                                        <h6>Giá Cao Nhất</h6>
                                        <div className="price">9.3 BNB</div>
                                    </div>
                                    <div className="pagi">1 trên 9</div>
                                </div>
                                <Link to="/connect-wallet"
                                    className="sc-button style letter style-2 style-item-details"><span>Trả Giá</span>
                                </Link>
                                <div className="flat-tabs themesflat-tabs">
                                <Tabs>
                                        <TabList>
                                        <Tab>Đấu giá</Tab>
                                        <Tab>Lịch sử</Tab>
                                        <Tab>Thông tin</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <ul className="bid-history-list">
                                            {
                                                dataHistory.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="content">
                                                            <div className="author-item">
                                                                <div className="avatar">
                                                                    <img src={item.img} alt="Only One" />
                                                                </div>
                                                                <div className="infor">
                                                                    <p>Đang được trả giá <span className="status">{item.price}</span> 
                                                                    {item.time}
                                                                        bởi <span className="creator">{item.name}</span> </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                            </ul>
                                        </TabPanel>
                                        <TabPanel>
                                            <ul className="bid-history-list">
                                                <li>
                                                    <div className="content">
                                                        <div className="author-item">
                                                            <div className="avatar">
                                                                <img src={avt2} alt="Only One" />
                                                            </div>
                                                            <div className="infor">
                                                                <p>Được đúc với giá <span className="status">25 ETH </span>
                                                                    8 giờ trước
                                                                    bởi <span className="creator">@Tuniver_Binz</span> </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="provenance">
                                                <p>Ca khúc “Don’t Break My Heart” được Binz sáng tác từ năm 2020. 
                                                    Bên cạnh phần âm nhạc do nhà sản xuất Touliver chịu trách nhiệm, 
                                                    sản phẩm lần này còn có sự hỗ trợ bởi các thành viên khác của SpaceSpeakers 
                                                    bao gồm đạo diễn Kiên Ứng, ca sĩ SOOBIN và rapper 16 Typh.  </p>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <LiveAution data={dataLiveAution} />
        <Newsletters />
        <Footer />
  </div>;
};

export default ItemDetails;
