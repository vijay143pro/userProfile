import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "react-datepicker/dist/react-datepicker.css";
import './form.css'
import "react-datepicker/dist/react-datepicker.css";
import {useFormik,Field} from 'formik';

import * as yup from 'yup'

function Form() {
  
  
  const formik=useFormik({
    
    initialValues:{
      fname:'',
      lname:'',
      email:'',
      pass:'',
      cpass:'',
      mobile:'',
      addrs:'',
      gender:'',
      list:'',
      dob:''
    },
    validationSchema:yup.object({
      fname:yup.string().required("Name is required").strict().trim(),
      lname:yup.string().required("Name is required"),
      email:yup.string().required("email is required").email(),
      pass:yup.string().required("Password is required").min(8,"passwrod should contain mininum of 8 characters"),
      cpass:yup.string().required("Confirm Password is required")
      .oneOf([yup.ref('pass'),null],"Confirm password same with password"),
      mobile: yup.string().required().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}),
      addrs:yup.string().required("Address is required"),
      gender: yup.string().oneOf(["male", "female"], "Required").required("Required").
      oneOf(["male" , "female"], 'Selecting the gender field is required'),
      list:yup.string() .required("select any one"),
      dob: yup.date().required()
    }),
   
    onSubmit:(userInputData)=>{
      console.log(userInputData);
    }
  })
  return (
    <div className='container mt-4'>
    <div className='jumbotron'>
    <form className='user-reg-form' onSubmit={formik.handleSubmit}>
    <div className="form-group">
   <label for="fname">First Name</label>
   <input type="text" className="form-control" name="fname" id="fname"  
   placeholder="Enter first Name" onChange={formik.handleChange} value={formik.values.fname}/>
   {formik.errors.fname?<small id="error"  className="error text-danger">{formik.errors.fname}</small>:null}
 </div>
 
 <div className="form-group">
 <label for="lname">Last Name</label>
 <input type="text" className="form-control" name="lname" id="lname"  
 placeholder="Enter first Name" onChange={formik.handleChange} value={formik.values.lname}/>
 {formik.errors.lname?<small id="error"  className="error text-danger">{formik.errors.lname}</small>:null}
</div>

  <div className="form-group">
  <label for="email">Email</label>
  <input type="email" className="form-control" 
  name='email' id="email"  placeholder="Enter Email" onChange={formik.handleChange}
  value={formik.values.email}/>
  {formik.errors.email?<small id="error" className="error text-danger">{formik.errors.email}</small>:null}
</div>
<div className="form-group">
    <label for="pass">Password</label>
    <input type="password" className="form-control" 
    name='pass' id="pass"  placeholder="Enter password" onChange={formik.handleChange} value={formik.values.pass}/>
    {formik.errors.pass?<small id="error" className="error text-danger">{formik.errors.pass}</small>:null}
  </div>
  <div className="form-group">
    <label for="cpass">Confirm password</label>
    <input type="password" className="form-control" id="cpass" 
    name='cpass'  placeholder="Enter confirm Password" onChange={formik.handleChange} value={formik.values.cpass}/>
    {formik.errors.cpass?<small id="error" className="error text-danger">{formik.errors.cpass}</small>:null}
  </div>
  <div className="form-group">
    <label for="mobile">Enter mobile number</label>
    <input type="tel"className="form-control" id="mobile" 
    name='mobile' placeholder="Enter mobile number" onChange={formik.handleChange}/>
    {formik.errors.mobile?<small id="error" className="error text-danger">{formik.errors.mobile}</small>:null}
  </div>
  <div>
  <label for="dob">Date of birth:</label>
  <input className="dob" name="dob" type="date" onChange={formik.handleChange}/>
  {formik.errors.dob?<small>{formik.errors.dob}</small>:null}
  </div><br/>
  <span>Gender</span>
<div className="form-check">
<label class="form-check-label" for="flexRadioDefault1" >Male</label>
  <input className="form-check-input" type="radio" name="gender" id="gender1"
  onChange={formik.handleChange} value="male"/>
</div>
<div className="form-check">
<label class="form-check-label" for="flexRadioDefault2">Female</label>
  <input className="form-check-input" type="radio" onChange={formik.handleChange} 
value="female" name="gender" id="gender2" />
</div>
{formik.errors.gender?<small id="error" className="error text-danger">
{formik.errors.gender}</small>:null}  
<br/>
<div class="form-group">
  <label for="sel1">Select list:</label>
  <select class="form-control" id="sel1" name='list'
  onChange={formik.handleChange} value={formik.values.list}>
    <option value="">Select any one</option>
    <option value="10th">10th</option>
    <option value="12th">12th</option>
    <option value="ug">Ug</option>
    <option value="pg">Pg</option>
  </select>
  {formik.errors.list?<small className='text-danger'>{formik.errors.list}</small>:null}
</div>
<br/>
<div>
<textarea class="form-control " placeholder='enter comment' onChange={formik.handleChange} 
value={formik.values.addrs} name="addrs"></textarea>
{formik.errors.addrs?<small id="error" className="error text-danger">
{formik.errors.addrs}</small>:null}
</div><br/>
<button class="btn btn-primary" >Submit</button>
        </form>
        </div>
    </div>
  )
}
export default Form