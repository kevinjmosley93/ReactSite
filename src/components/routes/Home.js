import React from 'react'
import Person from '../Person'

const Home = (props) => {
    const { name, suffix, people} = props
    // console.log('home name', people)
    return (
        <div>
            <h1> the {name} family aka {suffix} their names are below </h1>
            {people.map(person => {
                console.log('home person', person)
                return (<Person key={ person.id } name={person.name} />)})}
        </div>
    )
}

export default Home
