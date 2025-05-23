import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import BlogImg from '../../assets/images/construction3.jpg';

const Blogs = () => {
  return (
    <>
         {/* Call Header Component */}
         <Header />

        <main>
            {/* Hero Section Starts*/}
                <Hero heroClass='section-blog' preHeading='Quality. Integrity. Value.' heading='Blogs' text='We excel at transforming visions into reality <br/>
                through outstanding craftsmanship and precise.' />
            {/* Hero Section Ends*/}

            {/* Blogs & News Starts*/}
                <section className='section-6 bg-light py-5'>
                    <div className='container'>
                    <div className='section-header text-center'>
                        <span>Blog & News</span>
                        <h2> Articles & blog posts</h2>
                        <h3>We offer a diverse array of solar energy solutions, spanning residential, commercial, and industrial projects.</h3>
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

export default Blogs