"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import c1 from '../../../public/picture/c7.jpg'
import c3 from '../../../public/picture/c3.jpg'
import c4 from '../../../public/picture/c4.jpg'
import c5 from '../../../public/picture/c5.jpg'
import c6 from '../../../public/picture/c6.jpg'

import Image from 'next/image';

const SwiperComponent = () => {
    return (
        <>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper gap-7"
      >
        <SwiperSlide><div className='border border-gray-200'> <Image src={c1} alt='t1'></Image></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-200'> <Image src={c3} alt='t1'></Image></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-200'> <Image src={c4} alt='t1'></Image></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-200'> <Image src={c5} alt='t1'></Image></div></SwiperSlide>
       
        <SwiperSlide><div className='border border-gray-200'> <Image src={c6} alt='t1'></Image></div></SwiperSlide>
       
        
        
      </Swiper>
        </>
    );
};

export default SwiperComponent;