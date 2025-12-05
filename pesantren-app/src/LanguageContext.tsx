import { createContext, useContext, useState } from 'react';
import type { ReactNode, FC } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.programs': 'Program',
    'nav.admissions': 'Pendaftaran',
    'nav.contact': 'Kontak',
    'nav.login': 'Masuk',
    
    // Hero Section
    'hero.title': 'Pesantren Modern Fadlulloh',
    'hero.subtitle': 'Membangun Generasi Qurani yang Berakhlak Mulia',
    'hero.description': 'Pendidikan Islam terpadu yang menggabungkan kurikulum nasional dengan pembelajaran Al-Quran dan nilai-nilai keislaman',
    'hero.cta.apply': 'Daftar Sekarang',
    'hero.cta.learn': 'Pelajari Lebih Lanjut',
    
    // Stats
    'stats.students': 'Santri Aktif',
    'stats.teachers': 'Guru Berpengalaman',
    'stats.programs': 'Program Unggulan',
    'stats.years': 'Tahun Berdiri',
    
    // Programs
    'programs.title': 'Program Unggulan',
    'programs.subtitle': 'Berbagai program pendidikan untuk membentuk karakter Islami',
    'programs.tahfidz': 'Tahfidz Al-Quran',
    'programs.tahfidz.desc': 'Program menghafal Al-Quran dengan metode terbukti efektif',
    'programs.academic': 'Akademik',
    'programs.academic.desc': 'Kurikulum nasional terintegrasi dengan nilai-nilai Islam',
    'programs.character': 'Pembinaan Karakter',
    'programs.character.desc': 'Pembentukan akhlak mulia melalui pembiasaan harian',
    'programs.language': 'Bahasa Arab & Inggris',
    'programs.language.desc': 'Penguasaan bahasa internasional untuk komunikasi global',
    
    // Facilities
    'facilities.title': 'Fasilitas Modern',
    'facilities.subtitle': 'Lingkungan belajar yang nyaman dan kondusif',
    'facilities.classroom': 'Ruang Kelas Ber-AC',
    'facilities.library': 'Perpustakaan Digital',
    'facilities.dormitory': 'Asrama Nyaman',
    'facilities.sports': 'Lapangan Olahraga',
    
    // Admissions
    'admissions.title': 'Pendaftaran Santri Baru',
    'admissions.subtitle': 'Bergabunglah dengan keluarga besar Pesantren Modern Fadlulloh',
    'admissions.form.student': 'Nama Lengkap Calon Santri',
    'admissions.form.dob': 'Tanggal Lahir',
    'admissions.form.gender': 'Jenis Kelamin',
    'admissions.form.gender.male': 'Laki-laki',
    'admissions.form.gender.female': 'Perempuan',
    'admissions.form.parent': 'Nama Orang Tua/Wali',
    'admissions.form.email': 'Email',
    'admissions.form.phone': 'Nomor Telepon',
    'admissions.form.address': 'Alamat Lengkap',
    'admissions.form.previous': 'Sekolah Asal (Opsional)',
    'admissions.form.message': 'Pesan Tambahan (Opsional)',
    'admissions.form.submit': 'Kirim Pendaftaran',
    'admissions.success': 'Pendaftaran berhasil dikirim! Kami akan menghubungi Anda segera.',
    
    // Login
    'login.title': 'Masuk ke Sistem',
    'login.subtitle': 'Silakan pilih jenis akun Anda',
    'login.admin': 'Admin',
    'login.teacher': 'Guru',
    'login.parent': 'Orang Tua',
    'login.email': 'Email',
    'login.password': 'Kata Sandi',
    'login.button': 'Masuk',
    'login.back': 'Kembali',
    
    // Dashboard
    'dashboard.welcome': 'Selamat Datang',
    'dashboard.overview': 'Ringkasan',
    'dashboard.students': 'Data Santri',
    'dashboard.teachers': 'Data Guru',
    'dashboard.announcements': 'Pengumuman',
    'dashboard.reports': 'Laporan',
    'dashboard.settings': 'Pengaturan',
    'dashboard.logout': 'Keluar',
    
    // Footer
    'footer.about': 'Tentang Kami',
    'footer.about.desc': 'Pesantren Modern Fadlulloh adalah lembaga pendidikan Islam yang menggabungkan kurikulum nasional dengan pembelajaran Al-Quran.',
    'footer.contact': 'Kontak',
    'footer.address': 'Jl. Pendidikan No. 123, Jakarta',
    'footer.phone': 'Telepon',
    'footer.email': 'Email',
    'footer.links': 'Tautan Cepat',
    'footer.social': 'Media Sosial',
    'footer.copyright': '© 2024 Pesantren Modern Fadlulloh. Hak Cipta Dilindungi.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    
    // Hero Section
    'hero.title': 'Fadlulloh Modern Islamic Boarding School',
    'hero.subtitle': 'Building Quranic Generation with Noble Character',
    'hero.description': 'Integrated Islamic education combining national curriculum with Quranic learning and Islamic values',
    'hero.cta.apply': 'Apply Now',
    'hero.cta.learn': 'Learn More',
    
    // Stats
    'stats.students': 'Active Students',
    'stats.teachers': 'Experienced Teachers',
    'stats.programs': 'Featured Programs',
    'stats.years': 'Years Established',
    
    // Programs
    'programs.title': 'Featured Programs',
    'programs.subtitle': 'Various educational programs to build Islamic character',
    'programs.tahfidz': 'Quran Memorization',
    'programs.tahfidz.desc': 'Quran memorization program with proven effective methods',
    'programs.academic': 'Academic',
    'programs.academic.desc': 'National curriculum integrated with Islamic values',
    'programs.character': 'Character Building',
    'programs.character.desc': 'Building noble character through daily habits',
    'programs.language': 'Arabic & English',
    'programs.language.desc': 'Mastering international languages for global communication',
    
    // Facilities
    'facilities.title': 'Modern Facilities',
    'facilities.subtitle': 'Comfortable and conducive learning environment',
    'facilities.classroom': 'Air-Conditioned Classrooms',
    'facilities.library': 'Digital Library',
    'facilities.dormitory': 'Comfortable Dormitory',
    'facilities.sports': 'Sports Field',
    
    // Admissions
    'admissions.title': 'New Student Registration',
    'admissions.subtitle': 'Join the Fadlulloh Modern Islamic Boarding School family',
    'admissions.form.student': 'Full Name of Prospective Student',
    'admissions.form.dob': 'Date of Birth',
    'admissions.form.gender': 'Gender',
    'admissions.form.gender.male': 'Male',
    'admissions.form.gender.female': 'Female',
    'admissions.form.parent': 'Parent/Guardian Name',
    'admissions.form.email': 'Email',
    'admissions.form.phone': 'Phone Number',
    'admissions.form.address': 'Full Address',
    'admissions.form.previous': 'Previous School (Optional)',
    'admissions.form.message': 'Additional Message (Optional)',
    'admissions.form.submit': 'Submit Application',
    'admissions.success': 'Application submitted successfully! We will contact you soon.',
    
    // Login
    'login.title': 'Login to System',
    'login.subtitle': 'Please select your account type',
    'login.admin': 'Admin',
    'login.teacher': 'Teacher',
    'login.parent': 'Parent',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.button': 'Login',
    'login.back': 'Back',
    
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.overview': 'Overview',
    'dashboard.students': 'Students Data',
    'dashboard.teachers': 'Teachers Data',
    'dashboard.announcements': 'Announcements',
    'dashboard.reports': 'Reports',
    'dashboard.settings': 'Settings',
    'dashboard.logout': 'Logout',
    
    // Footer
    'footer.about': 'About Us',
    'footer.about.desc': 'Fadlulloh Modern Islamic Boarding School is an Islamic educational institution combining national curriculum with Quranic learning.',
    'footer.contact': 'Contact',
    'footer.address': 'Jl. Pendidikan No. 123, Jakarta',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.links': 'Quick Links',
    'footer.social': 'Social Media',
    'footer.copyright': '© 2024 Fadlulloh Modern Islamic Boarding School. All Rights Reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.id] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
