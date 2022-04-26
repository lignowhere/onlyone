import React from 'react';
import img from '../../../assets/images/background/img-newletter.png'

export const Newsletters = () => {
  return (
    <section className="new-letter bg-color-4">
        <div className="container">
            <div className="new-letter-inner flex bg-color-5">
                <div className="new-letter-content">
                    <h3 className="heading">Bản tin</h3>
                    <p className="sub-heading">Nhận thông tin về các sản phẩm NFT mới và các đợt giảm giá </p>
                    <div className="form-subcribe">
                        <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8"
                            className="form-submit">
                            <input name="email" className="email" type="email"
                                placeholder="Địa Chỉ Email Của Bạn" required />
                            <button name="submit" type="submit" id="submit"
                                className="sc-button style letter style-2"><span>Đăng Ký</span> </button>
                        </form>
                    </div>
                </div>
                <div className="new-letter-img">
                    <img src={img} alt="Only One" />
                </div>
            </div>
        </div>
    </section>
    );
};
