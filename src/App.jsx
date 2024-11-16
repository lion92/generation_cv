import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVForm from '../src/CVForm';
import CVPreview from '../src/CVPreview';
import CVPDF from '../src/CVPDF';
import '../src/css/app.css';

const App = () => {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: '',
      lastName: '',
      birthDate: '',
      phone: '',
      address: '',
      email: '',
    },
    experiences: [
      { position: '', company: '', startDate: '', endDate: '', description: '' },
    ],
    education: [
      { degree: '', institution: '', startDate: '', endDate: '', description: '' },
    ],
    skills: '',
    hobbies: [''],
  });

  return (
      <div className="app">
        <div className="form-container">
          <CVForm cvData={cvData} setCvData={setCvData} />
        </div>
        <div className="preview-container">
          <CVPreview cvData={cvData} />
          <PDFDownloadLink
              document={<CVPDF cvData={cvData} />}
              fileName={`${cvData.personalInfo.name}_CV.pdf`}
          >
            {({ loading }) => (loading ? 'Génération...' : 'Télécharger le PDF')}
          </PDFDownloadLink>
        </div>
      </div>
  );
};

export default App;
