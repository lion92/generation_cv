import React from 'react';
import '../src/css/form.css';

const CVForm = ({ cvData, setCvData }) => {
    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setCvData({ ...cvData, personalInfo: { ...cvData.personalInfo, [name]: value } });
    };

    const handleArrayChange = (e, index, field, key) => {
        const updatedArray = [...cvData[key]];
        updatedArray[index][field] = e.target.value;
        setCvData({ ...cvData, [key]: updatedArray });
    };

    const addItem = (key) => {
        const newItem =
            key === 'hobbies' || key === 'skills'
                ? ''
                : { degree: '', institution: '', startDate: '', endDate: '', description: '' };
        setCvData({
            ...cvData,
            [key]: [...cvData[key], newItem],
        });
    };

    return (
        <form>
            <h2>Informations personnelles</h2>
            <input
                type="text"
                name="name"
                placeholder="Nom"
                value={cvData.personalInfo.name}
                onChange={handlePersonalChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Prénom"
                value={cvData.personalInfo.lastName}
                onChange={handlePersonalChange}
            />
            <input
                type="date"
                name="birthDate"
                placeholder="Date de Naissance"
                value={cvData.personalInfo.birthDate}
                onChange={handlePersonalChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                value={cvData.personalInfo.phone}
                onChange={handlePersonalChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Adresse"
                value={cvData.personalInfo.address}
                onChange={handlePersonalChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={cvData.personalInfo.email}
                onChange={handlePersonalChange}
            />

            <h2>Expériences professionnelles</h2>
            {cvData.experiences.map((exp, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Poste"
                        value={exp.position}
                        onChange={(e) => handleArrayChange(e, index, 'position', 'experiences')}
                    />
                    <input
                        type="text"
                        placeholder="Entreprise"
                        value={exp.company}
                        onChange={(e) => handleArrayChange(e, index, 'company', 'experiences')}
                    />
                    <input
                        type="date"
                        placeholder="Date de début"
                        value={exp.startDate}
                        onChange={(e) => handleArrayChange(e, index, 'startDate', 'experiences')}
                    />
                    <input
                        type="date"
                        placeholder="Date de fin"
                        value={exp.endDate}
                        onChange={(e) => handleArrayChange(e, index, 'endDate', 'experiences')}
                    />
                    <textarea
                        placeholder="Description"
                        value={exp.description}
                        onChange={(e) => handleArrayChange(e, index, 'description', 'experiences')}
                    />
                </div>
            ))}
            <button type="button" onClick={() => addItem('experiences')}>Ajouter une expérience</button>

            <h2>Formations</h2>
            {cvData.education.map((edu, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Diplôme"
                        value={edu.degree}
                        onChange={(e) => handleArrayChange(e, index, 'degree', 'education')}
                    />
                    <input
                        type="text"
                        placeholder="Établissement"
                        value={edu.institution}
                        onChange={(e) => handleArrayChange(e, index, 'institution', 'education')}
                    />
                    <input
                        type="date"
                        placeholder="Date de début"
                        value={edu.startDate}
                        onChange={(e) => handleArrayChange(e, index, 'startDate', 'education')}
                    />
                    <input
                        type="date"
                        placeholder="Date de fin"
                        value={edu.endDate}
                        onChange={(e) => handleArrayChange(e, index, 'endDate', 'education')}
                    />
                    <textarea
                        placeholder="Description"
                        value={edu.description}
                        onChange={(e) => handleArrayChange(e, index, 'description', 'education')}
                    />
                </div>
            ))}
            <button type="button" onClick={() => addItem('education')}>Ajouter une formation</button>

            <h2>Compétences</h2>
            {cvData.skills.map((skill, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Compétence"
                        value={skill}
                        onChange={(e) => {
                            const updatedSkills = [...cvData.skills];
                            updatedSkills[index] = e.target.value;
                            setCvData({ ...cvData, skills: updatedSkills });
                        }}
                    />

                </div>
            ))}
            <button type="button" onClick={() => addItem('skills')}>Ajouter une compétence</button>

            <h2>Loisirs</h2>
            {cvData.hobbies.map((hobby, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Loisir"
                        value={hobby}
                        onChange={(e) => {
                            const updatedHobbies = [...cvData.hobbies];
                            updatedHobbies[index] = e.target.value;
                            setCvData({ ...cvData, hobbies: updatedHobbies });
                        }}
                    />
                </div>
            ))}
            <button type="button" onClick={() => addItem('hobbies')}>Ajouter un loisir</button>
        </form>
    );
};

export default CVForm;
