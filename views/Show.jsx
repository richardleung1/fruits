const React = require('react')
class Show extends React.Component {
    render () {
        // const fruit = this.props.fruit
        // return (
        //     <div>
        //         <h1> Show Page </h1>
        //         The {fruit.name} is {fruit.color}
        //         <br />
        //         {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
        //         <a href="/fruits">Index</a>
        //     </div>
        // )
        
        return (
            <div>
                <h1>Fruits show page</h1>
                The { this.props.fruit.name } is { this.props.fruit.color }.
                <br />
                { this.props.fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }.
                <br />
                <br />
                <a href={'/fruits'}>Fruits Index Page</a>
            </div>
        )
    }
}
module.exports = Show