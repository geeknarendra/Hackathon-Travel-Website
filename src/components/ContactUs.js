import React from 'react'
import { useState } from 'react'
import './css/ContactUs.css'
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function ContactUs() {

    const [data,setdata]=useState(
        {
            fullname:"",
            email:"",
            phone:"",
            query:""
        }
    )

    function handleChange(e){

        setdata( {...data, [e.target.name]:e.target.value});
        e.preventDefault();

    }

    function handleSubmit(e){
        alert(JSON.stringify(data))
       
    }
    return (
            <div className="Container" id="contact">
            
            <h1>CONTACT US</h1>
            <p className="msg">India has a myriad of landscapes, great heritage and culture, varied flora and fauna.<br/>
            Contact Us and We will more will be more happy to assist you.</p>
   
            <div className="wrapper">
                
                    <form onSubmit={handleSubmit} className="form">
                    <h2>Query Form</h2>
                    <hr/>
                    <div >
                    <input type="text"  name="fullname" value={data.fullname} onChange={handleChange} required placeholder="Enter Full Name"/><br/>
                   
                    </div>

                   <div>
                    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter Your Email" required/><br/>
                   
                    </div>

                    <div>
                    <input type="number" name="phone" value={data.phone} onChange={handleChange}  placeholder="Phone Number"required/><br/>
                    
                    </div>

                    <div className="textarea">
                    <textarea name="query" value={data.query} onChange={handleChange} placeholder="Put Your Query Here" required/><br/>
                    </div>

                    <input type="submit"  className="btn"/>
                    </form>

                <div className="connect">
                   <div className="office">
                    <h2>Our Office</h2>
                    <hr/>
                    <CallIcon style={{ fontSize: 30, color:'#334257' }}/> <span>+91 1111111111</span>
                    <div className="address">
                        Devsnest, <br/>
                        Stack Team,<br/>
                        Discord<br/>
                    </div>
                   </div> 
                   <div className="icons"> 
                    <h2>Keep Connected</h2>
                    <a href="" ><TwitterIcon style={{ fontSize: 30, color:'#334257' }}/></a>
                
                    <a href=" " ><LinkedInIcon style={{ fontSize: 30, color:'#334257',marginLeft:"2rem" }}/></a>
                    </div>  

                </div>
            </div>
            
        </div >

    )
}



export default ContactUs