import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Details = (props) => {
    const { category, id } = props
    const [info, setInfo] = useState([])

    useEffect(() => {
        console.log(`https://swapi.dev/api/${category}/${id}/`)
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res => {
                console.log("got the data!")
                console.log(res.data)
                setInfo(res.data)
                console.log(props)
            })
    }, [category, id])

    return (
        <div>
            <div className="card">
                <h1>Category requested:  {category}</h1>
                <h1>ID requested:  {id}</h1>
                {
                    category === "people" ?
                        <>
                            < h1 > Name : {info.name}</h1>
                            <h3>height:  {info.height}</h3>
                            <h4>mass:  {info.mass}</h4>
                            <h5>hair_color:  {info.hair_color}</h5>
                            <h6>skin_color:  {info.skin_color}</h6>
                        </>
                        :
                        category === "planets" ?
                            <>
                                <h1>Name:  {info.name}</h1>
                                <h3>climate:  {info.climate}</h3>
                                <h4>terrain:  {info.terrain}</h4>
                                <h5>surface_water:  {info.surface_water}</h5>
                                <h6>population:  {info.population}</h6>
                            </> : ""
                }
            </div>
        </div >
    );
}

export default Details