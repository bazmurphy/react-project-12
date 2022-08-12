    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

import React from "react";

export default function FormChallenge() {
   
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false,
    })

    function handleChange(event) {  
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {   
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value,
            }
        })
        console.log(formData)
    }
    
    function handleSubmit(event) {  
        event.preventDefault()
        
        const infoDiv = document.querySelector('.info');
        // target the div with class of info
        infoDiv.innerHTML = "";
        // reset if already displaying

        let infoMessage = document.createElement('p');
        // create a new p element for the info message

        if (formData.password === formData.confirmPassword) {
            // console.log("Successfully signed up")
            infoMessage.textContent = "Successfully signed up";
            // set the text content of the info message
            infoDiv.appendChild(infoMessage);
            // append the info message to the info div

            if (formData.newsletter) {
                // console.log("Thanks for signing up for our newsletter!");
                let newsletterMessage = document.createElement('p')
                // create a new p element for the newsletter message
                newsletterMessage.textContent = "Thanks for signing up for our newsletter!";
                // set the text content of the newsletter message
                infoDiv.appendChild(newsletterMessage);
            }

        } else {
            // console.log("passwords to not match")
            infoMessage.textContent = ("Passwords do not match");
            infoDiv.appendChild(infoMessage);
        }

        console.log(formData)

        const objectDiv = document.querySelector('.object');
        objectDiv.innerText = `Demo:
        React STATE Object
        {
        formData.email : ${formData.email} 
        formData.password : ${formData.password}
        formData.confirmPassword: ${formData.confirmPassword}
        formData.newsletter : ${formData.newsletter}
        }`

    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="newsletter"
                        onChange={handleChange}
                        checked={formData.newsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
                <div className="info"></div>
                <div className="object"></div>
            </form>
        </div>
    )
}