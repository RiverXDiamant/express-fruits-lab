
// react components
const React = require('react') // react package
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
    render () {
        // make variable to grab data
        // destructuring from an object
        const {name, color, readyToEat} = this.props.fruit
        // console.log(this.props)
     return (
        //start writing JSX here
        // can only have 1 parent element but unlimited nested elements
        <DefaultLayout title={`${name} Show Page`}>
            {/* <h1> Show Page </h1> */}
            <nav>
                    <a href="/fruits">Home</a>
                </nav>
            <div>
                <p>The {name} is {color}.</p>
                {readyToEat ? " It's ready to eat! Nom Nom Nom!" : "It is not ready to eat... don't touch that"}
            </div>
       </DefaultLayout>

      );
     }
  }

// In JSW, We can write JavaScript inside of the HTML using curly braces
// Loops and conditional rendering helps display data easier
  module.exports  = Show;

