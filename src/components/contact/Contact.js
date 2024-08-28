import React from 'react'
import './contact.styles.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  return (
    <div>
         <footer id='footersec'>
              <div class="container">
                <div class="row">
                  <div class='col-md-3' id='firstfoot'>
                             <h6>Fresh Juice</h6>
                             <p>Fresh juice offers delicious, quality food, fine staff and friendly dining ambiance to the food lovers. Indulge yourself and your palate with the mayflower experience. We serve Dessert Items, fresh Juices, Snack Items ,Chinese foods. </p>
                           
                             <p>@2020Restaurent All Rights Reserved</p>
                  </div>
                  <div class='col-md-3' id='secondfoot'>
                    <h6>Quick Links</h6>
                    <ul >
                      <li>
                        <a href='/'>Home</a>
                      </li>
                      <br/>
                      <li>
                      <a href="about">About</a>
                      </li>
                      <br/>
                      <li>
                      <a href="menu">Menus</a>
                       </li>
                       <br/>
                       <li>
                        <a href='contact'>Contact</a>
                       </li>
                       <br/>
                       <li>
                        <a href='signup'>Sign Up</a>
                       </li>
                    </ul>
                  </div>

                  <div id='thirdfoot' className='col-md-3' >
                    <h6>Our Services</h6>
                    <ul>
                      <li>Home Delivery</li>
                      <br/>
                      <li>Best Food Price</li>
                      <br/>
                      <li>Quality Supply</li>
                      <br/>
                      <li>Quality Products</li>
                      <br/>
                      <li>Online Ordering</li>
                    </ul>
                    
                  </div>

                  <div class="col-md-3" id='fourthfoot'>

                     <h6>Contact Us</h6>   
                     <p>Second Floor,Diamond Plaza<br/>Kozhikkode,676543<br/>Mob:9897675645</p>
                     <br/>
                     <p>989796954534</p>
                     <p>E-mail: freshjuice@gmail.com</p>
                     
                    <FacebookIcon  style={{ color: "#8b8989" }}/>
                    <WhatsAppIcon style={{ color: "#8b8989" }}/>
                    <InstagramIcon style={{ color: "#8b8989" }}/>
                    <TelegramIcon style={{ color: "#8b8989" }}/>
                    <YouTubeIcon style={{ color: "#8b8989" }}/>
                    <br/>

                    
                  </div>

                 
                </div>

              </div>
            </footer>
    </div>
  )
}

export default Contact