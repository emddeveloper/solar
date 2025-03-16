import React from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import About from '../common/About';
import ServiceImg from '../../assets/images/construction1.jpg';
import ProjectImg from '../../assets/images/construction2.jpg';
import BlogImg from '../../assets/images/construction3.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import AvatarImg from '../../assets/images/author-2.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { HeroSlider } from '../common/HeroSlider';

const home = () => {
  return (
    <>
      {/* Call Header Component */}
      <Header />

      <main>
        {/* Hero Slider Starts*/}
          <HeroSlider />
        {/* Hero Slider Ends*/}

        {/* About-us Section Starts*/}
          <About />
        {/* About-us Section Ends*/}

        {/* Our Services Starts*/}
        <section className='section-3 bg-light py-5'>
          <div className='container-fluid py-5'>
            <div className='section-header text-center'>
              <span>our services</span>
              <h2>From Consultation to Installation</h2>
              <p>We offer customized Solar Solutions for Every Need, Spanning Residential, Commercial, and Industrial Projects.</p>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Residential Solar solutions</h3>
                    </div>
                    <div className='service-content'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem nemo ab ut repellendus perspiciatis. Sapiente dolor est veritatis beatae ea nihil omnis, officiis minima maxime itaque ad. Fuga, velit.</p>
                    </div>
                    <a href='/services/residential' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Commercial Solar solutions</h3>
                    </div>
                    <div className='service-content'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio aspernatur temporibus sit sequi deserunt magni, officia ad iusto repellendus libero ut quo id repudiandae quam sed debitis dolore dolorum.</p>
                    </div>
                    <a href='/services/commercial' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Solar system maintenance & troubleshooting</h3>
                    </div>
                    <div className='service-content'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odit, debitis ut labore quia ab! Eos esse laborum tempore fugiat sed harum, ab eligendi in tenetur? Distinctio tenetur asperiores eligendi!</p>
                    </div>
                    <a href='/services/maintenance' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Solar Inverters and controllers servicing</h3>
                    </div>
                    <div className='service-content'>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium exercitationem dignissimos inventore iusto, sed culpa. Sint vero ut quaerat assumenda mollitia, accusamus, accusantium commodi dicta, nostrum sequi tempore voluptates.</p>
                    </div>
                    <a href='/services/inverters' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Services Ends*/}

        {/* Why Choose-us Starts*/}
        <section className='section-4 py-5'>
          <div className='container py-5'>
          <div className='section-header text-center'>
              <span>Wy Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,<br/>
              decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
            </div>
            <div className='row pt-4'>
              <div className='col-md-4'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon1} alt='' />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                  Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                  </p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon2} alt='' />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                  Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                  </p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon3} alt='' />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Cutting-Edge Solutions</h3>
                  </div>
                  <p>
                  Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose-us Ends*/}

        {/* Our Projects Starts*/}
        <section className='section-3 bg-light py-5'>
          <div className='container-fluid py-5'>
            <div className='section-header text-center'>
              <span>our projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    <a href='#' className='btn btn-primary'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ProjectImg} alt='' className='w-100' />
                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Projects</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques. Unlike general construction</p>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Projects Ends*/}

        {/* Testimonials Starts*/}
        <section className='section-5 py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Testimonials</span>
              <h2>What people are saying about us</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <Swiper
              modules={[ Pagination ]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-5'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <div className='content pt-4 pb-2'>
                      <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae officiis tenetur minima similique aliquid dicta facilis sequi vero, beatae inventore natus eveniet possimus quas quae nemo! Laudantium, id veritatis.
                      </p>
                    </div>
                    <hr/>
                    <div className='d-flex meta'>
                      <div>
                        <img src={AvatarImg} alt='' width={50} />
                      </div>
                      <div className='ps-3'>
                        <div className='name'>John Doe</div>
                        <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* Testimonials Ends*/}

        {/* Blogs & News Starts*/}
        <section className='section-6 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Blog & News</span>
              <h2> Articles & blog posts</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-3'>
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={BlogImg} alt='' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Dummy blog title</a>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div> 
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={BlogImg} alt='' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Dummy blog title</a>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div> 
              <div className='col-md-4'>
                <div className='card shadow border-0'>
                  <div className='card-img-top'>
                    <img src={BlogImg} alt='' className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Dummy blog title</a>
                    </div>
                    <a href='#' className='btn btn-primary small'>Read More</a>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </section>
        {/* Blogs & News Ends*/}

      </main>

      {/* Call Footer Component*/}
      <Footer />
    </>
  )
}

export default home