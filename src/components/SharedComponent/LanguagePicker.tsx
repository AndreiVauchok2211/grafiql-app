import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './LanguagePicker.scss';

export function LanguagePicker() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const flag = language === 'ru' ? 'RU' : 'EN';

  function hundleLanguageChanged(lang: string): void {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }

  return (
    <div className="language_picker">
      <DropdownButton
        id="dropdown-basic-button"
        className="language_picker__dropdown"
        title={flag}
        variant="light"
      >
        <Dropdown.Item onClick={() => hundleLanguageChanged('ru')}>
          RU: Русский
        </Dropdown.Item>
        <Dropdown.Item onClick={() => hundleLanguageChanged('en')}>
          EN: English
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
