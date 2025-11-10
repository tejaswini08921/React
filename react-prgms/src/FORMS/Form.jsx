import React, { useState } from 'react'

const Form = () => {
    let [state, setState] = useState({
        trainer: "",
        subject: "",
        gender: "",
        branch: "",
        skills: []
    })

    let handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    let handleCheckbox = (e) => {
        let { value, checked } = e.target
        if (checked) {
            setState({ ...state, skills: [...state.skills, value] })
        } else {
            setState({
                ...state,
                skills: state.skills.filter((item) => item !== value)
            })
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log({ ...state });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Trainer Name:</label>
                <input type="text" name="trainer" onChange={handleChange} />

                <br />

                <label>Subject:</label>
                <input type="text" name="subject" onChange={handleChange} />

                <br />

                <label>Gender:</label>
                <input type="radio" name="gender" value="Male" onChange={handleChange} />Male
                <input type="radio" name="gender" value="Female" onChange={handleChange} />Female

                <br />

                <label>Branch:</label>
                <select name="branch" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Rajajinagar">Rajajinagar</option>
                    <option value="Hebbal">Hebbal</option>
                    <option value="Jaynagar">Jaynagar</option>
                </select>

                <br />

                <label>Skills</label><br />
                <input type="checkbox" value="HTML" onChange={handleCheckbox} /> HTML
                <input type="checkbox" value="CSS" onChange={handleCheckbox} /> CSS
                <input type="checkbox" value="JavaScript" onChange={handleCheckbox} /> JavaScript

                <br /><br />

                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default Form
