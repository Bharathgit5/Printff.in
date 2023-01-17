import React from 'react'

const Select = () => {
  return (
    <>
     
     <div className="card text-center" id='card2'>
  <div className="card-header">
    Select Your Print Type
  </div> 
  <div className="card-body2">
  <div className="form-check1">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Black and White
  </label>
</div>
<div className="form-check2">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Color
  </label>
</div>
<div className="form-check3">
  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" checked />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Front Side Only
  </label>
</div>
<div className="form-check4">
  <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Both sides
  </label>
</div>

  </div>
</div>
    </>
  )
}

export default Select
