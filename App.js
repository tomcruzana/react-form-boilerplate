import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "Male",
            destination: "",
            vegetarian: false,
            kosher: false,
            lactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        placeholder="First Name" 
                        name="firstName" 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.firstName}
                    />
                    <br />
                    <input 
                        placeholder="Last Name" 
                        name="lastName" 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.lastName}
                    />
                    <br />
                    <input 
                        placeholder="Age" 
                        name="age" 
                        type="text" 
                        onChange={this.handleChange}
                        value={this.state.age}
                    />
                    <br />
                    
                    <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>

                    <br />
                    
                    <label>Destination:</label>
                    <select 
                        value={this.state.destination}
                        onChange={this.handleChange}
                        name="destination"
                    >
                        <option value="New York">New York</option>
                        <option value="California">California</option>
                        <option value="Washington DC">Washington DC</option>
                    </select>

                    <br />
                    
                    <label>
                        <input 
                            type="checkbox" 
                            name="vegetarian"
                            checked={this.state.vegetarian}
                            onChange={this.handleChange}
                        /> Vegetarian
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="kosher"
                            checked={this.state.kosher}
                            onChange={this.handleChange}
                        /> Kosher
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="lactoseFree"
                            checked={this.state.lactoseFree}
                            onChange={this.handleChange}
                        /> Lactose Free
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {(this.state.vegetarian) && "Vegetarian "}
                    {(this.state.kosher) && "Kosher "}
                    {(this.state.lactoseFree) && "Lactose Free "}
                </p>
            </main>
        )
    }
}

export default App
