import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCircle, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '../AuthContext';
import { useLanguage } from '../LanguageContext';
import type { UserRole } from '../types';
import Button from '../components/Button';

const Login: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const roles: { value: UserRole; label: string; color: string }[] = [
    { value: 'admin', label: t('login.admin'), color: 'from-purple-500 to-purple-700' },
    { value: 'teacher', label: t('login.teacher'), color: 'from-blue-500 to-blue-700' },
    { value: 'parent', label: t('login.parent'), color: 'from-green-500 to-green-700' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;

    setError('');
    setLoading(true);

    try {
      await login(email, password, selectedRole);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setSelectedRole(null);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 pt-20 pb-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-sage-800 mb-2">
              {t('login.title')}
            </h1>
            <p className="text-gray-600">{t('login.subtitle')}</p>
          </div>

          {!selectedRole ? (
            <div className="space-y-4">
              {roles.map((role) => (
                <motion.button
                  key={role.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedRole(role.value)}
                  className={`w-full bg-gradient-to-r ${role.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <UserCircle className="h-8 w-8" />
                    <span className="text-xl font-semibold">{role.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-sage-600 mb-6 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{t('login.back')}</span>
              </button>

              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${
                    roles.find((r) => r.value === selectedRole)?.color
                  } text-white mb-3`}
                >
                  <UserCircle className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {roles.find((r) => r.value === selectedRole)?.label}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('login.email')}
                  </label>
                  <div className="relative">
                    <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('login.password')}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : t('login.button')}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-sage-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Demo Credentials:</p>
                <p className="text-xs text-gray-500">
                  {selectedRole}@pesantren.com / {selectedRole}123
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
