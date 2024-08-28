import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Contact from '../../components/contact/Contact'
import img4 from './images/img4.jpg'
import './about.css'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const About = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
       

       <div className='container-fluid abt_container' id='gradient'>
            <p id='about-pp' data-aos="fade-right" style={{'color':'#705505','paddingTop':'15%','fontSize':'35px'}} >" The Great Times You Can Have With Great Food " <br></br><br></br>" Enjoy Taste of Heaven "</p>
            <p  id='about-pp' style={{'color':'#705505','paddingTop':'15%','fontSize':'25px'}} ></p>

        </div>


      <div className='container-fluid'>
        <div className='row m-5 p-4'>

          <div className='col-lg-6'>
            <h3 id='abhead'>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est elit. Mauris molestie metus leo, vel laoreet ipsum molestie sed. Nulla facilisi. Etiam eu vestibulum turpis, sed laoreet odio. Curabitur sit amet eros quis erat molestie placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec arcu justo, ullamcorper vel elit et, tempor molestie ex. Donec pulvinar convallis facilisis. Suspendisse pharetra facilisis nisi id euismod. In tincidunt dignissim mauris, quis interdum elit commodo quis. Pellentesque luctus lacus convallis quam porttitor, sit amet egestas ligula molestie. Vestibulum vitae arcu tortor.

                         Fusce pretium mauris eu orci iaculis, 
                    eu fermentum turpis condimentum. Cras risus lorem, ullamcorper ut tellus id, auctor convallis lectus. Aenean sit amet felis mattis, efficitur nunc vel, bibendum dolor. Suspendisse potenti. Etiam urna enim, mollis vel mauris eu, blandit tristique turpis. Cras tempor non enim sed pellentesque. Phasellus ut lorem tincidunt, gravida arcu in, viverra enim. Sed tincidunt scelerisque justo non pulvinar. Sed velit purus, sagittis eu nulla non, tempor interdum lectus. Sed eu orci vitae justo tempor vehicula non aliquet lectus. Ut augue sapien, fringilla vel elit condimentum, tristique fermentum arcu. In sollicitudin lacus massa, sit amet convallis odio efficitur ut. Suspendisse suscipit libero in suscipit semper. Donec mattis nulla eu massa feugiat luctus.</p>

          </div>
          <div className='col-lg-6'>
             <img  id='aboutimg' src={img4} alt='...'/>
          </div>

        </div>
      </div>
      <div className='container' id='about-icon'>
        <div className='row'>
          <div className='col-md-3' >
            <h4 id='abouticon'>Home Delivery</h4>
          <DeliveryDiningIcon  style={{ color: "rgb(53, 52, 51)",height:'180px', width:'120px' }}/>
          </div>
          <div className='col-md-3'>
            <h4 id='abouticon'>Custom Box</h4>
          < MarkunreadMailboxIcon style={{ color: " rgb(53, 52, 51)",height:'180px', width:'120px' }}/>
          </div>
          <div className='col-md-3'>
            <h4 id='abouticon'>Quick Supply</h4>
            
              <AutorenewIcon style={{ color: " rgb(53, 52, 51)",height:'180px', width:'120px' }}/>
          </div>
          <div className='col-md-3'>
            <h4 id='abouticon'>Best Price</h4>
          <LocalActivityIcon style={{ color: " rgb(53, 52, 51)",height:'180px', width:'120px' ,margin:'0'}} />
          </div>
          
                      
               
        </div>
      </div>
      <div>
        <Contact/>
        </div>
    </div>
  )
}

export default About