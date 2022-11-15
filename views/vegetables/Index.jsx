const React = require("react")
class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                {
                    fruits.map((vegetables, i) => {
                        return (
                            // anchor tag to take us to each index vegetable page
                            <li>
                                The{' '}
                            
                                <a href={`/vegetables/${i}`}>{vegetables.name}</a>
                                {' '} is {vegetables.color} <br></br>
                                {
                                    vegetables.readyToEat
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