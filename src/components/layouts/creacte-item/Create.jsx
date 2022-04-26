import React from 'react';
import img from '../../../assets/images/background/img-create-item.jpg'

const Create = () => {
return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Tạo NFT Mới</h3>
                                <p className="desc">Bắt đầu tạo NFT của riêng bạn một cách dễ dàng </p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                <label className="uploadFile">
                                    <span className="filename">Chọn tập tin</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label>
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="Tên NFT" required />
                                    <input name="number" type="text" placeholder="Giá"
                                        required />
                                </div>
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="Kích Thước (nếu có)" required />
                                    <input name="number" type="text" placeholder="Phí Bản Quyền" required />
                                </div>
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="Danh mục" required />
                                    <input name="number" type="text" placeholder="Số Lượng"
                                        required />
                                </div>
                                <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Mô tả" aria-required="true"></textarea>
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="sale" name="fav_language" />
                                        <label htmlFor="sale">Bán Giá Cố Định</label>
                                    </div>
                                    <div className="btn-check">
                                        <input type="radio" id="purchase" name="fav_language" />
                                        <label htmlFor="purchase">
                                        Bán Đấu Giá
                                        </label>
                                    </div>
                                </div>
                                <button name="submit" type="submit" id="submit"
                                    className="sc-button style letter style-2"><span>Tạo NFT</span> </button>
                            </form>
                        </div>
                        <div className="form-background">
                            <img src={img} alt="Bidzen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Create;
