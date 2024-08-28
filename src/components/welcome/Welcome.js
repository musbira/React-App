import React from 'react'
import img4 from './images/img4.png'
import './welcome.styles.css'



const Welcome = () => {
  return (
    <div>
        <div className='container'>
            <div className='row' id='welcome'>
                <div className='col-md-6'>
                    <img id="img4"  src={img4} alt='...' ></img>
                </div>
                <div className='col-md-6 p-5 text-center' id='fresh'>
                 <h2 id='freshh2'>Fresh Juices</h2>
                 <p id='freshp'>Fruit juice is 100% pure juice made from the flesh of fresh fruit or from whole fruit, depending on the type used. It is not permitted to add sugars, sweeteners, preservatives, flavourings or colourings to fruit juice.Quisque accumsan lacus et semper vestibulum. Praesent purus augue, condimentum eu nibh non, tristique vehicula sem. Donec nec turpis ac turpis interdum pharetra id eu diam. Nulla facilisi. Nulla pharetra elit quis sem imperdiet aliquet. Proin sed enim id nulla malesuada tempor in hendrerit mi. Ut ornare at est tristique consectetur. Quisque tristique, elit consequat dapibus scelerisque, elit magna iaculis massa, sit amet gravida erat lorem sit amet lorem. Aliquam finibus tempor neque, et dictum libero sollicitudin quis. Quisque vitae eros massa. Vestibulum elementum odio massa, at aliquet massa luctus ut. Pellentesque pretium nisl nec arcu blandit mattis. Integer nec commodo purus. </p>
                 <button type="button" class="btn btn-warning">Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome