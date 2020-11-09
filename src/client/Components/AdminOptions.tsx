import React from 'react';
import { useState, useEffect } from 'react';

const AdminOptions: React.FC = (props: AdminProps) => {
    // const [readOnly, setReadOnly] = useState<Boolean>(true);
    // const [chirp, setChirp] = useState({
    //     name: "",
    //     text: "",
    // });
    // const getChirp = async () => {
    //     let res = await fetch('/api/chirps');
    //     let chirpsArr = await res.json();
    //     console.log("chirp", chirpsArr);
    //     setChirp(chirpsArr.reverse());
    // }
    // const deleteChirp = async (id: string) => {
    //     console.log("ID", id);
    //     await fetch(`/api/chirps/${id}`, {
    //         method: "DELETE",
    //         body: JSON.stringify(id),

    //     });
    //     getChirp();
    // }
    // const handleInput = async (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    //     let { value } = e.target;

    //     //console.log("e", value);
    //     if (key === "1") {
    //         chirp.name = value;
    //     } else {
    //         chirp["text"] = value;
    //     }
    //     await setChirp(chirp);
    //     console.log("chirp", chirp);
    // }
    // const cardContent = (name: string, text: string) => {
    //     if (readOnly) {
    //         return (
    //             <div>
    //                 <h5 className="card-title">{name}</h5>
    //                 <h6 className="card-subtitle mb-2 text-muted">{text}</h6>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 <input
    //                     type="text"
    //                     className="form-control"
    //                     placeholder="name"
    //                     onChange={(e) => handleInput(e, "1")}
    //                 />
    //                 <span className="input-group-text">Chirp</span>
    //                 <input
    //                     className="form-control"
    //                     onChange={(e) => handleInput(e, "2")}

    //                 />
    //             </div>
    //         )
    //     }
    // }
    // console.log("CHECK")
    return (
        <h1> Admin Options</h1>

    )
};

export default AdminOptions;
interface AdminProps {

}
interface chirp {
    id: string,
    name: string,
    text: string
}