import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { LangContext } from '../../context/lang';

interface HeaderLangProps {
  fixed?: boolean;
  transparent?: boolean;
}

export function Header({ fixed, transparent }: HeaderLangProps) {
  const {
    state: { language },
    dispathc: { setLanguage, translate },
  } = useContext(LangContext);
  const [user] = useAuthState(auth);
  const [color, setColor] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownElement = useRef<HTMLUListElement>(null);

  let headerClass = 'header__lang';
  if (fixed) {
    headerClass += ' header__lang_fixed';
  }
  if (transparent) {
    headerClass += ' header__lang_transparent';
  }

  const hundleClickOutside = useCallback(
    (e: Event) => {
      if (
        showDropdown &&
        (e.target as HTMLElement)?.closest('.dropdown') !==
          dropdownElement.current
      ) {
        console.log(showDropdown);
        console.log(e.target);
        console.log(dropdownElement.current);
        setShowDropdown(true);
      }
    },
    [showDropdown, setShowDropdown, dropdownElement]
  );

  useEffect(() => {
    document.addEventListener('click', hundleClickOutside);
    return () => {
      document.removeEventListener('click', hundleClickOutside);
    };
  }, [hundleClickOutside]);

  function chooseLanguageHundler(value: string) {
    setShowDropdown(false);
    setLanguage(value);
  }

  const changeColor = () => {
    if (window.scrollY <= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <header
      className={
        color
          ? `${headerClass} header_form`
          : `${headerClass} header_form header_bg`
      }
    >
      <div className="header__nav_lang">
        <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>
          {language}
        </p>
        {showDropdown && (
          <ul className="dropdown" ref={dropdownElement}>
            <li
              className="list__lang_open"
              onClick={() => chooseLanguageHundler('EN')}
            >
              EN
            </li>
            <li
              className="list__lang_open"
              onClick={() => chooseLanguageHundler('RU')}
            >
              RU
            </li>
          </ul>
        )}
      </div>
      <NavLink to="/">{translate('welcome')}</NavLink>
      {user ? (
        <>
          <NavLink to="/graphiql">{translate('graphi')}</NavLink>
          <NavLink to="/logout">{translate('logout')}</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">{translate('login')}</NavLink>
          <NavLink to="/register">{translate('register')}</NavLink>
          <NavLink to="/reset">{translate('reset')}</NavLink>
        </>
      )}
    </header>
  );
}
