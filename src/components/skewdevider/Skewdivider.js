import React from 'react'
import './skewdivider.styles.css'
import skew from './image/skew.png'

export default function Skewdivider() {
   
  return (
    <div>

<div className='skew-c'></div>
             <div className='container-fluid colour-block' >
                <div className="row" style={{'paddingTop':'10%','paddingBottom':'15px'}}>
                    <div className="col-lg-6" style={{'marginTop':'-15%', 'padding':'0'}}>
                        <img id='imgskew' src={skew} alt='' height={500} width={400}/>
                     </div>
                     
                    <div className="col-lg-6" id='skewcontent' style={{'padding-right':'50px'}}>
                        <h3 style={{'color':'black','textAlign':'center','padding':'10px'}}>About Us</h3>
                           <p style={{'color':'black','text-align':'justify'}}>The Old Ebbitt Grill, Washington's oldest saloon, was founded in 1856 when, according to legend, innkeeper William E. Ebbitt bought a boarding house. Today, no one can pinpoint the house’s exact location, but it was most likely on the edge of present-day Chinatown.

As a boarding house, the Ebbitt guest list read like a Who's Who of American History. President McKinley is said to have lived there during his tenure in Congress, and Presidents Ulysses S. Grant, Andrew Johnson, Grover Cleveland, Theodore Roosevelt and Warren Harding supposedly refreshed themselves at its stand-around bar.</p>
                    </div>
              
        
             </div>
        </div>
       
     </div>
  )
}
