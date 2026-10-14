import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import ScheduledTasksPage from './pages/ScheduledTasksPage';
import SharedTasksPage from './pages/SharedTasksPage';
import SettingsPage from './pages/SettingsPage';
import TaskDetailsPage from './pages/TaskDetailsPage';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route path='/*' element={
                    <ProtectedRoute>
                        <MainLayout>
                            <Routes>
                                <Route path='/' element={<DashboardPage />} />

                                <Route path='/tareas' element={<TasksPage />} />

                                <Route path='/tareas/:taskId' element={<TaskDetailsPage />} />

                                <Route path='/programadas' element={<ScheduledTasksPage />} />

                                <Route path='/compartidas' element={<SharedTasksPage />} />

                                <Route path='/configuracion' element={<SettingsPage />} />

                                <Route path='*' element={<Navigate to='/' replace />} />
                            </Routes>
                        </MainLayout>
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;