import { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import Header from '../components/navigation/Header';

function MainLayout({children}){
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen((current) => !current);
    };

    return (
        <div className="app-layout">
            <Sidebar isOpen={sidebarOpen} />
            <div className={`app-content ${sidebarOpen ? 'sideba-open' : 'sidebar-collapsed'}`}>
                <Header onToggleSidebar={toggleSidebar} />
                <main className="app-main">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default MainLayout;