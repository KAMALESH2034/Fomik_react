import React from 'react'
import { useNavigate } from 'react-router-dom'
function Submited() {

    const navigate = useNavigate()

  return (
    <div class="container ">
       <div class="row">
         <div className='d-flex justify-content-center'>
         <div class="col-12 col-lg-5 mt-5 mb-8 mb-lg-0">
           
           <div class="mx-auto form-BG rounded-4 text-center shadow-lg">
                <div class="d-flex mb-6 mx-auto align-items-center justify-content-center bg-white border rounded-pill" >
                </div>
                <h6 class="fs-6 mt-3 fw-bold">Response Submitted</h6>
                <span class="d-block">Your response is submitted !</span>
                <button type="button" onClick={()=>{navigate("/")}} className='btn btn-primary mt-3 mb-4 fw-bold' > Submit new response</button>
            </div>
           </div>
         </div>
    </div>
    </div>
  )
}

export default Submited