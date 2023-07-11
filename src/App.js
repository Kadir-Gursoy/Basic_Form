import React, {useState} from "react";
import "./index.css";

export default function App () {
  const [values, setValues] = useState({
    fisrtName:"",
    lastName:"",
    PhoneNumber:"",
    adress:"",
    email:"",
  }
  )
  const {firstName, lastName, PhoneNumber, adress,email} = values; 

  const handelChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
    console.log(e);
  }
const handleSubmit = (e)  => {
  e.preventDefault();

}


  
  return (
  
    <div className="form-container">

      <h1 className="form">FORM</h1>

      <form className="register-form" onSubmit={handleSubmit}>

        
              

        <input
          onChange={handelChange}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
          />
          <span>{firstName}</span>
       
        <input
          onChange={handelChange}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
         
        />
             <span>{lastName} </span>
        
        <input
          onChange={handelChange}
          id="phone-number"
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="PhoneNumber"
          required
         
        

        />
       
       <span>{PhoneNumber} </span>
        <input
          onChange={handelChange}
          id="adress"
          className="form-field"
          type="text"
          placeholder="Adress"
          name="adress"
          required
         
        
     
      
        />
          <span>{adress} </span>
       
        <input
          onChange={handelChange}
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          required
               
   
       
        />
           <span>{email} </span>
        <button className="form-field" type="submit">
          Register
        </button>
      </form>


      
    </div>
  );
}
