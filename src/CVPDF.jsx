import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        backgroundColor: '#f4f7fc',
    },
    header: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
        color: '#2c3e50',
    },
    personalInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    personalSection: {
        fontSize: 12,
        color: '#34495e',
    },
    section: {
        marginBottom: 15,
        paddingBottom: 10,
        borderBottom: '1px solid #ecf0f1',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: '#3498db',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        lineHeight: 1.5,
    },
    experience: {
        marginBottom: 10,
    },
    skills: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skillItem: {
        backgroundColor: '#3498db',
        color: 'white',
        fontSize: 10,
        padding: 5,
        margin: 3,
        borderRadius: 3,
    },
    hobbies: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    hobbyItem: {
        fontSize: 12,
        marginRight: 10,
    },
});

const CVPDF = ({ cvData }) => {
    // Ensure that skills and hobbies are arrays
    const skills = Array.isArray(cvData.skills) ? cvData.skills : [];
    const hobbies = Array.isArray(cvData.hobbies) ? cvData.hobbies : [];

    return (
        <Document>
            <Page style={styles.page}>
                {/* Header */}
                <Text style={styles.header}>
                    {cvData.personalInfo.name} {cvData.personalInfo.lastName}
                </Text>

                {/* Personal Information */}
                <View style={styles.personalInfo}>
                    <View style={styles.personalSection}>
                        <Text>Date de Naissance: {cvData.personalInfo.birthDate || 'N/A'}</Text>
                        <Text>Email: {cvData.personalInfo.email || 'N/A'}</Text>
                    </View>
                    <View style={styles.personalSection}>
                        <Text>Téléphone: {cvData.personalInfo.phone || 'N/A'}</Text>
                        <Text>Adresse: {cvData.personalInfo.address || 'N/A'}</Text>
                    </View>
                </View>

                {/* Experiences */}
                <View style={styles.section}>
                    <Text style={styles.title}>Expériences Professionnelles</Text>
                    {cvData.experiences.map((exp, index) => (
                        <View key={index} style={styles.experience}>
                            <Text style={styles.text}>
                                <Text style={{ fontWeight: 'bold' }}>{exp.position || 'Poste'}</Text> chez{' '}
                                {exp.company || 'Entreprise'}
                            </Text>
                            <Text style={styles.text}>
                                {exp.startDate || 'Début'} - {exp.endDate || 'Fin'}
                            </Text>
                            <Text style={styles.text}>{exp.description || 'Description non renseignée.'}</Text>
                        </View>
                    ))}
                </View>

                {/* Education */}
                <View style={styles.section}>
                    <Text style={styles.title}>Formations</Text>
                    {cvData.education.map((edu, index) => (
                        <View key={index}>
                            <Text style={styles.text}>
                                <Text style={{ fontWeight: 'bold' }}>{edu.degree || 'Diplôme'}</Text> à{' '}
                                {edu.institution || 'Établissement'}
                            </Text>
                            <Text style={styles.text}>
                                {edu.startDate || 'Début'} - {edu.endDate || 'Fin'}
                            </Text>
                            <Text style={styles.text}>{edu.description || 'Description non renseignée.'}</Text>
                        </View>
                    ))}
                </View>

                {/* Skills */}
                <View style={styles.section}>
                    <Text style={styles.title}>Compétences</Text>
                    <View style={styles.skills}>
                        {skills.map((skill, index) => (
                            <Text key={index} style={styles.skillItem}>
                                {skill || 'Compétence'}
                            </Text>
                        ))}
                    </View>
                </View>

                {/* Hobbies */}
                <View style={styles.section}>
                    <Text style={styles.title}>Loisirs</Text>
                    <View style={styles.hobbies}>
                        {hobbies.map((hobby, index) => (
                            <Text key={index} style={styles.hobbyItem}>
                                • {hobby || 'Loisir'}
                            </Text>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default CVPDF;
