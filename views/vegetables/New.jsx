const React = require("react");

// create the html for the page
// NOTE: action will be 
// With name attribute is has to match corresponding property


class New extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <a href="/vegetables">Home</a>
                </nav>
                <h1>New Vegetables</h1>
                
                <form action="/vegetables" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" name="" value="Create Vegetable"/>
                </form>
            </div>
        )
    }
}

module.exports = New;