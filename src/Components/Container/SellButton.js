import React from 'react';

export default function Example() {
    return (
        <div className="container">
            <h1 className="text-center">Post Your AD</h1>
        <div className="card mt-5" style={{width:"60rem",height:"1200px"}}>
        <div className="card-body">
    <h5 className="card-title">SELECTED CATEGORY</h5>
    <h6 className="card-subtitle mb-2 text-muted mt-4">Vehicles/Cars<span className="ml-4 text-dark">Change</span></h6>
    <hr/>
    <h5 className="card-title">INCLUED SOME DETAILS</h5>
    <p className="card-text">Conditions *</p>
    <button type="button" className="btn btn-outline-primary">Primary</button>
    <button type="button" className="btn btn-outline-secondary">Secondary</button>
    <p className="card-text">Type *</p>
    <button type="button" className="btn btn-outline-primary">Primary</button>
    <button type="button" className="btn btn-outline-secondary">Secondary</button>
    <div className="needs-validation" novalidate>
    <p className="card-text" for="validationCustom01">First name</p>
    <input type="text" class="form-control form-control-lg" id="validationCustom01" value="Mark" required></input>
      <div class="valid-feedback">
        Looks good!
      </div>
      <p className="card-text" for="validationCustom01">First name</p>
    <input type="text" class="form-control form-control-lg" id="validationCustom01" value="Mark" required></input>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  <hr/>
  <h5 className="card-title">SET PRICE</h5>
  <p><small>Price</small></p>
  <input type="text" class="form-control form-control-lg d-inline-block" id="inlineFormInputGroup" placeholder="Username"></input>
  <hr/>
  <h5 className="card-title">Upload upto 12 Photos</h5>
  <hr className="rc-menu__divider"/>
  <h5 className="card-title">CONFIRM YOUR LOCATION</h5>
  <h6 className="card-title">List<span>Current Location</span></h6>
  <p className="card-text text-muted">State</p>
  <select class="form-control form-control-lg">
  <option>Azad Kashmir</option>
  <option>Balochistan</option>
  <option>Sindh</option>
  <option>Punjab</option>
  <option>KPK</option>
</select>
<hr/>
<div>
    <h5 className="card-title">REVIEW YOUR DETAIL</h5>
</div>
<hr/>
<button className="btn btn-outline-info">Post now</button>
    </div>
  </div>
</div>

    );
}