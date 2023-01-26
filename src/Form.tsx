import { Link } from 'react-router-dom'
import React from 'react'
// import { useForm } from 'react-hook-form';
const Form = () => {
  return (
    <div>
        Before you go ,kindly leave your contact details so we can get back to you ...
      <form>
        <div>
       
        <label>Name</label>
        <input placeholder = "  *Your Name" type="text"></input>
        </div>
        <div>

        <label>Email</label>
        <input placeholder="  *Your Email" type="email"></input>
        </div>
        <div>
            <input  type = "checkbox"></input> * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.
        </div>
        <Link to="/">
        <button>Submit</button>
        </Link>
      </form>
    </div>
    


    
  )
}

export default Form
