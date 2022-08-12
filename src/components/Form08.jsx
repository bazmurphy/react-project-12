import React from "react"

export default function Form08() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: false,
            employment: "",
        }
    )

    console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
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
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
             />
            <label htmlFor="isFriendly">Are you Friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    // we add a new type of input a radio button
                    id="unemployed"
                    // this correlates the radio button to the specific label
                    name="employment"
                    // ^this has to match the STATE Object Property
                    // all three need the same NAME so that only ONE can be SELECTED at any given TIME
                    // and because we are only updating ONE State Object Property
                    value="unemployed"
                    // each one must have its own unique "value" which will determine what gets added to the State Object Property
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                    // we CANNOT do what we did with checkboxes because those use BOOLEAN values
                    // but we can make it a boolean if the VALUE is equal to the State Object value
                    // Now REACT is in control of this input, rather than the input having its own HTML based State
                    // this is now a CONTROLLED INPUT

                    // HOW THIS WORKS:
                    // when we click the radio button
                    // it runs the handleChange function
                    // it grabs the name/value/type/checked out of the event.target
                    // we setFormData, first bringing in all the prevFormData, 
                    // and then we use [name] which we have already set to "employment" as the key for the State we are updating
                    // it then runs the condition (ternary operator)
                    // it then gets "value"
                    // which is the value we defined in our <input> element 
                    // value="unemployed"
                    // then REACT re-renders our Component
                    // and inside the <input> element 
                    // checked={formData.employment === "unemployed"}
                    // it checks to see if the current "checked=" is = "unemployed"
                    // then that becomes a TRUE statement
                    // so "checked=" becomes TRUE
                    // and all the other radio button checked= become FALSE
                    // (so that only one radio button can be checked at any given time)

                />
                <label htmlFor="unemployed">Unemployed</label>
                {/* this correlates the label to the radio button */}
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

        </form>
    )
}