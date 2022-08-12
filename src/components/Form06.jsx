import React from "react"

export default function Form06() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
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
            {/* <textarea>Whatever you put inside</textarea> */}
            {/* normally in HTML <textarea></textarea> is not self-closing */}
            {/* REACT changed this to be a self-closing element */}
            <textarea 
                placeholder="Comments here..."
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
        </form>
    )
}