import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel='stylesheet' href='https://flaticon.com' />
      </head>
      <body>
        <div className="app-layout">
          <Sidebar />
          <div className="content-wrapper">
            <Topbar />
            <main className="main-content">
              {children}
            </main>
            <footer className="page-footer">
              <span>© 2024 Cashflow Inc. All rights reserved.</span>
              <div className="footer-links">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
