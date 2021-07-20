import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Planets = (props) => {
    const [resourceID, route] = props
    const [resourceList, setResourceList] = useState([])

    const getData = () => {
        if (resourceID !== undefined) {

            console.log('https://swapi.dev/api/' + route + '/' + resourceID)
            axios.get('https://swapi.dev/api/' + route + '/' + resourceID)
                .then(res => {
                    console.log(res)
                    setResourceList(res.data)
                })
                .catch(err => console.log(err))
        }

    }

    const showResource = () => {
        window.location.replace('/' + route + '/' + resourceID)
    }

    useEffect(() => {
        getData()
    }, []);


    // const onChangeHandler = (event) => {
    //     setResourceID(event.target.value)
    //     console.log(event.target.value)
    // }

    const onClickHandler = (event) => {
        getData()
    }

    // const onSelectChangeHandler = (event) => (
    //     setRoute(event.target.value)
    // )
    const { name, climate, terrain, surface_water, population } = resourceList

    return (
        <div>
            <div className="card">
                <h1>Name:  {name}</h1>
                <h3>climate:  {climate}</h3>
                <h4>terrain:  {terrain}</h4>
                <h5>surface_water:  {surface_water}</h5>
                <h6>population:  {population}</h6>
            </div>
        </div>
    );

}


export default Planets