import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Contact from'../../components/contact/Contact'
import img10 from './images/img10.png'
import './menoos.css'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import juice1 from './images/juice1.jpg'
import juice2 from './images/juice2.jpg'
import juice3 from './images/juice3.jpg'
import juice4 from './images/juice4.jpg'
import cake1 from './images/cake1.jpg'
import cake2 from './images/cake2.jpg'
import cake3 from './images/cake3.jpg'
import cake4 from './images/cake4.jpg'

const Menus = () => {
  return (
    <div>
     {/* navbar */}
     <div>
      <Navbar/>
     </div>
     {/* end */}
     {/* gradient */}
     <div className='abt_an'>
        <div className='container-fluid menu-slide'>
          <br/><br/>
          <div className='row' id='menurow'>
            <div className='col-md-6' >
             <h2 id='menu-head'>MENU</h2>
             <p data-aos="fade-right" >Vivamus ut mollis magna, quis consequat erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan quis dui in malesuada. Quisque sit amet luctus mauris. Mauris mattis auctor tortor, in mattis nisl blandit vitae. Quisque porttitor placerat arcu, non dapibus velit porta in. Cras ante sapien, varius sit amet diam ut, pulvinar ultricies risus. Maecenas eu nisl at nisi feugiat efficitur. Integer eros felis, rhoncus sed tincidunt sit amet, semper sed enim. Suspendisse aliquet lacinia lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eu risus eget tortor sagittis volutpat vitae quis elit. Suspendisse blandit posuere elit in eleifend. Nullam nec purus et mauris tincidunt pharetra ac ac ante.</p>
             <p style={{'color':'white','fontFamily':'cursive','paddingTop':'15%','fontSize':'25px'}} ></p>
            </div>
            <div className='col-md-6'>
              <img id='imgmenu' src={img10} alt='...'/>
            </div>
          </div>
        </div>
      </div>
     {/* end */}
    
     {/* milk shakes */}
        <div className='container' id='items' >
        <h2 id='h2a'>MILK SHAKES</h2>
          <div className='row'>
            
            <div className='col-md-3'>         
              <div class="card text-center" id='card-main'>
                   <img class="card-img-top" src={img5} alt="."/>
                   <div class="card-body" id='cardt'>
                       <h5 id='menu'>Choclate shake</h5>
                       <p class="card-text">MRP :₹ 175</p>
                       <button type="button" class="btn btn-warning">Order Now</button>
                   </div>
               </div>
            </div>

            
            <div className='col-md-3'>
            <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={img6} alt=""/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Strawberry Shake</h5>
             <p class="card-text">MRP :₹ 85</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>

            </div>
            <div className='col-md-3'>
            <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={img7} alt=""/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Badam shake</h5>
             <p class="card-text">MRP :₹ 120</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>

            </div>
            <div className='col-md-3'>
            <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={img8} alt=""/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Oreo shakes</h5>
             <p class="card-text">MRP :₹ 90</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
            </div>

          </div>
      

     {/*  */}
    {/* next */}
    <h2 id='h2a'>FRESH JUICES</h2>
        <div className='row'>

            <div className='col-md-3 '>         
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={juice1} alt=".."/>
               <div class="card-body" id='cardt'>
                <h5 id='menu'>Mango Juice</h5>
             <p class="card-text">MRP :₹ 80</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

         <div className='col-md-3'>      
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={juice2} alt=".."/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Strawberry Juice</h5>
             <p class="card-text">MRP :₹ 75</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

         <div className='col-md-3'>      
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={juice3} alt=".."/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Blueberry Juice</h5>
             <p class="card-text">MRP :₹ 65</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

         <div className='col-md-3'>  
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={juice4} alt=".."/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Orange Juice</h5>
             <p class="card-text">MRP :₹ 75</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

        </div>

         
    {/* end */}
    {/* start */}
    <h2 id='h2a'>MOJITO</h2>
        <div className='row'>

           <div className='col-md-3'>         
               <div class="card text-center " id='card-main' >
                <img class="card-img-top" src={img1} alt=".."/>
                 <div class="card-body" id='cardt'>
                 <h5 id='menu'>Strawberry Mojito</h5>
                <p class="card-text">MRP :₹ 75</p>
                <button type="button" class="btn btn-warning">Order Now</button>
           </div>
         </div>
        </div>

<           div className='col-md-3'>      
           <div class="card text-center"id='card-main' >
           <img class="card-img-top" src={img2} alt=".."/>
          <div class="card-body" id='cardt'> 
          <h5 id='menu'>Blueberry Mojito</h5>
         <p class="card-text">MRP :₹ 75</p>
         <button type="button" class="btn btn-warning">Order Now</button>
        </div>
       </div>
      </div>

      <div className='col-md-3'>      
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={img3} alt=""/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Passion Fruit</h5>
             <p class="card-text">MRP :₹ 75</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

       <div className='col-md-3'>  
       <div class="card text-center" id='card-main'>
        <img class="card-img-top" src={img4} alt=".."/>
      <div class="card-body" id='cardt'>
      <h5 id='menu'>Cherry Mojito</h5>
       <p class="card-text">MRP :₹ 75</p>
       <button type="button" class="btn btn-warning">Order Now</button>
      </div>
    </div>
     </div>

     </div>

    {/* end */}
    {/* start */}
    <h2 id='h2a'>CAKES</h2>
        <div className='row'>

            <div className='col-md-3'>         
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={cake1} alt=".."/>
               <div class="card-body" id='cardt'>
                <h5 id='menu'>Strawberry Cake</h5>
             <p class="card-text">MRP :₹ 75</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

         <div className='col-md-3'>      
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={cake2} alt=".."/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Red Velvet</h5>
             <p class="card-text">MRP :₹ 75</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

         <div className='col-md-3'>      
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={cake3} alt=".."/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Bluberry Cake</h5>
             <p class="card-text">MRP :₹ 75</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

         <div className='col-md-3'>  
              <div class="card text-center" id='card-main'>
              <img class="card-img-top" src={cake4} alt=".."/>
               <div class="card-body" id='cardt'>
               <h5 id='menu'>Tiramisu Cake</h5>
             <p class="card-text">MRP :₹ 75</p>
             <button type="button" class="btn btn-warning">Order Now</button>
              </div>
            </div>
         </div>

        </div>

    {/* end */}
    {/* container close */}
    <br/>
    <br/>
    </div>
    <Contact/>
    </div>
  )
}

export default Menus