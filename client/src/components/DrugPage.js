import React, { useState } from 'react';
export function DrugPage() {
    const [sourceText, setSourceText] = useState('');
    const [resultText, setResultText] = useState('');
    const [sourceLang, setSourceLang] = useState('he');
    const [targetLang, setTargetLang] = useState('en');

    function handleClick() {

        console.log(sourceText);
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(sourceText)}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setResultText(data[0][0][0]);
            });
    }
    return (
        <div className="DrugPage">
            <h3>Medication Name:</h3>
            <h4>Generic Names:</h4>
            <h4>How to use:</h4>
            <h3>Talk with the pharmacist</h3>

            <div className='translateDiv'>
                <label>
                    Source language: 
                    <select value={sourceLang} onChange={e => setSourceLang(e.target.value)}>
                        <option value="he">Hebrew</option>
                        <option value="ar">Arabic</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                    </select>
                </label>
                <label>
                    Target language:
                    <select value={targetLang} onChange={e => setTargetLang(e.target.value)}>
                        <option value="he">Hebrew</option>
                        <option value="ar">Arabic</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                    </select>
                </label>
                <textarea id="sourceText" value={sourceText} onChange={e => setSourceText(e.target.value)} />
                <button id="button" onClick={handleClick}>Translate</button>
                <textarea id="resultText" value={resultText} />
            </div>


        </div>)
}