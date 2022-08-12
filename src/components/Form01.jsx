import React from "react"

export default function Form01() {

    const [firstName, setFirstName] = React.useState("")

    console.log(firstName)

    function handleChange(event) {
        // event object gets passed to the function by the Browser
        // console.log("Changed!")
        // console.log(event)
        // Object { _reactName: "onChange", _targetInst: null, type: "change", nativeEvent: input, target: input, ...}
        // console.log(event.target.value)
        setFirstName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}