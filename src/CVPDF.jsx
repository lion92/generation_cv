import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

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

const CVPDF = ({ cvData }) => (
    <Document>
        <Page style={styles.page}>
            {/* Header */}
            <Text style={styles.header}>{cvData.personalInfo.name} {cvData.personalInfo.lastName}</Text>

            {/* Personal Information */}
            <View style={styles.personalInfo}>
                <View style={styles.personalSection}>
                    <Text>Date de Naissance: {cvData.personalInfo.birthDate}</Text>
                    <Text>Email: {cvData.personalInfo.email}</Text>
                </View>
                <View style={styles.personalSection}>
                    <Text>Téléphone: {cvData.personalInfo.phone}</Text>
                    <Text>Adresse: {cvData.personalInfo.address}</Text>
                </View>
            </View>

            {/* Experiences */}
            <View style={styles.section}>
                <Text style={styles.title}>Expériences Professionnelles</Text>
                {cvData.experiences.map((exp, index) => (
                    <View key={index} style={styles.experience}>
                        <Text style={styles.text}>
                            <Text style={{ fontWeight: 'bold' }}>{exp.position}</Text> chez {exp.company}
                        </Text>
                        <Text style={styles.text}>{exp.startDate} - {exp.endDate}</Text>
                        <Text style={styles.text}>{exp.description}</Text>
                    </View>
                ))}
            </View>

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.title}>Formations</Text>
                {cvData.education.map((edu, index) => (
                    <View key={index}>
                        <Text style={styles.text}>
                            <Text style={{ fontWeight: 'bold' }}>{edu.degree}</Text> à {edu.institution}
                        </Text>
                        <Text style={styles.text}>{edu.startDate} - {edu.endDate}</Text>
                        <Text style={styles.text}>{edu.description}</Text>
                    </View>
                ))}
            </View>

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.title}>Compétences</Text>
                <View style={styles.skills}>
                    {cvData.skills.split(',').map((skill, index) => (
                        <Text key={index} style={styles.skillItem}>{skill.trim()}</Text>
                    ))}
                </View>
            </View>

            {/* Hobbies */}
            <View style={styles.section}>
                <Text style={styles.title}>Loisirs</Text>
                <View style={styles.hobbies}>
                    {cvData.hobbies.map((hobby, index) => (
                        <Text key={index} style={styles.hobbyItem}>• {hobby}</Text>
                    ))}
                </View>
            </View>
        </Page>
    </Document>
);

export default CVPDF;
