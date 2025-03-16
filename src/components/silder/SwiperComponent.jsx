"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import c1 from '../../../public/picture/c7.jpg'
import c3 from '../../../public/picture/c3.jpg'
import c4 from '../../../public/picture/c4.jpg'
import c5 from '../../../public/picture/c5.jpg'
import c6 from '../../../public/picture/c6.jpg'

import Image from 'next/image';
import CustomButton from '../shared/CustomButton';

const SwiperComponent = () => {
    return (
        <>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper  gap-7"
      >
        <SwiperSlide><div className='relative group  overflow-hidden  shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-[#F9F51A] hover:border-2 hover:border-[#F9F51A] hover:shadow-2xl'> 
          <Image src={c1} alt='t1'
          
          className="transform group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50"
           >
          </Image>
          <div className='absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center'>
          <div className="flex justify-center my-5">
          <CustomButton title={'Use Template'}/>
           </div>
           
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative group  overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:border-2 hover:border-[#F9F51A]  hover:shadow-[#F9F51A]  hover:shadow-2xl'> 
          <Image src={c3} alt='t1'
          
          className="transform group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50"
           >
          </Image>
          <div className='absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center'>
          <div className="flex justify-center my-5">
          <CustomButton title={'Use Template'}/>
           </div>
           
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative group  overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out  hover:border-2 hover:border-[#F9F51A] hover:shadow-[#F9F51A]  hover:shadow-2xl'> 
          <Image src={c4} alt='t1'
          
          className="transform group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50"
           >
          </Image>
          <div className='absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center'>
          <div className="flex justify-center my-5">
          <CustomButton title={'Use Template'}/>
           </div>
           
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative group  overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:border-2 hover:border-[#F9F51A]  hover:shadow-[#F9F51A]  hover:shadow-2xl'> 
          <Image src={c5} alt='t1'
          
          className="transform group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50"
           >
          </Image>
          <div className='absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center'>
          <div className="flex justify-center my-5">
          <CustomButton title={'Use Template'}/>
           </div>
           
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative group  overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:border-2 hover:border-[#F9F51A]  hover:shadow-[#F9F51A]  hover:shadow-2xl'> 
          <Image src={c6} alt='t1'
          
          className="transform group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50"
           >
          </Image>
          <div className='absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center'>
          <div className="flex justify-center my-5">
          <CustomButton title={'Use Template'}/>
           </div>
           
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='relative group  overflow-hidden shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:border-2 hover:border-[#F9F51A]  hover:shadow-[#F9F51A]  hover:shadow-2xl'> 
          <Image src={c1} alt='t1'
          
          className="transform group-hover:scale-110 transition-all duration-500 ease-in-out brightness-100 group-hover:brightness-50"
           >
          </Image>
          <div className='absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center'>
          <div className="flex justify-center my-5">
          <CustomButton title={'Use Template'}/>
           </div>
           
          </div>
        </div></SwiperSlide>
       
        
        
      </Swiper>
        </>
    );
};

export default SwiperComponent;