const React = require("react")
class Index extends React.Component {
    render() {
        const { fruits } = this.props
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <nav>
                    <a href="/fruits/new">Create Fruit</a>
                </nav>
                <ul>
                {
                    fruits.map((fruit, i) => {
                        return (
                            // anchor tag to take us to each index fruit page
                            <li>
                                The{' '}
                            
                                <a href={`/fruits/${ fruit.id }`}> { fruit.name } </a>
                                {' '} is {fruit.color} <br></br>
                                {
                                    fruit.readyToEat
                                    ? "It's ready to eat! Nom Nom Nom!"
                                    : "It is not ready to eat... don't touch."
                                }
                                <br />
                            </li>    
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

module.exports = Index