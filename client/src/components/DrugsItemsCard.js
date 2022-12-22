import Modal from './Modal/Modal';
import '../style/DrugsItemsCard.css';

const DrugsItemsCard = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={'cardDiv'}>
                {props.medList.map((element) =>
                    props.medList.length > 0 ? (
                        <h3>
                            {element}{' '}
                            <hr
                                style={{ width: '75%', margin: '0 auto 10px' }}
                            />
                        </h3>
                    ) : null
                )}
            </div>

            <div>
                <button className={'closeButton'} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default DrugsItemsCard;
