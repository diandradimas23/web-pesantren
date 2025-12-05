import React from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';
import { useLanguage } from '../LanguageContext';
import { Users, BookOpen, Bell, Settings, BarChart3, Calendar, FileText, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { t } = useLanguage();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const getStats = () => {
    switch (user.role) {
      case 'admin':
        return [
          { icon: <Users className="h-8 w-8" />, label: 'Total Santri', value: '500', color: 'bg-blue-500' },
          { icon: <BookOpen className="h-8 w-8" />, label: 'Total Guru', value: '50', color: 'bg-green-500' },
          { icon: <Calendar className="h-8 w-8" />, label: 'Kelas Aktif', value: '25', color: 'bg-purple-500' },
          { icon: <Award className="h-8 w-8" />, label: 'Program', value: '10', color: 'bg-yellow-500' },
        ];
      case 'teacher':
        return [
          { icon: <Users className="h-8 w-8" />, label: 'Santri Saya', value: '45', color: 'bg-blue-500' },
          { icon: <BookOpen className="h-8 w-8" />, label: 'Kelas', value: '3', color: 'bg-green-500' },
          { icon: <FileText className="h-8 w-8" />, label: 'Tugas', value: '12', color: 'bg-purple-500' },
          { icon: <Calendar className="h-8 w-8" />, label: 'Jadwal Hari Ini', value: '5', color: 'bg-yellow-500' },
        ];
      case 'parent':
        return [
          { icon: <Users className="h-8 w-8" />, label: 'Anak', value: '2', color: 'bg-blue-500' },
          { icon: <Award className="h-8 w-8" />, label: 'Prestasi', value: '8', color: 'bg-green-500' },
          { icon: <Bell className="h-8 w-8" />, label: 'Notifikasi', value: '3', color: 'bg-purple-500' },
          { icon: <FileText className="h-8 w-8" />, label: 'Laporan', value: '5', color: 'bg-yellow-500' },
        ];
      default:
        return [];
    }
  };

  const getRecentActivities = () => {
    switch (user.role) {
      case 'admin':
        return [
          { title: 'Pendaftaran santri baru', time: '2 jam yang lalu', type: 'success' },
          { title: 'Laporan keuangan bulan ini', time: '5 jam yang lalu', type: 'info' },
          { title: 'Rapat guru dijadwalkan', time: '1 hari yang lalu', type: 'warning' },
        ];
      case 'teacher':
        return [
          { title: 'Tugas Bahasa Arab dikumpulkan', time: '1 jam yang lalu', type: 'success' },
          { title: 'Ujian tengah semester besok', time: '3 jam yang lalu', type: 'warning' },
          { title: 'Nilai ujian telah diinput', time: '1 hari yang lalu', type: 'info' },
        ];
      case 'parent':
        return [
          { title: 'Ahmad mendapat nilai A', time: '2 jam yang lalu', type: 'success' },
          { title: 'Pembayaran SPP jatuh tempo', time: '1 hari yang lalu', type: 'warning' },
          { title: 'Laporan bulanan tersedia', time: '2 hari yang lalu', type: 'info' },
        ];
      default:
        return [];
    }
  };

  const stats = getStats();
  const activities = getRecentActivities();

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {t('dashboard.welcome')}, {user.name}!
            </h1>
            <p className="text-gray-600">
              {user.role === 'admin' && 'Kelola sistem pesantren dengan mudah'}
              {user.role === 'teacher' && 'Pantau perkembangan santri Anda'}
              {user.role === 'parent' && 'Lihat perkembangan anak Anda'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} text-white p-3 rounded-lg`}>
                    {stat.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Aktivitas Terbaru</h2>
                <Bell className="h-6 w-6 text-gray-400" />
              </div>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'success'
                          ? 'bg-green-500'
                          : activity.type === 'warning'
                          ? 'bg-yellow-500'
                          : 'bg-blue-500'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Aksi Cepat</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 bg-sage-50 hover:bg-sage-100 rounded-lg transition-colors text-left">
                  <BarChart3 className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700 font-medium">{t('dashboard.reports')}</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-4 bg-sage-50 hover:bg-sage-100 rounded-lg transition-colors text-left">
                  <Calendar className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700 font-medium">Jadwal</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-4 bg-sage-50 hover:bg-sage-100 rounded-lg transition-colors text-left">
                  <Bell className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700 font-medium">{t('dashboard.announcements')}</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-4 bg-sage-50 hover:bg-sage-100 rounded-lg transition-colors text-left">
                  <Settings className="h-5 w-5 text-sage-600" />
                  <span className="text-gray-700 font-medium">{t('dashboard.settings')}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
