import React, { useState, useEffect, useCallback } from 'react';
import { Carousel, Image, Button } from 'antd';
import 'antd/dist/antd.css';
import {
  LeftCircleOutlined,
  PrinterFilled,
  RightCircleOutlined,
} from '@ant-design/icons';
import styles from './HomeCarousel.module.css';
import CardHighlight from '../Cards/CardHighlight';
import next from 'next';

const HomeCarousel = (props) => {
  const [buttonDisableState, setButtonDisableState] = useState(false);
  const mycarousel = React.createRef();

  // useCallback((mycarousel) => {
  //   console.log(mycarousel);
  // });

  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // className: 'center',
          // centerMode: true,
          infinite: true,
          // centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    mycarousel.current.next();
  };

  const previous = () => {
    mycarousel.current.prev();
  };

  useEffect(() => {
    let currentSlide = mycarousel.current.innerSlider.state.currentSlide;
    if (currentSlide == '0') {
      setButtonDisableState(true);
    }
  }, [buttonDisableState]);

  return (
    <div className={styles.homeCarousel}>
      <div className={styles.carouselControllers}>
        <Button
          type='primary'
          shape='circle'
          // disabled={buttonDisableState}
          size='large'
          icon={
            <LeftCircleOutlined
              className={styles.slickPrev}
              onClick={previous}
            />
          }
        />
        <Button
          type='primary'
          shape='circle'
          // disabled={buttonDisableState}
          size='large'
          icon={
            <RightCircleOutlined className={styles.slickNext} onClick={next} />
          }
        />
      </div>

      <Carousel ref={mycarousel} {...settings}>
        <div className={styles.carouselCards}>
          <CardHighlight
            width='100%'
            height='305px'
            contentPaddingLeft='2rem'
            contentWidth='80%'
            contentBottom='15%'
            titleFontSize='20px'
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Distributing Coimbra’s End of the Year Live Event to the Portuguese Audience with a Custom OTT Platform'
          />
        </div>
        <div className={styles.carouselCards}>
          <CardHighlight
            width='100%'
            height='305px'
            contentPaddingLeft='2rem'
            contentWidth='80%'
            contentBottom='15%'
            titleFontSize='20px'
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Distributing Coimbra’s End of the Year Live Event to the Portuguese Audience with a Custom OTT Platform'
          />
        </div>
        <div className={styles.carouselCards}>
          <CardHighlight
            width='100%'
            height='305px'
            contentPaddingLeft='2rem'
            contentWidth='80%'
            contentBottom='15%'
            titleFontSize='20px'
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Distributing Coimbra’s End of the Year Live Event to the Portuguese Audience with a Custom OTT Platform'
          />
        </div>
        <div className={styles.carouselCards}>
          <CardHighlight
            width='100%'
            height='305px'
            paddingLeft='2rem'
            contentWidth='80%'
            contentBottom='15%'
            titleFontSize='20px'
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Distributing Coimbra’s End of the Year Live Event to the Portuguese Audience with a Custom OTT Platform'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
