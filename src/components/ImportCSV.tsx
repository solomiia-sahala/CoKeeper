import { useState, ChangeEvent } from "react";
import * as Papa from 'papaparse';
import { useHistory } from 'react-router';

import api from '../services/api';

import '../styles/ImportCSV.scss';

const ImportCSV = () => {
    const [csvFile, setCsvFile] = useState<File | undefined>(undefined);
    const history = useHistory();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files == null) {
            throw new Error("Error finding e.target.files, input is empty");
        }
        setCsvFile(event.target.files[0]);
    };

    const updateData = async (result: { data: Object[] }) => {
        let data = result.data[0];
        let userRef = await api.createContact(data);
        await api.updateContact(userRef, { "id": userRef });
        history.push(`/aboutContact/${userRef}`);
    }

    const importCSV = () => {
        if (csvFile) {
            Papa.parse(csvFile, {
                complete: updateData,
                header: true
            });
        }
    };

    return (
        <div className="import-csv">
            <div className="header">
                <h1>Import contact from .CSV file</h1>
            </div>
            <input
                className="csv-input"
                type="file"
                name="file"
                onChange={handleChange}
            /><br />
            <button onClick={importCSV}>Upload contact</button>
        </div >
    )
}

export default ImportCSV;
