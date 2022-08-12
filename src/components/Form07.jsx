import React from "react"

export default function Form07() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: false,
            // ^we need to add this property, this correlates to the checkbox we added below
        }
    )

    console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        // so we first DESTRUCTURE the property/values inside event.target
        // we can now bring in other things like : type and checked
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
                // we can now shorten these to just name and value
                // and add a ternary with the new properties added above
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
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="email" 
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                placeholder="Comments here..."
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                    type="checkbox"
                    // we add a new type of input a checkbox
                    id="isFriendly"
                    // this correlates the checkbox to the specific label
                    checked={formData.isFriendly}
                    // ^this property is new, 
                    // and it does not correlate to event.target.value
                    // but to event.target.checked
                    // and it only accepts booleans
                    onChange={handleChange}
                    name="isFriendly"
                    // this has to match our State Object property
             />
            <label htmlFor="isFriendly">Are you Friendly?</label>
            {/* this htmlFor= correlates the label to the specific checkbox */}
        </form>
    )
}