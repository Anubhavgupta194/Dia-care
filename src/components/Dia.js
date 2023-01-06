import React, { useContext, useEffect, useState } from 'react';


export default function Feed()
{  
    return(
        <>       
        <>
  {/* Hello world */}
  
  <main id="main" className="container bg" >
    
    <div className="row">
      <div className="col-xs-12 col-lg-offset-3 col-lg-6">
        <div className="m-b-md text-center">
         <center><h1 id="title">DiaCheck</h1> 
          <p id="description" className="description">
            To predict your chances of getting Diabetic
          </p>
          </center>
        </div>
        <form method="GET" action="" id="survey-form" name="survey-form">
          <fieldset>
            <label htmlFor="name" id="name-label">
              Name *
              <input
                className=""
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name (required)"
                required=""
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="email" id="email-label">
              Email *
              <input
                className=""
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email (required)"
                required=""
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="number" id="number-label">
              Age *
              <input
                className=""
                type="number"
                id="number"
                name="number"
                min={8}
                max={112}
                placeholder="Enter you age (required)"
                required=""
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="dropdown" aria-placeholder={0}>
              No. of pregnancies till now ? *
              <select
                id="dropdown"
                name="dropdown"
                placeholder={0}
                className="m-t-xs"
              >
                <option value={0} selected="">
                  0
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value="More than 10">More than 10</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="survey-form-suggestions">
              Please enter your Blood Glucose level?
              <textarea
                id="survey-form-suggestions"
                maxLength={194}
                placeholder="50 mg/dl - 1200 mg/dl"
                defaultValue={""}
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="survey-form-suggestions">
              Please enter your Blood Pressure ?
              <textarea
                id="survey-form-suggestions"
                maxLength={194}
                placeholder="50 mm hg - 400 mm hg"
                defaultValue={""}
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="survey-form-suggestions">
              Please enter your Skin Thikness ?
              <textarea
                id="survey-form-suggestions"
                maxLength={194}
                placeholder="2.00 mm  - 21.00 mm "
                defaultValue={""}
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="survey-form-suggestions">
              Please enter your BMI?
              <textarea
                id="survey-form-suggestions"
                maxLength={194}
                placeholder="10 Kg/m^2 - 100 Kg/m^2"
                defaultValue={""}
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="survey-form-suggestions">
              Please enter your Insulin level ?
              <textarea
                id="survey-form-suggestions"
                maxLength={194}
                placeholder="3 mcU/ml - 400 mcU/ml"
                defaultValue={""}
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="survey-form-suggestions">
              Please enter your Diabties Pedigree Function?
              <textarea
                id="survey-form-suggestions"
                maxLength={194}
                placeholder=""
                defaultValue={""}
              />
            </label>
          </fieldset>
          <button id="submit" type="submit" className="btn">
            Submit the form
          </button>
        </form>
      </div>
    </div>
  </main>
</>

        </>

    );
}