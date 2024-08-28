import React from 'react'
import './service.styles.css'
import img1 from '../services/images/img1.png'
import img2 from '../services/images/img2.png'
import img3 from '../services/images/img3.png'
import img4 from '../services/images/img4.png'



const Services = () => {
  return (
    <div>
        <div className='container'>
         
          
          <h2 id='servicehead'>SERVICES</h2>
          
          <div className='row'>
            <div className='col-md-3'>
                <div class="card" id='main-card'>
                   <img id='iconimg' class="card-img-top" src={img1} alt="..."/>
                   <h5 id='icon-head'>Online Order</h5>
                   <div class="card-body">
                     <p class="card-text">You can order your favorite one here.</p>
                   </div>
                </div>
            </div>


            <div className='col-md-3'>
                 <div class="card" id='main-card'>
                    <img id='iconimg' class="card-img-top" src={img2} alt="..."/>
                    <h5 id='icon-head'>Master Chef </h5>
                    <div class="card-body">
                         <p class="card-text">Expert and experienced chef</p>
                    </div>
                 </div>
            </div>


            <div className='col-md-3'>
                 <div class="card" id='main-card'>
                    <img id='iconimg' class="card-img-top" src={img3} alt="..."/>
                    <h5 id='icon-head'>Quality Food</h5>
                    <div class="card-body">
                         <p class="card-text">We serve quality foods and fresh juices</p>
                    </div>
                 </div>
            </div>


            <div className='col-md-3'>
                 <div class="card" id='main-card'>
                    <img id='iconimg' class="card-img-top" src={img4} alt="..."/>
                    <h5 id='icon-head'>Free Delivery</h5>
                    <div class="card-body">
                        <p class="card-text">Free delivery available near 5kms</p>
                     </div>
                  </div>
              
            </div>


          </div>
        </div>
        <br/><br/>
    
    </div>
  )
}

export default Services