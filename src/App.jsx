
import { useFormik } from 'formik'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [geoState,setgeoState] = useState([])
  const [geoCity,setgeoCity] = useState([])
  const formik =useFormik({
    initialValues : {
      userName : "",
      Email : "",
      Country : "",
      State : "",
      City : "",
      Address : ""
    },
    validate : (values) => {
      let error ={}

      if(values.userName == "" || values.userName.length <3 || values.userName.length >20) {
        error.userName = "Please enter Valid name";
      }
      if(values.Email == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        error.Email = "Please enter Your Email";
      }
      if(values.Country == "") {
        error.Country = "Please enter Your Country";
      }
      if(values.State == "") {
        error.State = "Please enter Your State";
      }
      if(values.City == "") {
        error.City = "Please enter Your City";
      }
      if(values.Address == "") {
        error.Address = "Please enter Your Address";
      }

      return error
      
    },
    onSubmit : async (values) => {
      console.log(values)
      try{
        const userData = await axios.post("https://66c9ac4f59f4350f064d1e89.mockapi.io/forms",values)
      } catch {
        console.log(error)
      }
    }

  })

  let geoData = {
    countries : [{
      name : "India",
      value : "IN"
    },{
      name : "America",
      value : "US"
    }
  ],
    states : [
      {
        name : "Tamil Nadu",
        value : "TN",
        Country : "IN"
      },
      {
        name : "Kerala",
        value : "KL",
        Country : "IN"
      },
      {
        name : "New York",
         value : "NY",
         Country : "US"
      },
      {
        name : "California",
         value : "CA",
         Country : "US"
      }
    ],
    cities : [{
      name : "Chennai",
       value : "CHN",
       States : "TN"
    },{
      name : "Madurai",
      value : "MDU",
      States : "TN"
    },{
      name : "Coimbatore",
      value : "CMB",
      States : "TN"
    },{
      name : "Thiruvananthapuram",
      value : "THP",
      States : "KL"
    },{
      name : "Kollam",
      value : "KLM",
      States : "KL"
    },{
      name : "Kannur",
      value : "KNR",
      States : "KL"
    },{
      name : "New York",
      value : "NYC",
      States : "NY"
    },{
      name : "Los Angeles",
      value : "LA",
      States : "CA"
    },{
      name : "San Francisco",
      value : "SF",
      States : "CA"
    },{
      name : "San Diego",
      value : "SD",
      States : "CA"
    }]
  }

  useEffect(() =>{
    let stateList = geoData.states.filter((state)=>{
      return state.Country == formik.values.Country
    })
    setgeoState(stateList)
  },[formik.values.Country])

  useEffect(() =>{
    let cityList = geoData.cities.filter((city)=>{
      return city.States == formik.values.State
    })
    setgeoCity(cityList)
  },[formik.values.State])

  return (
    <>
    <div className='container mt-4'>
      <div className='row'>
        <h2> GuluGulu Form</h2>
        <form onSubmit={formik.handleSubmit}>
            <div className='col-lg-12 mt-3'>
              <div className='row'>
                <div className='col-lg-7'>
                  <label>Name</label>
                  <input type='text' 
                  placeholder='Enter Your Name'
                  name = 'userName'
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  className={`form-control  ${formik.errors.userName && 'is-invalid'}`} />
                  <span style={{color : "maroon"}}>{formik.errors.userName}</span>
                </div>
              </div>
            </div>
            <div className='col-lg-12 mt-3'>
              <div className='row'>
                <div className='col-lg-7'>
                <label>Email</label>
                  <input type='text' 
                  placeholder='abc@ymail.com'
                  name = 'Email'
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  className={`form-control ${formik.errors.Email && 'is-invalid'}`} />
                   <span  style={{color : "maroon"}}>{formik.errors.Email}</span>
                </div>
              </div>
            </div>

            <div className='col-lg-12 mt-3'>
              <div className='row'>
                <div className='col-lg-4'>
                  <label>Country</label>
                  <select 
                  id="" 
                  name = 'Country'
                  value={formik.values.Country}
                  onChange={formik.handleChange}
                  className={`form-control   ${formik.errors.Country && 'is-invalid'}`}>
                    <option value='nil'>Not Selected</option>
                    <option value='IN'>India</option>
                    <option value='US'>America</option>
                  </select>
                  <span style={{color : "maroon"}}>{formik.errors.Country}</span>
                </div>
                <div className='col-lg-4'>
                  <label>state</label>
                  <select 
                  name = 'State'
                  value={formik.values.State}
                  onChange={formik.handleChange} id=""  
                  className={`form-control ${formik.errors.State && 'is-invalid'}`}>
                    <option value='nil'>Not Selected</option>
                      {
                        geoState.map((state)=>{
                          return <option value={state.value}>{state.name}</option>
                        })
                      }
                  </select>
                  <span style={{color : "maroon"}}>{formik.errors.State}</span>
                </div>
                <div className='col-lg-4'>
                  <label>City</label>
                  <select 
                  name = 'City'
                  value={formik.values.City}
                  onChange={formik.handleChange} id="" 
                  className={`form-control ${formik.errors.City && 'is-invalid'}`}>
                    <option value='nil'>Not Selected</option>
                    {
                      geoCity.map((city)=>{
                        return <option value={city.value}>{city.name}</option>
                      })
                    }
                  </select>
                  <span style={{color : "maroon"}}>{formik.errors.City}</span>
                </div>
              </div>
            </div>

            <div className='col-lg-12 mt-3'>
              <div className='row'>
                  <div className='col-lg-7'>
                    <label>Address</label>
                    <textarea 
                    type='textbox' 
                    placeholder='Enter Your Address'
                    name = 'Address'
                  value={formik.values.Address}
                  onChange={formik.handleChange}
                  className={`form-control mb-1 ${formik.errors.Address && 'is-invalid'}`} />
                  <span  style={{color : "maroon"}}>{formik.errors.Address}</span>
                  </div>
              </div>
            </div>

            <div className='text-center mt-3 mb-4'>
            <button  type='submit'
             className='btn btn-outline-primary btn-lg fw-bold px-4'>Submit</button>
            </div>

          </form>
      </div>
    </div>
    </>
  )
}

export default App
