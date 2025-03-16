import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import ProjectImg from '../../assets/images/construction2.jpg';

const Projects = () => {
  return (
    <>
        {/* Call Header Component */}
        <Header />

        <main>
            {/* Hero Section Starts*/}
                <Hero heroClass='section-projects' preHeading='Quality. Integrity. Value.' heading='Our Projects' text='We excel at transforming visions into reality <br/>
                through outstanding craftsmanship and precise.' />
            {/* Hero Section Ends*/}

            {/* Our Projects Starts*/}
                <section className='section-3 bg-light py-5'>
                    <div className='container py-5'>
                    <div className='section-header text-center'>
                        <span>our projects</span>
                        <h2>Discover our diverse range of projects</h2>
                        <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-4 col-lg-4'>
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
                        <div className='col-md-4 col-lg-4'>
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
                        <div className='col-md-4 col-lg-4'>
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
                        <div className='col-md-4 col-lg-4'>
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
                        <div className='col-md-4 col-lg-4'>
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
                        <div className='col-md-4 col-lg-4'>
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
        </main>

        {/* Call Footer Component*/}
        <Footer />
    </>
  )
}

export default Projects