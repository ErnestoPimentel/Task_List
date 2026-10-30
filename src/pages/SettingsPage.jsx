import LanguageSelector from "../components/settings/LanguageSelector";

function SettingsPage(){
    return (
        <section>
            <div className="page-header">
                <div>
                    <span className="page-eyebrow">
                        Preferencias
                    </span>
                    <h1>
                        Configuración
                    </h1>
                    <p>
                        Administra la configuración de tu cuenta.
                    </p>
                </div>
            </div>
            <div className="settings-section">
                <h2>
                    Idioma
                </h2>
                <p>
                    Selecciona el idioma de la aplicación.
                </p>
                <LanguageSelector />
            </div>
        </section>
    )
}

export default SettingsPage;