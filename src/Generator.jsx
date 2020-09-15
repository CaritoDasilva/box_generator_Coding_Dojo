import React, { useState } from 'react'

const Generator = (props) => {
    const { setColor, setIsSubmitted, setBoxes, boxes } = props;
    const handleChange = (e) => {
    }
    const createBox = (e) => {
        e.preventDefault()
        setColor(e.target.color.value);
        boxes.push(e.target.color.value);
        console.log("createBox -> boxes", boxes)

        setBoxes(boxes)
        setIsSubmitted(true)


    }
    return (
        <div className="container">
            <div className="col-md-6 offset-md-3" >
                <div className="card">
                    <form action="" onSubmit={(e) => createBox(e)}>
                        <div className="input-group mb-3">
                            <input name="color" type="text" className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />

                        </div>

                        <button type="submit" className="btn btn-info">Add Color!</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Generator;