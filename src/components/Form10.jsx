import React from "react"

export default function Form10() {

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

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        // ^ we need to add the event parameter
        event.preventDefault()
        // ^ and then add this line
        // because this prevents the Submit Button from Refreshing the Page and doing old school behaviour

        // submitToApi(formData)

        // ^ if we had some submitToApi function
        // all we have to do is pass it the formData Object
        // because it has been updating the whole time it recieves input

        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* ^ here we add the onSubmit eventHandler to the form element */}
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
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">- Choose -</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            {/* <input type="submit" value="Send It!" /> */}
            {/* this is the old HTML way of doing things */}

            <button type="submit">Submit</button>
            {/* In HTML5 IF a Button is INSIDE a Form its "type=" is automatically "type=submit" by default */}
        </form>
    )
}