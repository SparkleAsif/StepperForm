import { useState } from "react";
import FirstForm from "./FirstForm";
import LastForm from "./LastForm";
import SecondForm from "./SecondForm";
import AppInput from "./ul/AppForm/AppInput";

const Form = ({AllSteps}) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({});

 

  const nextStep = () => {
    if (step === 1) {
      if (formData.firstName.length && formData.lastName.length) {
        setStep(2);
      }
    }
    if (step === 2) {
      if (formData.age.length && formData.email.length) {
        setStep(3);
      }
    }
    console.log(step);
  };

  const prevStep = () => {
    setStep(step - 1);
    console.log("im on prev step");
  };

  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
 

  const handleValidation=(whichStep)=>{
    let shouldAccess=false
    const validationIndex=whichStep-2;

    shouldAccess= AllSteps[validationIndex].inputs.every(single=>formData[single.name])

    return shouldAccess;

  }
  return (
    <div>
      <div className="flex justify-center items-start mt-10 ">
        {AllSteps.map((single,i)=><div className="flex justify-center items-center" key={i}>
            <div onClick={()=>
                { 
                    if(i+1 ===1){
                        setStep(i+1)
                        return 
                    }
                    if(handleValidation(i+1)){
                        setStep(i+1)
                    }
                }
            } className={`size-[40px] cursor-pointer flex justify-center items-center rounded-full  
                ${
                    i+1 === step?
                    "bg-red-700 text-white"
                    :
                    i+1 < step?
                    "bg-green-900 text-white":"bg-gray-200 text-black"
                }`
                
                }>
                    <span className=" ">{i+1}</span>
            </div>
            {
                i !== AllSteps.length -1 &&
            <hr className="w-[200px]"></hr>
            }
            
        </div>)}
      </div>
      {step}
    

      <div  className="">
         {
            AllSteps.map((single,i)=><>
               {
                i+1 ===step &&  <div key={i}>

                <h2 className="text-xl  font-bold">{single.title}</h2>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        {single.inputs.map((singleInput,inputIndex)=><AppInput value={formData[singleInput.name]} onChange={value=>{
                            setFormData({
                                ...formData,
                                [singleInput.name]:value
                            })

                        }} key={inputIndex} {...singleInput}></AppInput>)}

                    </div>

                </div >
               }

            </>)
         }
      </div>
      <button className="border border-red-900 p-5 rounded mt-4" 
      onClick={()=>{
                if(step ===AllSteps.length){
                    console.table(formData)
                    return 
                }

            if(handleValidation(step+1)){
                setStep( step+1)
            }
        }
       
        }
        >Increase</button>
    </div>
  );
};

export default Form;
