import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/icon/icon-1.svg'
import img2 from '../../assets/images/icon/icon-2.svg'
import img3 from '../../assets/images/icon/icon-3.svg'
import img4 from '../../assets/images/icon/icon-4.svg'
import img5 from '../../assets/images/icon/icon-5.svg'
import img6 from '../../assets/images/icon/icon-6.svg'
import img7 from '../../assets/images/icon/icon-7.png'
import img8 from '../../assets/images/icon/icon-8.svg'
import img9 from '../../assets/images/icon/icon-9.svg'

const WalletConnect = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: 'Meta Mask',
                text: 'Kết nối với ví Meta Mask của bạn chỉ với một cú click chuột nhanh chóng',
                class: ''
            },
            {
                img: img2,
                title: 'Bitski',
                text: 'Kết nối với ví Bitski của bạn chỉ với một cú click chuột nhanh chóng',
                class: ''
            },
            {
                img: img3,
                title: 'Fortmatic',
                text: 'Kết nối với ví Bitski của bạn chỉ với một cú click chuột nhanh chóng',
                class: ''
            },
            {
                img: img4,
                title: 'Wallet Connect',
                text: 'Kết nối với ví Wallet Connect của bạn chỉ với một cú click chuột nhanh chóng',
                class: ''
            },
            {
                img: img5,
                title: 'Coinbase Wallet',
                text: 'Kết nối với ví Coinbase Wallet của bạn chỉ với một cú click chuột nhanh chóng',
                class: ''
            },
            {
                img: img6,
                title: 'Authereum',
                text: 'Kết nối với ví Authereum của bạn chỉ với một cú click chuột nhanh chóng',
                class: ''
            },
            {
                img: img7,
                title: 'kaikas',
                text: 'Kết nối với ví kaikas của bạn chỉ với một cú click chuột nhanh chóng',
                class: 'mg-bt-0'
            },
            {
                img: img8,
                title: 'Torus',
                text: 'Kết nối với ví Torus của bạn chỉ với một cú click chuột nhanh chóng',
                class: 'mg-bt-0'
            },
            {
                img: img9,
                title: 'Bitcoin',
                text: 'Kết nối với ví Bitcoin của bạn chỉ với một cú click chuột nhanh chóng',
                class: 'mg-bt-0'
            },
        ]
    )
return (
    <section className="tf-section connect-wallet">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading">
                        <h3>Kết Nối Ví</h3>
                        <p className="desc">Chúng tôi hỗ trợ hầu hết các ví Crypto phổ biến hiện nay </p>
                    </div>
                </div>
                {
                    data.map((item,index)=> (
                        <div key={index} className="col-lg-4 col-md-4">
                            <div className={`sc-wallet ${item.class}`}>
                                <div className="icon">
                                    <img src={item.img} alt="Only One" />
                                </div>
                                <div className="content">
                                    <h4><Link to="/login">{item.title}</Link></h4>
                                    <p>{item.text}</p>
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

export default WalletConnect;
