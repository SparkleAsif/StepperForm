

import React from 'react';
import Swal from 'sweetalert2';

const LastForm = ({ handleFormData, prevStep, values }) => {
  // const submitFormData = (e) => {
  //   e.preventDefault();

    
  //   Swal.fire({
  //     title: 'Form Submission',
  //     html: `<strong>First Name:</strong> ${values.firstName}<br>
  //            <strong>Last Name:</strong> ${values.lastName}<br>
  //            <strong>Age:</strong> ${values.age}<br>
  //            <strong>Email:</strong> ${values.email}<br>
  //            <strong>Password:</strong> ${values.pass}<br>
  //            <strong>Confirm Password:</strong> ${values.confirmPass}`,
  //     icon: 'success',
  //     confirmButtonText: 'OK',
  //   });
  // };

  const submitFormData = (e) => {
    e.preventDefault();
  
    // Validation: Check if password fields are filled and match
    if (!values.pass || !values.confirmPass) {
      Swal.fire('Error', 'Both password fields are required!', 'error');
      return;
    }
  
    if (values.pass !== values.confirmPass) {
      Swal.fire('Error', 'Passwords do not match!', 'error');
      return;
    }
  
    // If validation passes, show the form data
    Swal.fire({
      title: 'Form Submission',
      html: `<strong>First Name:</strong> ${values.firstName}<br>
             <strong>Last Name:</strong> ${values.lastName}<br>
             <strong>Age:</strong> ${values.age}<br>
             <strong>Email:</strong> ${values.email}<br>
             <strong>Password:</strong> ${values.pass}<br>
             <strong>Confirm Password:</strong> ${values.confirmPass}`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };
  

  return (
    <div>
      <div className="p-3 my-2 flex flex-col bg-slate-500">
        <div className="justify-center items-center flex flex-col p-4">
          <p className="font-bold text-2xl p-3 text-white">You are almost finished!!</p>
          <p className="font-bold text-2xl p-3 text-purple-400">Step 3</p>
        </div>
        {/* design */}
        <div className="m-12 w-[600px] mx-auto ">
        <div className="flex space-x-44">
        <p
          className="border-2 w-[70px] h-[70px] text-center bg-white
         text-black font-bold items-center justify-center flex text-xl rounded-full"
        >
          Step 1
        </p>
        <p
          className="border-2 w-[70px] h-[70px] text-center bg-white
         text-black font-bold items-center justify-center flex text-xl rounded-full"
        >
          Step 2
        </p>
        <p
          className="border-2 w-[70px] h-[70px] text-center bg-purple-600
         text-black font-bold items-center justify-center flex text-xl rounded-full"
        >
          Step 3
        </p>
        </div>
        <div className="border h-3 bg-purple-600 w-[80%] mx-auto -mt-9 "></div>
      </div>
        {/*form */}
        <form onSubmit={submitFormData} className="w-[50%] mx-auto">
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <input onChange={handleFormData("pass")} type="password" name="pass" className="grow" placeholder="Password" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <input onChange={handleFormData("confirmPass")} type="password" name="confirmPass" className="grow" placeholder="Confirm Password" />
          </label>

          <div className="flex justify-between">
            <button onClick={prevStep} className="btn btn-active btn-secondary bg-purple-700  mt-5 w-[10%]">
              Prev
            </button>
            <button type="submit"  className="btn btn-active btn-secondary bg-purple-700  mt-5 w-[10%]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LastForm;
