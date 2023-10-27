import React from 'react'
// import "../styles.css";
import "flickity/css/flickity.css";
import { Col, Row } from 'antd';
import GoogleMapReact from 'google-map-react';



const index = () => {
    const Flickity = require('react-flickity-component');
    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
        autoPlay: true,
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true,
    }

    const defaultProps = {
        center: {
            lat: 20.982288211556213,
            lng: 105.80079327586691
        },
        zoom: 20
    };
    const AnyReactComponent = ({ text }: any) => <div>{text}</div>;


    const aboutText = "Xin chào, tôi là một nhà phát triển phần mềm đam mê với sứ mệnh tạo ra những ứng dụng và giải pháp công nghệ đột phá. Trải qua nhiều năm làm việc trong ngành, tôi đã học hỏi và đóng góp vào nhiều dự án đa dạng, từ ứng dụng di động đến ứng dụng web và hệ thống phức tạp. Ngoài sự nhiệt tình với công việc, tôi có một niềm đam mê cá nhân đối với bi-a. Chơi bi-a không chỉ là một trò chơi giải trí đơn thuần mà còn là cách tuyệt vời để thể hiện sự tập trung, chiến lược, và sự kiên nhẫn. Đây là hoạt động giúp tôi giảm căng thẳng và kết nối với bạn bè cũng như xây dựng mối quan hệ. Ngoài ra, tôi luôn tự đặt ra những thách thức mới trong việc nắm bắt các xu hướng công nghệ mới. Tôi thích tìm hiểu về những dự án thú vị và liên tục mở cửa sự sáng tạo trong công việc của mình. Rất hân hạnh được kết nối với bạn, học hỏi và chia sẻ kiến thức, cũng như kinh nghiệm về công nghệ và sở thích cá nhân. Cảm ơn bạn đã ghé thăm trang của tôi!"
    let info = [
        {
            name: "Date of birth",
            value: "10/08/1999"
        },
        {
            name: "Email",
            value: "Phong99tb@gmail.com"
        },
        {
            name: "Website",
            value: ""
        },
        {
            name: "Phone No",
            value: "+(84) 967810899"
        },
        {
            name: "Address",
            value: "Trieu Khuc - Thanh Xuan - Ha Noi"
        },
        {
            name: "Freelance",
            value: "Available"
        },
    ]

    return (
        <div className='container'>
            <div className='content'>
                <div className='infoHome'>
                    <div style={{ width: "100%" }}>
                        <div style={{ margin: "30px 0"}}>
                            <p className='text--hello'>Xin chào, tôi là Nguyễn Trung Phong</p>
                            <p>Lập trình viên Frontend</p>
                            <button className='button' style={{ margin: "20px 0" }}>Download CV</button>
                        </div>
                    </div>
                </div>
                <div className='aboutMe'>
                    <Row gutter={30}>
                        <Col lg={8} span={24}>
                            <img src={'https://bom.so/is58zc'} className='about__img' alt='avatar' />
                        </Col>
                        <Col lg={16} span={24}>
                            <p className='title'>About Me</p>
                            <p className='aboutText'>{aboutText}</p>
                            <p style={{ fontSize: "20px", fontWeight: 700 }}>Basic Info</p>
                            <Row gutter={[16,6]}>
                                {
                                    info?.map((item: any) => {
                                        return (
                                            <Col lg={12} span={24} >
                                                <div key={item} style={{ display: "flex" }} >
                                                    <div style={{ width: "120px" }}>{item.name}: </div>
                                                    <div>{item.value}</div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className='my-portfolio'>
                    <p className='title title--content' >My Portfolio</p>
                    <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    <Row gutter={[16, 16]}>
                        <Col lg={8} span={24} >
                            <div style={{ overflow: "hidden" }}>
                                <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                            </div>
                        </Col>
                        <Col lg={8} span={24} >
                            <div style={{ overflow: "hidden" }}>
                                <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                            </div>
                        </Col>
                        <Col lg={8} span={24} >
                            <div style={{ overflow: "hidden" }}>
                                <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                            </div>
                        </Col>
                        <Col lg={8} span={24} >
                            <div style={{ overflow: "hidden" }}>
                                <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                            </div>
                        </Col>
                        <Col lg={8} span={24} >
                            <div style={{ overflow: "hidden" }}>
                                <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                            </div>
                        </Col>
                        <Col lg={8} span={24} >
                            <div style={{ overflow: "hidden" }}>
                                <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                            </div>
                        </Col>

                    </Row>
                </div>
                <div className='line'>
                    <Row gutter={16}>
                        <Col sm={12} xs={24} lg={6}>
                            <div className='line-view-item'>
                                <div>img</div>
                                <div className='line-title'>800+</div>
                                <div className='line-description'>Projects Completed</div>
                            </div>
                        </Col>
                        <Col sm={12} xs={24} lg={6}>
                            <div className='line-view-item'>
                                <div>img</div>
                                <div className='line-title'>524</div>
                                <div className='line-description'>Happy clients</div>
                            </div>
                        </Col>
                        <Col sm={12} xs={24} lg={6}>
                            <div className='line-view-item'>
                                <div>img</div>
                                <div className='line-title'>654</div>
                                <div className='line-description'>Cup of Tea</div>
                            </div>
                        </Col>
                        <Col sm={12} xs={24} lg={6}>
                            <div className='line-view-item'>
                                <div>img</div>
                                <div className='line-title'>225</div>
                                <div className='line-description'>Awards Won</div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='experience'>
                    <p className='title title--content'>Work Experiences</p>
                    <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    <Row gutter={16}>
                        <Col span={24} lg={8}>
                            <div className='experience-item'>
                                <p className='experience-title'>UI/UX Designer</p>
                                <p className='experience-title-extra'>
                                    <span className='experience-year'>2002-2006</span> Adobe Inc.
                                </p>
                                <p className='experience-title-descriptions'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            </div>
                        </Col>
                        <Col span={24} lg={8}>
                            <div className='experience-item'>
                                <p className='experience-title'>UI/UX Designer</p>
                                <p className='experience-title-extra'>
                                    <span className='experience-year'>2002-2006</span> Adobe Inc.
                                </p>
                                <p className='experience-title-descriptions'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            </div>
                        </Col>
                        <Col span={24} lg={8}>
                            <div className='experience-item'>
                                <p className='experience-title'>UI/UX Designer</p>
                                <p className='experience-title-extra'>
                                    <span className='experience-year'>2002-2006</span> Adobe Inc.
                                </p>
                                <p className='experience-title-descriptions'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='reportSlider'>
                    <p className='title title--content'>Clients Testimonials</p>
                    <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    <Flickity
                        className={'carousel'}
                        elementType={'div'}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate
                        static
                    >
                        <div className='reportSliderView'>
                            <div className='reportSliderInfo'>
                                <img className='reportSliderImage' src="https://hinhanhdephd.com/wp-content/uploads/2019/05/hinh-anh-dep-lam-hinh-nen-dep-2.jpg" />
                                <div>
                                    <p>Name</p>
                                    <p>chuc danh</p>
                                </div>
                            </div>
                            <p className='reportSliderDesciption'>Thông tin</p>
                        </div>
                        <div className='reportSliderView'>
                            <div className='reportSliderInfo'>
                                <img className='reportSliderImage' src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-19.jpg" />
                                <div>
                                    <p>Name</p>
                                    <p>chuc danh</p>
                                </div>
                            </div>
                            <p className='reportSliderDesciption'>Thông tin</p>
                        </div>
                        <div className='reportSliderView'>
                            <div className='reportSliderInfo'>
                                <img className='reportSliderImage' src="https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg" />
                                <div>
                                    <p>Name</p>
                                    <p>chuc danh</p>
                                </div>
                            </div>
                            <p className='reportSliderDesciption'>Thông tin</p>
                        </div>
                        <div className='reportSliderView'>
                            <div className='reportSliderInfo'>
                                <img className='reportSliderImage' src="https://1.bp.blogspot.com/-bsdv2QpcnCk/UkQUxQNDa7I/AAAAAAAAAkE/W-KXpvYxyHA/s1600/anh-dep-hinh-nen-thien-nhien-20.jpg" />
                                <div>
                                    <p>Name</p>
                                    <p>chuc danh</p>
                                </div>
                            </div>
                            <p className='reportSliderDesciption'>Thông tin</p>
                        </div>
                    </Flickity>
                </div>
                <div className='blog'>
                    <p className='title title--content' >My Letest Blog</p>
                    <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    <Row gutter={16}>
                        <Col span={24} lg={8}>
                            <div className='blog-item'>
                                <div style={{ overflow: "hidden" }}>
                                    <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                                </div>
                                <div className='blog-content'>
                                    <p className='blog-position'>UI/UX Design</p>
                                    <p className='blog-title'>Look Up At The Innovative Ways Team Work</p>
                                    <p className='blog-calendar'>April 14, 20182</p>
                                    <p className='blog-description'>If you are going to use a passage of Lorem Ipsum,
                                        you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    <p className='link'>Read more</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={8}>
                            <div className='blog-item'>
                                <div style={{ overflow: "hidden" }}>
                                    <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                                </div>
                                <div className='blog-content'>
                                    <p className='blog-position'>UI/UX Design</p>
                                    <p className='blog-title'>Look Up At The Innovative Ways Team Work</p>
                                    <p className='blog-calendar'>April 14, 20182</p>
                                    <p className='blog-description'>If you are going to use a passage of Lorem Ipsum,
                                        you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    <p className='link'>Read more</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={8}>
                            <div className='blog-item'>
                                <div style={{ overflow: "hidden" }}>
                                    <img src='https://bom.so/Z9xJCY' alt='anh dep' className='portfolio__img' />
                                </div>
                                <div className='blog-content'>
                                    <p className='blog-position'>UI/UX Design</p>
                                    <p className='blog-title'>Look Up At The Innovative Ways Team Work</p>
                                    <p className='blog-calendar'>April 14, 20182</p>
                                    <p className='blog-description'>If you are going to use a passage of Lorem Ipsum,
                                        you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    <p className='link'>Read more</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{ marginBottom: "150px" }} className='title--content'>
                    <Row gutter={16} >
                        <Col lg={12} span={24} className='flex--column'>
                            <p style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "40px" }}>Contact Me</p>
                            <input className='input input--noBorder' placeholder='Enter Name *' />
                            <input className='input input--noBorder' placeholder='Enter Email *' />
                            <input className='input input--noBorder' placeholder='Enter Subject' />
                            <textarea className='input input--noBorder input--textarea' placeholder='Message *' />
                            <div>
                                <button className='button'>Submit</button>
                            </div>
                        </Col>
                        <Col lg={12} span={24}>
                            <div className='google--map'>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                    yesIWantToUseGoogleMapApiInternals
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default index