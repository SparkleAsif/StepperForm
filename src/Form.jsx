
import { useState } from "react";
import AppInput from "./ul/AppForm/AppInput";

const Form = ({ AllSteps }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Validation 
  const handleValidation = (whichStep) => {
    const validationIndex = whichStep - 2;
    return AllSteps[validationIndex].inputs.every((single) => formData[single.name]);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const nextStep = () => {
    if (handleValidation(step + 1)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <div className="border w-[60%] mx-auto p-5 bg-gray-800">
      <div className="flex justify-center items-start m-10">
        {AllSteps.map((single, i) => (
          <div className="flex justify-center items-center" key={i}>
            <div
              onClick={() => {
                if (i + 1 === 1) {
                  setStep(i + 1);
                  return;
                }
                if (handleValidation(i + 1)) {
                  setStep(i + 1);
                }
              }}
              className={`size-[50px] cursor-pointer flex justify-center items-center rounded-full  
                ${
                  i + 1 === step
                    ? "bg-blue-700 text-white"
                    : i + 1 < step
                    ? "bg-green-500 text-white"
                    : "bg-gray-600 text-black"
                }`}
            >
              <span>{i + 1}</span>
            </div>
            {i !== AllSteps.length - 1 && <hr className="w-[200px]"></hr>}
          </div>
        ))}
      </div>

      <div className="mx-auto bg-gray-300 p-5">
        {AllSteps.map((single, i) => (
          <div key={i}>
            {i + 1 === step && (
              <div key={i}>
                <h2 className="text-3xl font-bold text-black mx-auto flex justify-center">{single.title}</h2>
                <div className="flex flex-col gap-5 mt-10">
                  {single.inputs.map((singleInput, inputIndex) => (
                    <AppInput
                      value={formData[singleInput.name]}
                      onChange={(value) => {
                        setFormData({
                          ...formData,
                          [singleInput.name]: value,
                        });
                      }}
                      key={inputIndex}
                      {...singleInput}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      
      <div className="flex space-x-6 mx-auto justify-center">
        <button className="border px-3 py-2 rounded mt-4" onClick={prevStep}>
          Back
        </button>

        <button
          className="border px-3 py-2 rounded mt-4"
          onClick={() => {
            if (step === AllSteps.length) {
              handleSubmit(); // Show modal on final step
            } else {
              nextStep();
            }
          }}
        >
          {step === AllSteps.length ? "Review" : "Next"}
        </button>
      </div>


      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black rounded-lg p-8 w-[400px]">
            <h2 className="text-2xl font-bold mb-4">Review Your Information</h2>
            <div className="text-left">
              {Object.entries(formData).map(([key, value]) => (
                <p key={key} className="mb-2">
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowModal(false)} // Close 
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
