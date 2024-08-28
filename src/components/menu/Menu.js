import React from 'react'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import './menu.styles.css'

const Menu = () => {
  return (

    <div>
      <div className='container'>
        <h2 id='h2a'>SPECIAL DRINKS</h2>
        <div className='row'>

            <div className='col-md-4'>         
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" id='menuimg' src={img5} alt="..."/>
               <div class="card-body" >
                <h3 id='menu'>Mojito</h3>
             {/* <p class="card-text">MRP :₹ 75</p> */}
             <a href='menu'><button type="button" class="btn btn-warning">More Items</button></a>
              </div>
            </div>
         </div>

         <div className='col-md-4'>      
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" id='menuimg' src={img6} alt="..."/>
               <div class="card-body" >
               <h3 id='menu'>Fresh Juice</h3>
             {/* <p class="card-text">MRP :₹ 75</p> */}
             <button type="button" class="btn btn-warning">More Items</button>
              </div>
            </div>
         </div>

         <div className='col-md-4'>  
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" id='menuimg' src={img7} alt="..."/>
               <div class="card-body" >
               <h3 id='menu'>Milkshakes</h3>
             {/* <p class="card-text">MRP :₹ 75</p> */}
             <button type="button" class="btn btn-warning">More Items</button>
              </div>
            </div>
         </div>

        </div>

          <h2 id='h2a'>DESSERT ITEMS</h2>
        <div className='row'>

           <div className='col-md-4'>         
               <div class="card text-center " id='card-main' >
                <img class="card-img-top" id='menuimg' src={img8} alt="..."/>
                 <div class="card-body">
                 <h3 id='menu'>Cakes</h3>
                {/* <p class="card-text">MRP :₹ 75</p> */}
                <button type="button" class="btn btn-warning">More Items</button>
           </div>
         </div>
        </div>

<           div className='col-md-4'>      
           <div class="card text-center"id='card-main' >
           <img class="card-img-top" id='menuimg' src={img9} alt="..."/>
          <div class="card-body" > 
          <h3 id='menu'>Puddings</h3>
         {/* <p class="card-text">MRP :₹ 75</p> */}
         <button type="button" class="btn btn-warning">More Items</button>
        </div>
       </div>
      </div>

       <div className='col-md-4'>  
       <div class="card text-center" id='card-main'>
        <img class="card-img-top" id='menuimg' src={img10} alt="..."/>
      <div class="card-body" >
      <h3 id='menu'>Cup Cakes</h3>
       {/* <p class="card-text">MRP :₹ 75</p> */}
       <button type="button" class="btn btn-warning">More Items</button>
      </div>
    </div>
     </div>

     </div>

      </div>
    </div>
  )
}

export default Menu