import React, { useEffect, useState } from 'react'
import Testimonials from '../Components/Testimonials'
import Carousel from '../Components/Carousel'
import HeroSection from '../Components/HeroSection'
import WorkSection from '../Components/WorkSection';

const Home = () => {

  // testimonial data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async() =>{
    try{
      const res = await fetch('https://akash-akp.github.io/api-test/testimonialReview.js');
      const d = await res.json();
      setData(d);
    }catch(error){
      console.log("api error")
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='bg-lightBgColor dark:bg-gray-700 dark:text-white'>

      <HeroSection />

      <Carousel />

      <WorkSection />

      <div className='py-[50px]'>
        {
            !loading?(<Testimonials data={data.testimonials} />):(<div></div>)
          }
      </div>
      
    </div>
  )
}

export default Home
