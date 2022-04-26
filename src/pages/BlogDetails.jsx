import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/post/post-detail-1.jpg'
import imgpost1 from '../assets/images/post/post-recent-new-1.jpg'
import imgpost2 from '../assets/images/post/post-recent-new-2.jpg'
import imgpost3 from '../assets/images/post/post-recent-new-3.jpg'
import imgpost4 from '../assets/images/post/post-related-new-1.jpg'
import imgpost5 from '../assets/images/post/post-related-new-2.jpg'
import avt from '../assets/images/avatar/avt-23.png'
import avt1 from '../assets/images/avatar/avt-13.jpg'
import avt2 from '../assets/images/avatar/avt-14.jpg'
import avt3 from '../assets/images/avatar/avt-15.jpg'


const BlogDetails = () => {
    const [dataCategory] = useState(
        [
            {
                name: 'Blockchain',
                count: '5'
            },
            {
                name: 'Metaverse',
                count: '8'
            },
            {
                name: 'NFT',
                count: '3'
            },
            {
                name: 'Tin Tức',
                count: '2'
            },
            {
                name: 'Tuyển Dụng',
                count: '4'
            },
            {
                name: 'Thông Báo',
                count: '5'
            },
            {
                name: 'Hướng Dẫn',
                count: '2'
            },
        ]
    )
    const [dataRecent] = useState(
        [
            {
                img: imgpost1,
                time: ' 05 Thg2 2022',
                title: 'Liệu Metaverse có thay thế các công ty truyền thống? ',
            },
            {
                img: imgpost2,
                time: ' 01 Thg2 2022',
                title: 'Đổi thưởng trong GameFi: Cơ chế kiếm tiền được thiết kế trong game ',
            },
            {
                img: imgpost3,
                time: ' 13 Thg1 2022',
                title: 'Tại sao vé hòa nhạc có thể là trường hợp sử dụng rộng rãi tiếp theo cho NFT? ',
            },
        ]
    )
    const [dataRelated] = useState(
        [
            {
                img:imgpost4,
                title: 'Crypto Music là gì và nó cách mạng hóa ngành công nghiệp âm nhạc ra sao?',
                time: ' 05 Thg1 2022'
            },
            {
                img:imgpost5,
                title: 'NFT đang thay đổi ngành nghệ thuật như thế nào?',
                time: ' 05 Thg1 2022'
            },
        ]
    )
    const [dataTags] = useState(
        [
            {
                name: 'Bored Ape',
                active: 'active'
            },
            {
                name: 'Crypto Punk',
                active: ''
            },
            {
                name: 'Metaverse',
                active: ''
            },
            {
                name: 'Otis Report',
                active: ''
            },
            {
                name: 'NFTs',
                active: ''
            },
        ]
    )
    const [dataComment] = useState(
        [
            {
                img: avt1,
                name: 'Hoàng Tôn',
                time: '25 Tháng 2 2022',
                text: 'Nội dung quá hay,rất chú trọng đến nội dung thực tế. Tuy nhiên có kha khá clip với nội dung khá ngắn, mình nghĩ nên gộp lại sẽ tốt hơn.',
                class:''
            },
            {
                img: avt2,
                name: 'Phong Lê',
                time: '25 Tháng 2 2022',
                text: 'Bài viết có nội dung khá là phức tạp và khó hiểu, tuy nhiên thông điệp truyền tải như vậy là tốt rồi.',
                class:'reply-comment'
            },
            {
                img: avt3,
                name: 'Hiền Hồ',
                time: '25 Tháng 2 2022',
                text: 'Rất hay. Giúp mình hiểu được tại sao trước đây dù có giật chồng nhưng sau lại mất hết. Mình đã hiểu và rút ra được nhiều kiến thức rất bổ ích.',
                class:''
            },
        ]
    )

  return <div>
    <Header />
    {/* <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Blog Destails</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Blog Destails</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    <div className="tf-section post-details">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <article className="blog-details">
                        <div className="post-media">
                            <img src={img1} alt="Only One" />
                            <div className="meta">
                                <div className="item author">
                                    <Link to="#">Cao Nguyên</Link>
                                </div>
                                <div className="item date">
                                    <Link to="#">05 Thg2 2022</Link>
                                </div>
                                <div className="item comments">
                                    Bình luận (5)
                                </div>
                            </div>
                        </div>
                        <div className="post-content">
                            <h1 className="post-title">Tại sao vé hòa nhạc có thể là trường hợp sử dụng rộng rãi tiếp theo cho NFT?</h1>
                            <p>Live Nation, một trong những công ty giải trí lớn nhất thế giới, đã tiết lộ rằng họ đang tìm hiểu cách các 
                                mã thông báo không thể thay thế (NFT) có thể thúc đẩy sự tham gia của người dùng.
                                Doanh nghiệp đã có một năm 2020 đầy cố gắng sau khi đại dịch coronavirus khiến các buổi hòa nhạc trên khắp 
                                thế giới bị hoãn hoặc hủy bỏ - nhưng một sự trở lại lớn được dự đoán trong năm nay.
                                Trong một buổi nói chuyện với các nhà đầu tư, Giám đốc điều hành của Live Nation, Michael Rapino tiết lộ 
                                rằng ông có một “đội ngũ tuyệt vời” đang khám phá cách NFT có thể nâng cao trải nghiệm của khách hàng.
                                Điều này có nghĩa là những món quà lưu niệm cuối cùng có thể được phát hành dưới dạng mã hóa, mang lại cho khán 
                                giả những kỷ niệm lâu dài về những khoảnh khắc đặc biệt đã xảy ra trong một buổi biểu diễn.
                                Ticketmaster, một trong những thương hiệu thuộc tập đoàn Live Nation, cũng đang chuẩn bị bắt đầu phát 
                                hành vé dưới dạng NFT - một thứ có thể giúp giảm nạn hàng giả.</p>
                        </div>
                        <blockquote className="block-quote">
                            <h4>Tất cả chúng tôi đã học được từ Top Shot tại NBA. Vì vậy, chúng tôi xem một số khoảnh khắc của buổi hòa nhạc là những khoảnh khắc kỳ diệu mà chúng tôi có thể đúc kết và gắn vào các lễ hội bán vé đang diễn ra.</h4>
                            <div className="author">Michael Rapino</div>
                        </blockquote>
                        <div className="post-content">
                            <p>Tất cả những điều này cho thấy rằng âm nhạc có thể trở thành một trong những trường hợp sử dụng lớn tiếp theo 
                                cho NFT khi sự bùng nổ của thị trường Crypto Art nguội dần.</p>
                        </div>
                    </article>
                    <div className="post-details">
                        <div className="details-left">
                            <div className="wg-title style-2">
                                Nội Dung Phổ Biến
                            </div>
                            <div className="wg-tags style-2">
                                <ul>
                                    <li className="active"><Link to="#">Crypto</Link></li>
                                    <li><Link to="#">Bitcoin</Link></li>
                                    <li><Link to="#">NFT Music</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="details-right">
                            <div className="wg-title style-2">
                                Chia Sẻ Bài Viết
                            </div>
                            <div className="widget-social style-3">
                                <ul>
                                    <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="post-author style-2">
                        <div className="avatar">
                            <img src={avt} alt="Only One" />
                        </div>
                        <div className="content">
                            <h4><Link to="#">Cao Nguyên</Link></h4>
                            <div className="job">Admin</div>
                            <p>Thay vì mò kim trong đống rơm, bạn cứ mua cả đống rơm là được.</p>
                            <div className="widget-social style-4">
                                <ul>
                                    <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="widget item widget-post style-2">
                        <div className="wg-title style-2">
                            Có Thể Bạn Cũng Thích
                        </div>
                        <ul className="post-new">
                            {
                                dataRelated.map((item,index)=> (
                                    <li key={index}>
                                        <div className="post-img">
                                            <img src={item.img} alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <Link to="/blog-details" className="post-date"><i
                                                    className="far fa-calendar-week"></i> {item.time}</Link>
                                            <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="widget item wg-comments">
                        <div className="wg-title">
                            Bình Luận
                        </div>
                        <ul>
                            {
                                dataComment.map((item,index)=>(
                                    <li key={index} className={item.class}>
                                        <div className="post-author">
                                            <div className="avatar">
                                                <img src={item.img} alt="Only One" />
                                            </div>
                                            <div className="content">
                                                <h4><Link to="#">{item.name}</Link></h4>
                                                <div className="job">{item.time}</div>
                                                <p>{item.text}</p>
                                                <Link to="#" className="reply">Trả lời</Link>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="wg-post-comments">
                        <div className="wg-title">
                            Để lại Bình luận
                        </div>
                        <div className="desc">Đừng quên chia sẻ cảm nhận của bạn về nội dung vừa đọc</div>
                        <form action="#" method="GET" acceptCharset="utf-8" className="comment-form form-submit">
                            <div className="text-wrap clearfix">
                                <fieldset className="name-wrap">
                                    <input type="text" id="name" className="tb-my-input" name="name" tabIndex="1"
                                        placeholder="Tên của bạn" size="32" aria-required="true"
                                        required />
                                </fieldset>
                                <fieldset className="email-wrap">
                                    <input type="email" id="email" className="tb-my-input" name="email" tabIndex="2"
                                        placeholder="Địa chỉ Email" size="32"
                                        required />
                                </fieldset>
                            </div>
                            <fieldset className="message-wrap">
                                <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Nội dung bình luận" aria-required="true"></textarea>
                            </fieldset>
                            <button name="submit" type="submit" id="comment-reply"
                                className="sc-button style letter style-2"><span>Bình Luận</span> </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <aside className="side-bar">
                        <div className="widget wg-search">
                            <form action="#" method="get" role="search" className="search-form">
                                <input type="search" className="search-field" placeholder="Tìm kiếm" name="s"
                                    title="Search for" required />
                                <button className="search search-submit" type="submit" title="Tìm kiếm"></button>
                            </form>
                        </div>
                        <div className="widget item wg-category">
                            <div className="wg-title">
                                Danh Mục
                            </div>
                            <ul>
                                {
                                    dataCategory.map((item,index)=> (
                                        <li key={index}><Link to="#"><span>{item.name}</span><span>({item.count})</span></Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="widget item widget-post style-3">
                            <div className="wg-title">
                                Bài Viết Mới
                            </div>
                            <ul className="post-new">
                                {
                                    dataRecent.map((item,index)=> (
                                        <li key={index}>
                                            <div className="post-img">
                                                <img src={item.img} alt="Post New" />
                                            </div>
                                            <div className="post-content">
                                                <Link to="/blog-details" className="post-date"><i
                                                        className="far fa-calendar-week"></i>{item.time}</Link>
                                                <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="widget item wg-tags">
                            <div className="wg-title">
                                Nội Dung Phổ Biến
                            </div>
                            <ul>
                                {
                                    dataTags.map((item,index)=> (
                                        <li key={index} className={item.active}><Link to="#">{item.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
    <Newsletters />
    <Footer />
  </div>;
};

export default BlogDetails;
