 import { useLanguage } from "../../contexts/LanguageContext";

 export default function LanguageSelector(){
    const { language, changeLanguage, t } = useLanguage();

    return(
        <div className="language-selector">
            <label htmlFor="taskflow-language" className="form-label">
                {t('language')}
            </label>

            <select id="taskflow-language" className="form-select" value={language} onChange={(event) => changeLanguage(event.target.value)} aria-label={t('language')}>
                <option value="es">
                    {t('spanish')}
                </option>
                <option value="en">
                    {t('english')}
                </option>
            </select>
        </div>
    );
 }