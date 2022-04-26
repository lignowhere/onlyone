import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const HotCollections = props => {
    const data = props.data;
    return (
    <section className="hot-collections tf-section bg-color-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Nổi Bật</h3>
                                <p className="desc">Bộ sưu tập nổi bật trong ngày hôm nay </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="swiper-container hot-coll">
                        <div className="swiper-wrapper">
                        <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}

                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                },
                            767: {
                                slidesPerView: 4,
                            },
                            991: {
                                slidesPerView: 5,
                            },
                            1300: {
                                slidesPerView: 6,
                                },
                            }}
                        navigation
                        scrollbar={{ draggable: true }}
                        >
                        {
                            data.map((item,index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide">
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src={item.img} alt="Only One" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src={item.avt} alt="Only One" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link to="/creator">{item.name}</Link> </h5>
                                                    <div className="details">{item.position}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};

export default HotCollections;
