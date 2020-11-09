import React, { Fragment } from "react";
import { useState, useEffect } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { setConstantValue } from "typescript";

const NewChirp: React.FC = (props: newChirpProps) => {
    // const [user, setUser] = useState<string>("");
    // const [text, setText] = useState<string>("");
    const [chirp, setChirp] = useState({
        name: "",
        text: "",
    });

    const submitChirp = async () => {
        // let data = {
        //     name: "user",
        //     text: "text"
        // };

        await fetch("/api/chirps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(chirp),
        });

    }

    const handleInput = async (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        let { value } = e.target;

        //console.log("e", value);
        if(key === "1") {
            chirp.name = value;
        } else {
            chirp["text"] = value;
        }
        await setChirp(chirp);
        console.log("chirp", chirp);
    }

    //props.history.push("/")


    // useEffect(() => {
    //     submitChirp();
    // }, []);


    return (
        <Fragment>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    onChange={(e) => handleInput(e, "1")}
                />

            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Chirp</span>
                </div>
                
                <input 
                className="form-control" 
                onChange={(e) => handleInput(e, "2")}
                />

            </div>
            <button
                className="submit-btn"
                onClick={submitChirp}
            >Submit</button>
        </Fragment>
    );
};

export default NewChirp;
interface newChirpProps {
    // history: string,
}
interface newChirpState {
    chirps: []
}
interface chirp {
    id: string,
    name: string,
    text: string
}