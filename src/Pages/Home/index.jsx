import React from 'react'
import CardCategory from '../../components/CardCategory';
import CardRecommend from '../../components/CardRecommend';
import CarouselComponent from "../../components/Carousel";

function Home() {
  return (
    <div>
      <CarouselComponent/>
      <CardCategory/>
      <CardRecommend />
    </div>
  )
}

export default Home;
