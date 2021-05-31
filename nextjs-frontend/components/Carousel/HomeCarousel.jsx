import React, { useState } from 'react';
import { Carousel, Image } from 'antd';
import 'antd/dist/antd.css';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import next from 'next';

const HomeCarousel = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    // fade: true,
    centerMode: false,
    // centerPadding: '100px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const mycarousel = React.createRef();
  console.log(mycarousel);

  const next = () => {
    mycarousel.current.next();
  };

  const previous = () => {
    mycarousel.current.prev();
  };

  return (
    <div
    // style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   width: '100%',
    //   flexDirection: 'column',
    // }}
    >
      <div
        className='carouselControllers'
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-end',
        }}
      >
        <LeftCircleOutlined className='slick-previous' onClick={previous} />
        <RightCircleOutlined className='slick-next' onClick={next} />
      </div>

      <Carousel ref={mycarousel} {...settings}>
        <div>
          {/* <h3>1</h3> */}
          <Image src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
        </div>
        <div>
          <Image src='https://images.unsplash.com/photo-1536240478700-b869070f9279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80' />
        </div>
        <div>
          <Image src='https://images.unsplash.com/photo-1512024221064-95d1aca6dc81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80' />
        </div>
        <div>
          <Image src='https://images.unsplash.com/photo-1535540878298-a155c6d065ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
