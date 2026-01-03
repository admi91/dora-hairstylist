import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'
import { getExperience } from '../services/api'

const Experience = () => {
  const { t } = useTranslation('experience');
  const [experienceData, setExperienceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperience = async () => {
      const data = await getExperience();
      if (data) {
        setExperienceData(data);
      }
      setLoading(false);
    };
    loadExperience();
  }, []);

  // Fallback data
  const fallbackExperiences = [
    {
      year: '2020 - Presente',
      role: t('roles.professionalStylist'),
      company: t('roles.privateStudio'),
      description: t('roles.description'),
      achievements: [
        t('achievements.satisfiedClients'),
        t('achievements.colorSpecialization'),
        t('achievements.innovativeTechniques')
      ]
    },
  ];

  const fallbackSkills = [
    { name: t('skills.womenCut'), level: 100 },
    { name: t('skills.menCut'), level: 92 },
    { name: t('skills.coloring'), level: 100 },
    { name: t('skills.balayage'), level: 100 },
    { name: t('skills.hairstyles'), level: 100 },
    { name: t('skills.treatments'), level: 100 },
  ];

  const fallbackCertifications = [
    {
      title: t('certificationsList.professionalCertification'),
      year: '2018',
      institution: t('certificationsList.italianAcademy')
    },
  ];

  // Usa dati Strapi o fallback
  const experiences = experienceData?.experiences || fallbackExperiences;
  const skills = experienceData?.skills || fallbackSkills;
  const certifications = experienceData?.certifications || fallbackCertifications;

  // Loading skeleton
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded animate-pulse w-2/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2 mx-auto"></div>
          </div>
          <div className="space-y-8 mb-20">
            {[1, 2].map((i) => (
              <div key={i} className="h-40 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {experienceData?.title || t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {experienceData?.subtitle || t('subtitle')}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">{t('sections.professionalPath')}</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-red-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                    <span className="text-red-500 font-semibold">{exp.year}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">{t('sections.technicalSkills')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-red-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">{t('sections.certifications')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-2 border-red-100 hover:border-red-300 transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="text-red-500 font-bold">{cert.year}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            {experienceData?.ctaTitle || t('cta.title')}
          </h3>
          <p className="text-xl mb-8 text-red-50">
            {experienceData?.ctaSubtitle || t('cta.subtitle')}
          </p>
          <Link
            to="/contatti"
            className="bg-white text-red-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block"
          >
            {experienceData?.ctaButton || t('cta.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Experience
