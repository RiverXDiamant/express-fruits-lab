const React = require("react")
const DefaultLayout = require("../layout/Default")
class Index extends React.Component {
    render() {
        const { fruits } = this.props
        return (
            <DefaultLayout title="Fruits Index Page">
                {/* <h1>Fruits Index Page</h1> */}
                <nav>
                    <a href="/fruits/new">Create Fruit</a>
                </nav>
                <ul>
                {
                    fruits.map((fruit) => {
                        return (
                            // anchor tag to take us to each index fruit page
                            <li>
                                The{' '}
                            
                                <a href={`/fruits/${ fruit.id }`}> { fruit.name } </a>
                                {' '} is {fruit.color} <br />
                                {
                                    fruit.readyToEat
                                    ? "It's ready to eat! Nom Nom Nom!"
                                    : "It is not ready to eat... don't touch."
                                }
                                    <br />
                                    <br />
                                <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                                    <br />
                                <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                    <br />
                                    <input type="submit" value="DELETE" />
                                    <br />
                                    <br />
                                </form>
                            </li>    
                        )
                    })
                }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index