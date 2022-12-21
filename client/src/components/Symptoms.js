
export function Symptoms({ arr }) {

    function symptomClickHandler(e){
console.log(e.target.innerHTML);
    }
    
    return (
        <div className="symptoms">
            {Array.isArray(arr)&&<h3>Please choose a symptom</h3>}
            {Array.isArray(arr) ?
                arr.map(element => {
                    return (
                    <h5 onClick={symptomClickHandler}>{element}</h5>)
                })
                : null}
        </div>
    )
}