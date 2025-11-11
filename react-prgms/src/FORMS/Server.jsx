import React, { useState } from 'react'
import axios from "axios";

const Server = () => {

    let [state, setState] = useState({
        username: "",
        password: ""
    });

    let { username, password } = state;

    let handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let payload = { username, password };
            let res = await axios.post("http://localhost:5000/users", payload);
            console.log("Success:", res.data);
        }

        catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder='enter username'
                    onChange={handleChange}
                    value={username}
                />

                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='enter password'
                    onChange={handleChange}
                    value={password}
                />

                <br />

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default Server;
