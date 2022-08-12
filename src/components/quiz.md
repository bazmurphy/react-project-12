1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
   
    When you press Submit, it takes all the values at the point the button is pressed.

    T: Right before the form is submitted.

2. In a React app, when do you gather all the data from
   the filled-out form?

    As the user is entering them, State is constantly updating to reflect everything entered.

    T: As the form is being filled out. The data is all held in local state.

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?

    name={"firstName"}
    ^ this is the property name it uses to update the property in the State Object
    
    value={dataForm.firstName}
    ^ this is so they are CONTROLLED inputs, REACT controls the value not HTML

    T: name property.


4. What's different about a saving the data from a checkbox element
   vs. other form elements?
    
    It's a boolean, and it uses event.target.checked property, not event.target.value property.

    T: A checkbox uses the checked property to determine what should be saved in state. Other form elements use the value property instead.

5. How do you watch for a form submit? How can you trigger
   a form submit

    You create a button at the bottom of the form, whose type is automatically set to type=submit (because its within a  <form>)
    And you insde the opening <form> tag you put an onSubmit={} eventHandler that runs a handleSubmit function you create
    That handleSubmit function takes the event object as its parameter
    Then you have to run event.preventDefault() to stop the Page Refreshing with old HTML behaviour
    And then you can send that State Object "formData" anywhere you want, eg. to an API.

    T: 
    - Can watch for the submit with an onSubmit handler on the `form` element.
    - Can trigger the form submit with a button click.