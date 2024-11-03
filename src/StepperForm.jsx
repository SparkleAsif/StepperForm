import { useState } from "react";
import AppInput from "./ul/AppForm/AppInput"; // Import the AppInput component

const Form = ({ AllSteps }) => {
  // State to keep track of the current step in the form
  const [step, setStep] = useState(1);
  // State to keep track of the form data entered by the user
  const [formData, setFormData] = useState({});
  // State to control the visibility of the review modal
  const [showModal, setShowModal] = useState(false);

  // Validation function to check if all required fields are filled for the specified step
  const handleValidation = (whichStep) => {
    const validationIndex = whichStep - 2; // Get the index of the previous step
    // Check if every input for the specified step is filled in the formData
    return AllSteps[validationIndex].inputs.every((single) => formData[single.name]);
  };

  // Function to handle input changes and update formData
  const handleInputData = (input) => (e) => {
    const { value } = e.target; // Get the input value from the event
    // Update the formData state with the new value for the specified input
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // Function to move to the next step if validation is successful
  const nextStep = () => {
    if (handleValidation(step + 1)) { // Check if the next step's fields are valid
      setStep(step + 1); // Move to the next step
    }
  };

  // Function to move back to the previous step
  const prevStep = () => {
    if (step > 1) setStep(step - 1); // Decrease step number if not on the first step
  };

  // Function to handle the final submission and show the review modal
  const handleSubmit = () => {
    setShowModal(true); // Set showModal to true to display the modal
  };

  return (
    <div className="border w-[60%] mx-auto p-5 bg-gray-800">
      {/* Step indicators */}
      <div className="flex justify-center items-start m-10">
        {AllSteps.map((single, i) => ( // Map through each step
          <div className="flex justify-center items-center" key={i}>
            <div
              onClick={() => {
                // Click handler to navigate to the selected step
                if (i + 1 === 1) { // If the first step, set it directly
                  setStep(i + 1);
                  return;
                }
                // Only navigate if the previous step's fields are valid
                if (handleValidation(i + 1)) {
                  setStep(i + 1);
                }
              }}
              className={`size-[50px] cursor-pointer flex justify-center items-center rounded-full  
                ${ // Determine the background color based on the step's state
                  i + 1 === step
                    ? "bg-blue-700 text-white" // Current step
                    : i + 1 < step
                    ? "bg-green-500 text-white" // Completed step
                    : "bg-gray-600 text-black" // Upcoming step
                }`}
            >
              <span>{i + 1}</span> {/* Display step number */}
            </div>
            {i !== AllSteps.length - 1 && <hr className="w-[200px]"></hr>} {/* Horizontal separator between steps */}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="mx-auto bg-gray-300 p-5">
        {AllSteps.map((single, i) => ( // Map through each step to display its content
          <>
            {i + 1 === step && ( // Only show the content for the current step
              <div key={i}>
                <h2 className="text-3xl font-bold text-black mx-auto flex justify-center">{single.title}</h2>
                <div className="flex flex-col gap-5 mt-10">
                  {single.inputs.map((singleInput, inputIndex) => ( // Map through each input field for the step
                    <AppInput
                      value={formData[singleInput.name]} // Bind input value to formData
                      onChange={(value) => {
                        setFormData({
                          ...formData,
                          [singleInput.name]: value, // Update specific input in formData
                        });
                      }}
                      key={inputIndex} // Unique key for each input
                      {...singleInput} // Spread other input properties
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex space-x-6 mx-auto justify-center">
        <button className="border px-3 py-2 rounded mt-4" onClick={prevStep}>
          Back {/* Button to go back to the previous step */}
        </button>

        <button
          className="border px-3 py-2 rounded mt-4"
          onClick={() => {
            // Handle button click for next step or final submission
            if (step === AllSteps.length) {
              handleSubmit(); // Show modal on the final step
            } else {
              nextStep(); // Move to the next step
            }
          }}
        >
          {step === AllSteps.length ? "Review" : "Next"} {/* Change button text based on current step */}
        </button>
      </div>

      {/* Modal for review */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black rounded-lg p-8 w-[400px]">
            <h2 className="text-2xl font-bold mb-4">Review Your Information</h2>
            <div className="text-left">
              {Object.entries(formData).map(([key, value]) => ( // Display each piece of form data
                <p key={key} className="mb-2">
                  <span className="font-semibold">{key}:</span> {value} {/* Key-Value pair display */}
                </p>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowModal(false)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form; // Export the Form component
