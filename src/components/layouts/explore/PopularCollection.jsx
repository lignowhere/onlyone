import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

const PopularCollection = props => {
    const data = props.data;

    const [visible , setVisible] = useState(8);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }
  return (
    <section className="tf-section trendy-colection-page style-2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="wg-drop-category seclect-box">
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Tất cả</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>Nghệ thuật</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Giải trí</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>NFT từ thiện</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Đồ sưu tầm</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Thể thao</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Loại tập tin</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>Hình ảnh</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Âm thanh</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Video</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Hình thức bán</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>Giá cố định</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Đấu giá trực tiếp</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                <span>Sắp xếp theo</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <span>Niêm yết gần đây</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Sắp kết thúc</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Giá thâp - cao</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Giá cao - thấp</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <span>Bán chạy nhất</span>
                            </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="sc-button style letter style-2"><span>Lọc</span> </button>
                    </div>
                </div>
                {
                    data.slice(0,visible).map((item,index)=> (
                        <div key={index} className='col-lg-4 col-md-6 col-12'>
                            <div className="sc-product-item style-2">
                                    <div className="product-img">
                                        <img src={item.img} alt="Bidzen" />
                                        <Link to="/connect-wallet"
                                            className="sc-button style letter"><span>Đặt Giá</span></Link>
                                        <label>{item.tags}</label>
                                    </div>
                                    <div className="product-content">
                                        <h5 className="title"><Link to="/item-details">{item.title}</Link> </h5>
                                        <div className="product-author flex">
                                            <div className="avatar">
                                                <img src={item.imgAuthor} alt="Bidzen" />
                                            </div>
                                            <div className="infor">
                                                <div className="author-name"><Link to="/creator">{item.name}</Link></div>
                                                <span>Nhà sáng tạo</span>
                                            </div>
                                        </div>
                                        <div className="product-price flex">
                                            <div className="title">Giá Hiện Tại</div>
                                            <div className="price">
                                                <span>{item.price}</span>
                                                <span>= {item.priceChange}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))
                }
                
                {
                    visible < data.length && 
                    <div className="col-md-12">
                        <button id="loadmore" className=" sc-button style letter style-2" onClick={showMoreItems}><span>Explore More</span>
                        </button>
                     </div>
                }
            </div>
        </div>
    </section>
    );
};

export default PopularCollection;
