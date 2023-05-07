import React, { useState } from 'react'
import style from '../styles/Contact.module.css'



const contact = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (setName == '' || setEmail == '' || setPhone == '' || setDesc == '') {
            alert('Empty feild is not allowed for sending the contact data to the owner')
        } else {
            try {
                const data = { Name, Email, Phone, desc }
                const response = await fetch("http://localhost:3000/api/postcontact", {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                setName('')
                setEmail('')
                setPhone('')
                setDesc('')
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        } else if (e.target.name == 'email') {
            setEmail(e.target.value)
        } else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setDesc(e.target.value)
        }
    }
    return (
        <div className={style.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={style.mb3}>
                    <label for="exampleInputEmail1" className={style.formlabel}>Name</label>
                    <input type="text" value={Name} onChange={handleChange} className="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" placeholder="Enter Your Name" required/>
                </div>
                <div className={style.mb3}>
                    <label for="email" className={style.formlabel}>Email</label>
                    <input type="email" onChange={handleChange} value={Email} className="form-control" name='email' id="email" placeholder="Enter your Email" required/>
                </div>
                <div className={style.mb3}>
                    <label for="exampleInputEmail1" className={style.formlabel}>Enter your Phone Number</label>
                    <input type="phone" name='phone' value={Phone} onChange={handleChange} className="form-check-input" id="exampleCheck1" required/>
                </div>
                <div class={style.mb3}>
                    <label for="desc" className={style.formlabel}>Enter your Concern Here</label>
                    <textarea value={desc} class="form-control" onChange={handleChange} id="desc" rows="3" name='desc' required></textarea>
                </div>
                <div className={style.btncontainer}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default contact