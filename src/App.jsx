 
import './App.css'
 import Form from './Form'
import StepperForm from './StepperForm';

function App() {

 const AllSteps = [
    
  {
    title: "User Info",
    inputs: [
      {
        name: "firstName",
        label: "Enter your First Name",
        type: "text",
        id: "firstName",
      },
      {
        name: "lastName",
        label: "Enter your Last Name",
        type: "text",
        id: "lastName",
      },
      {
        name: "email",
        label: "Enter your Email",
        type: "email",
        id: "email",
      },
      {
        name: "phoneNumber",
        label: "Enter your Phone Number",
        type: "tel",
        id: "phoneNumber",
      },
    ],
  },
  {
    title: "Parent Info",
    inputs: [
      {
        name: "fatherName",
        label: "Enter your Father's Name",
        type: "text",
        id: "fatherName",
      },
      {
        name: "fatherPhone",
        label: "Enter your Father's Phone Number",
        type: "tel",
        id: "fatherPhone",
      },
      {
        name: "motherName",
        label: "Enter your Mother's Name",
        type: "text",
        id: "motherName",
      },
      {
        name: "motherPhone",
        label: "Enter your Mother's Phone Number",
        type: "tel",
        id: "motherPhone",
      },
    ],
  },
  {
    title: "Address Info",
    inputs: [
      {
        name: "country",
        label: "Enter your Country",
        type: "text",
        id: "country",
      },
      {
        name: "currentAddress",
        label: "Enter your Current Address",
        type: "text",
        id: "currentAddress",
      },
      {
        name: "permanentAddress",
        label: "Enter your Permanent Address",
        type: "text",
        id: "permanentAddress",
      },
      {
        name: "postalCode",
        label: "Enter your Postal Code",
        type: "text",
        id: "postalCode",
      },
    ],
  },
];


  return (
    <>
      <Form AllSteps={AllSteps}></Form>   
      {/* <StepperForm AllSteps={AllSteps}></StepperForm> */}
{/* passes allSteps to the form and render */}
    </>
  )
}

export default App
