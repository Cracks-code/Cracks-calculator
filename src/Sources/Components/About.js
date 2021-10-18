import React from 'react'
import '../css/About.css';

export default function About() {
    return (
        <>
            <div className="mainaboutContainer">
                <div className="aboutMcontainer text-dark">
                    <div className="mb-3 text-center">
                        <h2>Hello - Cracks Calc</h2>
                    </div>
                    <div className="mb-3">
                        <p><b>Hello users welcome to Crack-Calculator</b> you can get any type of sum and find solution any type of maths equation this is a maths treasur</p>
                    </div>
                    <br />
                    <div className="container mb-3">
                        <span><b>My Youtube Channel</b></span>
                        <p>I have a one youtube channel in youtube platform with 1m subscriber pleas subscribe my channel</p>
                        <a style={{marginBottom: "10px"}} href="https:\www.youtube.com" target="_blank" rel="noreferrer" className="btn btn-primary text-light btn-sm my-3">Youtube</a>

                        <br />

                        <label><b>My GitHub Id</b></label>
                        <p>I have a GitHub id GitHub. I can post many type of code in my id and more and more app and website in my Id. This app is also open sources you can get code by my id</p>
                        <a href="https:\www.github.com" target="_blank" rel="noreferrer" className="btn btn-primary text-light btn-sm my-3">GitHub</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
