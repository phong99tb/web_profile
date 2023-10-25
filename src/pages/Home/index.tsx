import React from 'react'
// import "../styles.css";
import "flickity/css/flickity.css";


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

    const aboutText = "Xin chào, Tôi là một nhà phát triển phần mềm đam mê với sứ mệnh tạo ra những ứng dụng và giải pháp công nghệ đột phá. Trải qua nhiều năm làm việc trong ngành, tôi đã học hỏi và đóng góp vào nhiều dự án đa dạng, từ ứng dụng di động đến ứng dụng web và hệ thống phức tạp.Ngoài sự nhiệt tình với công việc, tôi có một niềm đam mê cá nhân đối với bi-a. Chơi bi-a không chỉ là một trò chơi giải trí đơn thuần mà còn là cách tuyệt vời để thể hiện sự tập trung, chiến lược, và sự kiên nhẫn. Đây là hoạt động giúp tôi giảm căng thẳng và kết nối với bạn bè cũng như xây dựng mối quan hệ.Ngoài ra, tôi luôn tự đặt ra những thách thức mới trong việc nắm bắt các xu hướng công nghệ mới. Tôi thích tìm hiểu về những dự án thú vị và liên tục mở cửa sự sáng tạo trong công việc của mình.Rất hân hạnh được kết nối với bạn, học hỏi và chia sẻ kiến thức, cũng như kinh nghiệm về công nghệ và sở thích cá nhân.Cảm ơn bạn đã ghé thăm trang của tôi!"
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
                    <div style={{ width: "50%" }}>
                        <div style={{ marginTop: "100px" }}>
                            <p style={{ fontSize: "48px", fontWeight: 700 }}>Hello, I'm Nguyen Trung Phong</p>
                            <p>I'm a Coder</p>
                            <button className='button' style={{ margin: "20px 0" }}>Download CV</button>
                        </div>
                    </div>
                    <div style={{ width: "50%" }} >
                        <p>IMAGE</p>
                    </div>
                </div>
                <div className='aboutMe'>
                    <div style={{ width: "30%" }}>IMAGE</div>
                    <div style={{ width: "70%" }}>
                        <p className='title'>About Me</p>
                        <p className='aboutText'>{aboutText}</p>
                        <p style={{ fontSize: "20px", fontWeight: 700 }}>Basic Info</p>
                        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
                            {
                                info?.map((item: any, index: number) => {
                                    return (
                                        <div style={{ display: "flex", width: "50%", marginTop: "10px" }}>
                                            <div style={{ width: "120px" }}>{item.name}: </div>
                                            <div>{item.value}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='my-portfolio'>
                    <p className='title' style={{padding:"120px 0 20px"}}>My Portfolio</p>
                    <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className='portfolio-img'>
                        <div className='portfolio-img-item'>img</div>
                        <div className='portfolio-img-item'>img</div>
                        <div className='portfolio-img-item'>img</div>
                        <div className='portfolio-img-item'>img</div>
                        <div className='portfolio-img-item'>img</div>
                        <div className='portfolio-img-item'>img</div>
                    </div>
                </div>
                <div className='line'>
                    <div className='line-view'>
                        <div className='line-view-item'>
                            <div>img</div>
                            <div className='line-title'>800+</div>
                            <div className='line-description'>Projects Completed</div>
                        </div>
                        <div className='line-view-item'>
                            <div>img</div>
                            <div className='line-title'>524</div>
                            <div className='line-description'>Happy clients</div>
                        </div>
                        <div className='line-view-item'>
                            <div>img</div>
                            <div className='line-title'>654</div>
                            <div className='line-description'>Cup of Tea</div>
                        </div>
                        <div className='line-view-item'>
                            <div>img</div>
                            <div className='line-title'>225</div>
                            <div className='line-description'>Awards Won</div>
                        </div>
                    </div>
                </div>
                <div className='experience'>
                    <p className='title' style={{padding:"120px 0 20px"}}>Work Experiences</p>
                    <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className='experience-view'>
                        <div className='experience-item'>
                            <p className='experience-title'>UI/UX Designer</p>
                            <p className='experience-title-extra'>
                                <span className='experience-year'>2002-2006</span> Adobe Inc.
                            </p>
                            <p className='experience-title-descriptions'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className='experience-item'>
                            <p className='experience-title'>UI/UX Designer</p>
                            <p className='experience-title-extra'>
                                <span className='experience-year'>2002-2006</span> Adobe Inc.
                            </p>
                            <p className='experience-title-descriptions'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className='experience-item'>
                            <p className='experience-title'>UI/UX Designer</p>
                            <p className='experience-title-extra'>
                                <span className='experience-year'>2002-2006</span> Adobe Inc.
                            </p>
                            <p className='experience-title-descriptions'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        </div>
                    </div>
                </div>
                <div className='reportSlider'>
                    <p className='title' style={{padding:"120px 0 20px"}}>Clients Testimonials</p>
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
                    <p className='title' style={{padding:"120px 0 20px"}}>My Letest Blog</p>
                    <p className='textDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    <div className='blog-view'>
                        <div className='blog-item'>
                            <p className='blog-img'>img</p>
                            <div className='blog-content'>
                                <p className='blog-position'>UI/UX Design</p>
                                <p className='blog-title'>Look Up At The Innovative Ways Team Work</p>
                                <p className='blog-calendar'>April 14, 20182</p>
                                <p className='blog-description'>If you are going to use a passage of Lorem Ipsum, 
                                you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                <p className='link'>Read more</p>
                            </div>
                        </div>
                        <div className='blog-item'>
                            <p className='blog-img'>img</p>
                            <div className='blog-content'>
                                <p className='blog-position'>UI/UX Design</p>
                                <p className='blog-title'>Look Up At The Innovative Ways Team Work</p>
                                <p className='blog-calendar'>April 14, 20182</p>
                                <p className='blog-description'>If you are going to use a passage of Lorem Ipsum, 
                                you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                <p className='link'>Read more</p>
                            </div>
                        </div>
                        <div className='blog-item'>
                            <p className='blog-img'>img</p>
                            <div className='blog-content'>
                                <p className='blog-position'>UI/UX Design</p>
                                <p className='blog-title'>Look Up At The Innovative Ways Team Work</p>
                                <p className='blog-calendar'>April 14, 20182</p>
                                <p className='blog-description'>If you are going to use a passage of Lorem Ipsum, 
                                you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                <p className='link'>Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact'>
                    <p style={{fontSize:"38px", fontWeight:"bold" }}>Contact Me</p>
                    <div>
                        <input />
                        <input />
                        <input />
                        <textarea />
                    </div>
                    <div>
                        <div>Map</div>
                        <div>Map</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index