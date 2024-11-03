 
import './App.css'
import Form from './Form'

function App() {

 const AllSteps = [
    
  {
      title:"Basic Info",
    inputs: [
      {
        name: "name",
        label: "Enter you Name",
        type: "text",
        id: "name",
      },
      {
        name: "email",
        label: "Enter you Email",
        type: "email",
        id: "email",
      },
    ],
  },

  {
      title:"Father info",
    inputs: [
      {
        name: "fatherName",
        label: "Enter you father name",
        type: "text",
        id: "fatherName",
      },
      {
        name: "fatherAge",
        label: "Enter you father age",
        type: "number",
        id: "fatherAge",
      },
    ],
  },
  {
      title:"mother info",
    inputs: [
      {
        name: "motherName",
        label: "Enter you mother name",
        type: "text",
        id: "motherName",
      },
      {
        name: "motherAge",
        label: "Enter you mother age",
        type: "number",
        id: "motherAge",
      },
      {
        name: "botherAge",
        label: "Enter you brother age",
        type: "number",
        id: "botherAge",
      },
    ],
  },
];


  return (
    <>
      <Form AllSteps={AllSteps}></Form> 
    </>
  )
}

export default App
