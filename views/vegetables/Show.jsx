
// react components
const React = require('react') // react package

class Show extends React.Component {
    render () {
      
        const {name, color, readyToEat} = this.props.vegetable
       
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


  module.exports  = Show;