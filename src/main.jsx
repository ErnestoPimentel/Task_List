import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

import App from './App.jsx';
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext.jsx';
import './index.css';

window.$ = $;
window.jQuery = $;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <TaskProvider>
                <App />
            </TaskProvider>
        </AuthProvider>
    </StrictMode>
);
