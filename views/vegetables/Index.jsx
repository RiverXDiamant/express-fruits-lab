const React = require("react")
class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                {
                    vegetables.map((vegetable, i) => {
                        return (
                            // anchor tag to take us to each index vegetables page
                            <li>
                                The{' '}
                            
                                <a href={`/vegetables/${i}`}>{vegetable.name}</a>
                                {' '} is {vegetable.color} <br></br>
                                {
                                    vegetable.readyToEat
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