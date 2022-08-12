import React from "react"

export default function Form03() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
        }
        // you create a State OBJECT when you initialise the default State value
        // to store more than one value associated with each form input
    )

    console.log(formData)
    // Object { firstName: "Baz", lastName: "Murphy" }

    function handleChange(event) {
        // console.log(event.target)
        // <input type="text" placeholder="First Name">
        // console.log(event.target.name)
        // this demonstrates it recognises different form inputs and their associated "name"
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // we create a new object and spread the previous object into it

                // and now we need to update the :
                // event.target.name: event.target.value
                // this is the TEMPTATION ^ but this won't work
                
                // we need to use ES6 feature - COMPUTED PROPERTIES
                // surround your property/key with [ ] and then it can get its name dynamically
                [event.target.name] : event.target.value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                // this MUST match the property name inside the State OBJECT
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                // this MUST match the property name inside the State OBJECT
            />
        </form>
    )
}