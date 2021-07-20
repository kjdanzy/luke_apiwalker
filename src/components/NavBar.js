import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { navigate } from '@reach/router';

const NavBar = () => {
    const [selectOptions, setSelectOptions] = useState([])
    const [formInfo, setFormInfo] = useState({
        category: "people",
        id: ""
    })


    useEffect(() => {
        axios.get('https://swapi.dev/api/')
            .then(res => {
                console.log(res)
                setSelectOptions(Object.keys(res.data))
            })
            .catch(err => console.log(err))
    }, [])

    const onChangeHandler = (event) => {
        setFormInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    const { category, id } = formInfo

    const onSubmitHandler = (event) => {
        event.preventDefault()
        navigate(`/${category}/${id}`)
    }

    return (
        <div className="container">
            <form className="form-group" onSubmit={onSubmitHandler}>
                <div className="input-group mr-5">
                    <label> Search for:</label>
                    <select className="form-control" name="category" onChange={onChangeHandler}>
                        {/* <option>---Please select a category---</option> */}
                        {
                            selectOptions.map((selectOption, idx) => {
                                return <option key={idx} value={selectOption}>{selectOption}</option>
                            })
                        }
                    </select>
                </div>
                <div className="input-group">
                    <label htmlform="id">ID:  </label>
                    <input className="form-control" type='number' name="id" onChange={onChangeHandler} placeholder="Enter a number" />
                    <input className="form-control" type="submit" value="Search" />
                </div>
            </form>
        </div >
    )
}

export default NavBar