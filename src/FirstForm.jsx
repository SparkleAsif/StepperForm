const FirstForm = ({ nextStep, handleFormData, values }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="p-3 my-2 flex flex-col bg-slate-500">
      <div className="justify-center items-center flex flex-col p-4">
        <h2 className="text-white text-3xl  ">
          Feel Free to Compleat the form
        </h2>
        <p className=" font-bold text-2xl p-3 text-purple-400">Step 1</p>
      </div>

      <div className="m-12 w-[600px] mx-auto ">
        <div className="flex space-x-44">
        <p
          className="border-2 w-[70px] h-[70px] text-center bg-purple-600
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
          className="border-2 w-[70px] h-[70px] text-center bg-white
         text-black font-bold items-center justify-center flex text-xl rounded-full"
        >
          Step 3
        </p>
        </div>
        <div className="border h-3 bg-purple-600 w-[80%] mx-auto -mt-9 "></div>
      </div>

      {/* first form */}
      <form onSubmit={submitFormData} className="w-[50%] mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            name="firstName"
            className="grow"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleFormData("firstName")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            name="lastName"
            className="grow"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleFormData("lastName")}
          />
        </label>

        <button
          type="submit"
          onClick={nextStep}
          className="btn btn-active btn-secondary bg-purple-700 mx-auto mt-5 w-[10%]"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default FirstForm;
