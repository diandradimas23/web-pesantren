import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Globe2, GraduationCap, Heart, Building2, Trophy } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Button from '../components/Button';
import StatCard from '../components/StatCard';

const Home: FC = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: t('programs.tahfidz'),
      description: t('programs.tahfidz.desc'),
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: t('programs.academic'),
      description: t('programs.academic.desc'),
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: t('programs.character'),
      description: t('programs.character.desc'),
    },
    {
      icon: <Globe2 className="h-12 w-12" />,
      title: t('programs.language'),
      description: t('programs.language.desc'),
    },
  ];

  const facilities = [
    { icon: <Building2 className="h-8 w-8" />, name: t('facilities.classroom') },
    { icon: <BookOpen className="h-8 w-8" />, name: t('facilities.library') },
    { icon: <Users className="h-8 w-8" />, name: t('facilities.dormitory') },
    { icon: <Trophy className="h-8 w-8" />, name: t('facilities.sports') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-700 via-sage-600 to-sage-800 text-white pt-24 pb-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-sage-100">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 text-sage-200 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button variant="secondary" size="lg">
                  {t('hero.cta.apply')}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                {t('hero.cta.learn')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              number="500+"
              label={t('stats.students')}
              icon={<Users className="h-10 w-10" />}
            />
            <StatCard
              number="50+"
              label={t('stats.teachers')}
              icon={<GraduationCap className="h-10 w-10" />}
            />
            <StatCard
              number="10+"
              label={t('stats.programs')}
              icon={<Award className="h-10 w-10" />}
            />
            <StatCard
              number="15+"
              label={t('stats.years')}
              icon={<Trophy className="h-10 w-10" />}
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
              {t('programs.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-sage-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sage-100"
              >
                <div className="text-sage-600 mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-sage-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
              {t('facilities.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('facilities.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-sage-600 flex justify-center mb-3">
                  {facility.icon}
                </div>
                <p className="text-gray-700 font-medium">{facility.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('admissions.subtitle')}
            </h2>
            <p className="text-lg mb-8 text-sage-100">
              {t('hero.description')}
            </p>
            <Link to="/admissions">
              <Button variant="secondary" size="lg">
                {t('hero.cta.apply')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
