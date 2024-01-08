import { useState } from 'react'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
function App() {
    return (
      <>
      <h1 className='homeTitle'>Bailey Buffkin & Jayden Alimonda's Wedding site</h1>
      <div className='homeBodyContainer'>
      <img src={image1} className='image1' />
      <p className='bodyText1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum a modi nulla sit recusandae corrupti veritatis odit alias fugiat? Harum ex aliquam labore possimus vel! Corporis perspiciatis veritatis voluptas corrupti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsam harum modi, mollitia natus aut voluptatem neque minus cupiditate? Facere voluptatem molestias laudantium ratione perferendis iusto at vero, nesciunt nemo!</p>
      <p className='bodyText2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste suscipit recusandae perferendis ducimus corrupti pariatur vitae consequatur quae dolorum voluptate dolorem maiores, inventore incidunt nemo? Illo dicta quis veniam distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam cupiditate quidem eligendi. Ab similique ex impedit nihil sapiente voluptate deserunt nemo! Eligendi assumenda reiciendis, quam id voluptatum quaerat provident?</p>
      <img src={image2} alt="" />
      </div>
      </>
    )
  }
  
  export default App