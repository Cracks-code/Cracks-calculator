import React from "react";
import '../css/Take2v.css';

export default function Take2v(props) {
    return (
        <>
        <div className="mainContainer">
            <div className="sumMcontainer text-dark">
                <div className="mb-3 text-center">
                    <h2>{props.Mhading}</h2>
                </div>
                <div className="mb-3">
                    <li><b>Defination</b></li>
                    <p>{props.defn}</p>
                </div>
                <div className="container mb-3">
                    <input type="number" value={props.value} onChange={e => props.setValue(e.target.value)} className="num1 form-control" id="num1" placeholder={props.placeHolder1} />

                    <input type="number" value={props.value2} onChange={e => props.setValue2(e.target.value)} className="mt-3  num2 form-control" id="num2" placeholder={props.placeHolder2} />

                    <div className="fbtn">
                        <button onClick={props.btnFunc} className="btn btn-primary btn-sm my-3">{props.btnName}</button>
                    </div>
                </div>
                <div className="mt-5">
                    <li><b>Answer :</b> {props.result?props.result:"Enter Value And get Answer"}</li>
                </div>
                <div className="mb-3">
                <li><b>Solution</b></li>
                    <p></p>
                </div>
            </div>
        </div>
        </>
    )
}

Take2v.defaultProps = {
    placeHolder1: "Enter a Value 1",
    placeHolder2: "Enter a Value 2"
}
