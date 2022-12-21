import { Symptoms } from "./Symptoms";
import { useState } from 'react'
import { Link } from "react-router-dom";


const generalSymptoms = ["Fever", "Allergy", "Rash", "The morning after pill"];
const headSymptoms = ["Headache", "Migraine"];
const neckSymptoms = ["Runny nose", "Cough"];
const torsoSymptoms = ["Rash", "Constipation", "Diarrhea", "Abdominal pain", "Bits"];
const armsSymptoms = ["Rash","Bits", "Wounds and minor burns"];
const legsSymptoms = ["Rash","Bits", "Wounds and minor burns", "Fungal skin infections"];

export function Main() {
    const [symptomsArray, setSymptomsArray] = useState("")

    function handleClick(e) {
        console.log(e.target.id);
        if (e.target.id === "General") {
            setSymptomsArray(generalSymptoms)

        }
        if (e.target.id === "Head") {
            setSymptomsArray(headSymptoms)
        }
        if (e.target.id === "Neck") {
            setSymptomsArray(neckSymptoms)
        }
        if (e.target.id === "Torso") {
            setSymptomsArray(torsoSymptoms)
        }
        if (e.target.id === "Arms") {
            setSymptomsArray(armsSymptoms)
        }
        if (e.target.id === "Legs") {
            setSymptomsArray(legsSymptoms)
        }
    }

    return (
        <div className="bodyImage">
            <img src="/body-image-small.png" useMap="#image-map" alt="" />

            <map name="image-map">
                <area id="Head" onClick={handleClick} alt="head" title="head" coords="101,37,36" shape="circle" />
                <area id="Neck" onClick={handleClick} alt="neck" title="neck" coords="85,75,119,74,117,86,85,87" shape="poly" />
                <area id="Torso" onClick={handleClick} alt="torso" title="torso" coords="54,89,148,235" shape="rect" />
                <area id="Arms" onClick={handleClick} alt="arms" title="arms" coords="150,102,188,170,199,239,196,250,187,254,175,249,158,178,150,155,150,134" shape="poly" />
                <area id="Arms" onClick={handleClick} alt="arms" title="arms" coords="52,104,14,168,0,246,9,251,23,253,30,243,39,181,52,161" shape="poly" />
                <area id="Legs" onClick={handleClick} alt="legs" title="legs" coords="54,238,44,326,52,382,34,396,31,409,43,417,85,398,70,332,84,258,119,254,132,323,118,399,157,418,168,411,173,398,151,383,158,329,146,237" shape="poly" />
            </map>

            <div className="buttons">
                <button id="General" onClick={handleClick}>General</button>
                <button id="Head" onClick={handleClick}>Head</button>
                <button id="Neck" onClick={handleClick}>Neck</button>
                <button id="Torso" onClick={handleClick}>Torso</button>
                <button id="Arms" onClick={handleClick}>Arms</button>
                <button id="Legs" onClick={handleClick}>Legs</button>
                </div>
                <Link to="/product">specific drug </Link>
                <Symptoms arr={symptomsArray} />

            
        </div>
    )
}