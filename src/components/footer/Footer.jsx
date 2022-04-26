import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/post/post-recent-new-4.jpg'
import img2 from '../../assets/images/post/post-recent-new-5.jpg'

import logo from '../../assets/images/logo/logo_dark.png'
import logo2x from '../../assets/images/logo/logo_dark@2x.png'

const Footer = () => {
    const [dataSocial] = useState([
        {
            icon: 'fab fa-facebook-f'
        },
        {
            icon: 'fab fa-twitter'
        },
        {
            icon: 'fab fa-linkedin-in'
        },
        {
            icon: 'fab fa-youtube'
        },
    ])

    const [dataLinkMarket] = useState([
        {
            title: 'Giới thiệu',
            link: '/contact'
        },
        {
            title: 'Tuyển Dụng',
            link: '/contact'
        },
        {
            title: 'Điều Khoản',
            link: '/blog-details'
        },
        {
            title: 'Bảo Mật',
            link: '/blog-details'
        },
        {
            title: 'Bản Quyền',
            link: '/blog-details'
        },
        {
            title: 'Truyền Thông',
            link: '/blog-details'
        },
    ])

    const [dataSupport] = useState([
        {
            title: 'Trung Tâm Trợ Giúp',
            link: '/contact'
        },
        {
            title: 'Hướng Dẫn Mua Hàng',
            link: '/contact'
        },
        {
            title: 'Hướng Dẫn Bán Hàng',
            link: '/blog-details'
        },
        {
            title: 'Thanh Toán',
            link: '/blog-details'
        },
        {
            title: 'Tiếp Thị Liên Kết',
            link: '/contact'
        },
        {
            title: 'Only One Blog',
            link: '/blog'
        },
    ])

    const [dataRecent] = useState([
        {
            img: img1,
            title: 'NFT đang thay đổi ngành nghệ thuật như thế nào?',
            time: '25 Thg2 2022',
        },
        {
            img: img2,
            title: 'NFT đang thay đổi mọi thứ nhưng liệu có được xây dựng để đi đến cùng?',
            time: '25 Thg2 2022',
        },
    ])

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  return (
      <div>
            <footer id="footer" className="clearfix bg-style">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/">
                                        <img id="logo_footer" src={logo} alt="nft-gaming"
                                            srcSet={logo2x} />
                                    </Link>
                                </div>
                                <p className="sub-widget-logo">Only One là sàn NFT đầu tiên và lớn nhất tại Việt Nam. Với mục tiêu giúp mọi người có thể tiếp cận NFT một cách đơn giản và nhanh chóng nhất</p>
                                <div className="widget-social">
                                    <ul>
                                        {
                                            dataSocial.map((item,index)=> (
                                                <li key={index}><Link to="#"><i className={item.icon}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-marketplace">
                                <h5 className="title-widget">Only One</h5>
                                <ul>
                                    {
                                        dataLinkMarket.map((item,index)=> (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-supports">
                                <h5 className="title-widget">Chăm Sóc KH</h5>
                                <ul>
                                    {
                                        dataSupport.map((item,index)=> (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget widget-post">
                                <h5 className="title-widget">Tin Tức</h5>
                                <ul className="post-new">
                                    {
                                        dataRecent.map((item,index)=> (
                                            <li key={index}>
                                                <div className="post-img">
                                                    <img src={item.img} alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                                    <Link to="/blog-details" className="post-date"><i
                                                            className="far fa-calendar-week"></i> {item.time}</Link>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom">
                <div className="container">
                    <div className="bottom-inner">
                    Copyright © 2022 Only One | Sàn giao dịch NFT lớn nhất tại Việt Nam. Thiết kế bởi <a
                            href="https://otis.report"> Otis Team</a>
                    </div>
                </div>
            </div>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
      </div>
  );
};

export default Footer;
