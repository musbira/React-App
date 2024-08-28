import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import connect from './images/connect.png'
import './contacts.css'
import Contact from '../../components/contact/Contact'
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
  const navigate=useNavigate();
  const[txtname, setName]=useState('');
  const[txtemail, setEmail]=useState('');
  const[txtmessage, setMessage]=useState('');
  const addData=async()=>{
    const formData= new FormData();
    formData.append('yourname',txtname)
    formData.append('email',txtemail)
    formData.append('message',txtmessage)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await addData();
  }

  return (
    <div>
      <div>
        <Navbar/>
      </div>
        
        <div className='container-fluid contact_container p-5 'id='gradient' >
          <div className='row p-5' id='connecting' >
               <div className='col-lg-6'>
                <h3 id='contact-us'>CONTACT US</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est elit. Mauris molestie metus leo, vel laoreet ipsum molestie sed. Nulla facilisi. Etiam eu vestibulum turpis, sed laoreet odio. Curabitur sit amet eros quis erat molestie placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec arcu justo, ullamcorper vel elit et, tempor molestie ex. Donec pulvinar convallis facilisis. Suspendisse pharetra facilisis nisi id euismod. In tincidunt dignissim mauris, quis interdum elit commodo quis. Pellentesque luctus lacus convallis quam porttitor, sit amet egestas ligula molestie. Vestibulum vitae arcu tortor.</p>

                </div>
               <div className='col-lg-6'>
                    <img id='contact-image' src={connect} alt='...'/>
               </div>


            </div>
        </div>


        {/* next */}
        {/* <h3 id='location'>LOCATION</h3> */}
         
        <iframe  title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001393.392814852!2d76.02640283784586!3d11.357123939407082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715105621450!5m2!1sen!2sin" width="100%" height="400" ></iframe>
          
        {/* contact */}
        <div className='container-fluid' id='form-bg'>
          <div className='row p-5' id='connection'>
            <div className='col-md-3'  id='form_section'>
              <h5>CONTACT US</h5>
              <form onSubmit={handleSubmit}>
              <input type='text' name='yourname' placeholder='Your Name' onChange={(e)=>setName(e.target.value)}/>
              <input type='email'  name='email' placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}/>
              <input type='text' name='message' placeholder='Type your message' onChange={(e)=>setMessage(e.target.value)}/>
              <br></br>
              <input type='submit'/>
              </form>
            
 
            </div>
            <div className='col-md-3' id='form_section'>
              <h5>ASSRESS</h5>
              <p>Second Floor,Diamond Plaza<br/>Kozhikkode,676543<br/>Mob:9897675645</p>
               <br/>
               <p>989796954534</p>
               <p>E-mail: freshjuice@gmail.com</p>  
              </div>

              <div className='col-md-3'  id='form_section'>
                <h5>PHONE NUMBERS</h5>
                <p>987876746</p>
                <p>987876746</p>
                <p>987456746</p>
                <p>987876746</p>
                <p>987876746</p>
              
              </div>
              <div className='col-md-3'  id='form_section'>
                <h5>EMAIL</h5>
                <p>freshjuice@gmail.com</p>
                <p>Fresg@yahoomail.com</p>
                <p>freshfruit@gmail.com</p>
              
              </div>
          </div>
        </div>
       <div>
        
        <Contact/>
       </div>
    </div>
  )
}

export default Contacts