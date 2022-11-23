const React = require("react")
const DefaultLayout = require("../layout/Default")

// create the html for the page
// NOTE: action will be 
// With name attribute is has to match corresponding property


class New extends React.Component {
    render() {
        return (
            
            <DefaultLayout title="New Fruit Page">
                
                <nav>
                    <a href="/fruits">Home</a>
                </nav>
                <br />
                <form action="/fruits" method="POST">
                Name: <input type="text" name="name" />
                <br />
                <br />
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" />
                <br/>
                <input type="submit" name="" value="Create Fruit"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;