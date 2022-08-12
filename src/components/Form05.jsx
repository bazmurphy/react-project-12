import React from "react"

export default function Form05() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
        }
    )

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    // CONTROLLED COMPONENTS

    // when we type into the box
    // the value of the input box is no longer being controlled by the input element but rather by REACT
    // everytime something is entered into the form (every change that is made)
    // the handleChange function is run which updates the specific property/value in our State Object
    // and because the State changes, this re-renders the Form
    // and it sets the value="" of the HTML element Form <input> to whatever the State Object property/value is
    // so now State is IN CONTROL telling the <input> box what to display, 
    // rather than the <input> box telling the State to be.

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                // set the value= of your <input>s to be equal to the State Object value that represents that <input> value
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                // set the value= of your <input>s to be equal to the State Object value that represents that <input> value
            />
            <input 
                type="email" 
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={formData.email}
                // set the value= of your <input>s to be equal to the State Object value that represents that <input> value
            />
        </form>
    )
}