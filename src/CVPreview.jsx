import React from 'react';
import '../src/css/preview.css';

const CVPreview = ({ cvData }) => {
    return (
        <div className="cv-preview">
            {/* Header */}
            <div className="cv-header">
                <h1>{cvData.personalInfo.name} {cvData.personalInfo.lastName}</h1>
                <p>{cvData.personalInfo.email} | {cvData.personalInfo.phone} | {cvData.personalInfo.address}</p>
            </div>

            {/* Expériences Professionnelles */}
            <div className="cv-section">
                <h2>Expériences Professionnelles</h2>
                {cvData.experiences.map((exp, index) => (
                    <div key={index} className="cv-item">
                        <h3>{exp.position} <span>chez {exp.company}</span></h3>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>

            {/* Formations */}
            <div className="cv-section">
                <h2>Formations</h2>
                {cvData.education.map((edu, index) => (
                    <div key={index} className="cv-item">
                        <h3>{edu.degree} <span>à {edu.institution}</span></h3>
                        <p>{edu.startDate} - {edu.endDate}</p>
                        <p>{edu.description}</p>
                    </div>
                ))}
            </div>

            {/* Compétences */}
            <div className="cv-section">
                <h2>Compétences</h2>
                <div className="cv-skills">
                    {cvData.skills.map((skill, index) => (
                        skill.trim() && <span key={index} className="cv-skill">{skill.trim()}</span>
                    ))}
                </div>
            </div>

            {/* Loisirs */}
            <div className="cv-section">
                <h2>Loisirs</h2>
                <ul className="cv-hobbies">
                    {cvData.hobbies
                        .filter((hobby) => hobby.trim() !== '') // Filtre les loisirs vides
                        .map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default CVPreview;
