import Modal from './Modal/Modal';

const DrugsItemsCard = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div>
                <h2>DATA</h2>
            </div>
            <div>
                <button onClick={props.onClose}>Close</button>
            </div>
        </Modal>
    );
};

export default DrugsItemsCard;
