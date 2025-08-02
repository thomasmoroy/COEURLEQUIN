import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import HistoryPage from './pages/HistoryPage';
import CalendarPage from './pages/CalendarPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import GlobalStyles from './components/GlobalStyles';
import { AuthProvider } from './contexts/AuthContext';
import { SettingsProvider, useSettings } from './contexts/SettingsContext';
import { Page } from './types';
import { DataProvider } from './contexts/DataContext';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const { settings } = useSettings();

  useEffect(() => {
    document.title = `${settings.clubName} Basket Creney`;
  }, [settings.clubName]);


  const handleSetCurrentPage = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const pages: Record<Page, React.ReactElement> = useMemo(() => ({
    [Page.HOME]: <HomePage setCurrentPage={handleSetCurrentPage} />,
    [Page.BLOG]: <BlogPage />,
    [Page.HISTORY]: <HistoryPage />,
    [Page.CALENDAR]: <CalendarPage />,
    [Page.INFO]: <InfoPage />,
    [Page.CONTACT]: <ContactPage />,
    [Page.LOGIN]: <AuthPage setCurrentPage={handleSetCurrentPage} />,
    [Page.ADMIN]: <AdminPage />,
  }), [handleSetCurrentPage]);

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />
        <main className="flex-grow">
          {pages[currentPage] || pages[Page.HOME]}
        </main>
        <Footer />
      </div>
    </>
  );
}


const App: React.FC = () => {
  return (
    <AuthProvider>
        <SettingsProvider>
            <DataProvider>
                <AppContent />
            </DataProvider>
        </SettingsProvider>
    </AuthProvider>
  );
};

export default App;