import { useEffect, useState } from 'react';
import api from '../api/api';
import DrugsItems from './DrugsItems';
import DrugsItemsCard from './DrugsItemsCard';
const AllergyMeds = ['Oxymetazoline', 'Terfenadine', 'Phenylephrine'];
const PainMeds = ['Capsaicin', 'Aspirin', 'Ibuprofen'];
const TheMorningAfterPillMeds = ['LEVONORGESTREL '];
const HeadacheMeds = [
    'Ibuprofen',
    'Dipyrone (Optalgin, V-Dalgin)',
    'Paracetamol',
];
const MigraineMeds = ['Acamol Focus', 'Ibuprofen'];
const ColdMeds = ['Xylometazoline', 'Phenylpropanolamine ', 'COLDEX'];
const CoughMeds = ['Bromhexine'];
const SinusitisMeds = ['Oxymetazoline', 'Naphazoline', 'Phenylpropanolamine'];
const RashMeds = ['Crotamiton', 'Selenium sulphide'];
const HeartburnMeds = [
    ' Bismuth Subsalicylate',
    'Gaviscon',
    'Calcium carbonate',
];
const DiarrheaMeds = ['Bismuth Subsalicylate'];
const CandidiasisMeds = ['Tolnaftate', 'Selenium sulphide'];
const AcneMeds = ['Benzoyl peroxide', 'Salicylic acid', 'Triclosan'];
const FungalSkinInfectionsMeds = ['Tolnaftate', 'Salicylic acid'];

export function Symptoms({ arr }) {
    const [drugIsShown, setDrugIsShown] = useState(false);
    const [medicineList, setMedicineList] = useState('');
    const [specificDrug, setSpecificDrug] = useState(null);
    const [drugsData, setDrugsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //
    const [error, setError] = useState('');
    console.log(error);
    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/');
                const dataArray = response.data;
                setDrugsData(dataArray);
            } catch (err) {
                if (err.response) {
                    // Not in the 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(err.message);
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [setIsLoading, setDrugsData]);

    //
    const showDrugHandler = (e) => {
        setSpecificDrug(e);
        setDrugIsShown(true);
    };

    const hideDrugHandler = () => {
        setDrugIsShown(false);
    };

    function symptomClickHandler(e) {
        console.log(e.target.innerHTML);
        console.log(medicineList);
        if (e.target.innerHTML === 'Allergy') {
            setMedicineList(AllergyMeds);
        }
        if (e.target.innerHTML === 'Pain') {
            setMedicineList(PainMeds);
        }
        if (e.target.innerHTML === 'The morning after pill') {
            setMedicineList(TheMorningAfterPillMeds);
        }
        if (e.target.innerHTML === 'Headache') {
            setMedicineList(HeadacheMeds);
        }
        if (e.target.innerHTML === 'Migraine') {
            setMedicineList(MigraineMeds);
        }
        if (e.target.innerHTML === 'Acne') {
            setMedicineList(AcneMeds);
        }
        if (e.target.innerHTML === 'Cold') {
            setMedicineList(ColdMeds);
        }
        if (e.target.innerHTML === 'Cough') {
            setMedicineList(CoughMeds);
        }
        if (e.target.innerHTML === 'Sinusitis') {
            setMedicineList(SinusitisMeds);
        }
        if (e.target.innerHTML === 'Rash') {
            setMedicineList(RashMeds);
        }
        if (e.target.innerHTML === 'Heartburn') {
            setMedicineList(HeartburnMeds);
        }
        if (e.target.innerHTML === 'Diarrhea') {
            setMedicineList(DiarrheaMeds);
        }
        if (e.target.innerHTML === 'Fungal skin infections') {
            setMedicineList(FungalSkinInfectionsMeds);
        }
        if (e.target.innerHTML === 'Candidiasis') {
            setMedicineList(CandidiasisMeds);
        }
    }

    return (
        <div className='symptoms'>
            {Array.isArray(arr) && <h3>Please choose a symptom</h3>}
            {console.log(drugsData)}
            {Array.isArray(arr)
                ? arr.map((element) => {
                      return (
                          <h5 onClick={symptomClickHandler}>
                              <DrugsItems
                                  name={element}
                                  onShowDrugItem={() =>
                                      showDrugHandler(element)
                                  }
                                  onClose={hideDrugHandler}
                              />
                          </h5>
                      );
                  })
                : null}
            {drugIsShown && (
                <DrugsItemsCard
                    medList={medicineList}
                    drugsData={specificDrug}
                    onClose={hideDrugHandler}
                />
            )}
        </div>
    );
}
