import React, { useState } from 'react';
import { Carousel, Image } from 'antd';
import 'antd/dist/antd.css';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import styles from './HomeCarousel.module.css';
import CardHighlight from '../Cards/CardHighlight';
import next from 'next';

const HomeCarousel = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const mycarousel = React.createRef();

  const next = () => {
    mycarousel.current.next();
  };
  const previous = () => {
    mycarousel.current.prev();
  };

  return (
    <div className={styles.homeCarousel}>
      <div className={styles.carouselControllers}>
        <LeftCircleOutlined className={styles.slickPrev} onClick={previous} />
        <RightCircleOutlined className={styles.slickNext} onClick={next} />
      </div>

      <Carousel ref={mycarousel} {...settings}>
        <div className={styles.carouselCards}>
          <CardHighlight
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Scripted TV Productions can Afford no Downtime'
            labelText='White Paper'
          />
        </div>
        <div className={styles.carouselCards}>
          <CardHighlight
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Scripted TV Productions can Afford no Downtime'
            labelText='White Paper'
          />
        </div>
        <div className={styles.carouselCards}>
          <CardHighlight
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Scripted TV Productions can Afford no Downtime'
            labelText='White Paper'
          />
        </div>
        <div className={styles.carouselCards}>
          <CardHighlight
            image={
              'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
            }
            title='Scripted TV Productions can Afford no Downtime'
            labelText='White Paper'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
