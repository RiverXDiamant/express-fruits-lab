
// react components
const React = require('react') // react package

class Show extends React.Component {
    render () {
        // make variable to grab data
        // destructuring from an object
        const {name, color, readyToEat} = this.props.fruit
        // console.log(this.props)
     return (
        //start writing JSX here
        // can only have 1 parent element but unlimited nested elements
        <div>
            <h1> Show Page </h1>
            <div>
                <p>The {name} is {color}.</p>{readyToEat ? " It's ready to eat" : "It is not ready to eat... don't touch that"}
            </div>
       </div>

      );
     }
  }

// In JSW, We can write JavaScript inside of the HTML using curly braces
// Loops and conditional rendering helps display data easier
  module.exports  = Show;

