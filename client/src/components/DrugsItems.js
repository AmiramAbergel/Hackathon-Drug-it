const DrugsItems = (props) => {
    return (
        <li>
            <button onClick={props.onShowDrugItem}>
                <h3>{props.name}</h3>
            </button>
        </li>
    );
};

export default DrugsItems;
