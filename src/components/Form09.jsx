import React from "react"

export default function Form09() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: false,
            employment: "",
            favColor: "",
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
            <h2>Forms in React</h2>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="form-first-name"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="form-last-name"
            />
            <input 
                type="email" 
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="form-email"
            />
            <textarea 
                placeholder="Comments here..."
                onChange={handleChange}
                name="comments"
                value={formData.comments}
                className="form-comments"
            />

            <label htmlFor="isFriendly">Are you Friendly?</label>
            <input 
                        type="checkbox"
                        id="isFriendly"
                        checked={formData.isFriendly}
                        onChange={handleChange}
                        name="isFriendly"
            />

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
    

                />
                <label htmlFor="unemployed">Unemployed</label>
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <select 
                id="favColor"
                // ^ this correlates the select box to the label above
                value={formData.favColor}
                // ^ this is the property name where the value will be stored in the State Object
                onChange={handleChange}
                name="favColor"
                // ^ this has to mirror our property inside the State Object
            >
                <option value="">- Choose -</option>
                {/* we have to add this option because we need an option that represents our empty string value that we initialise*/}
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

        </form>
    )
}