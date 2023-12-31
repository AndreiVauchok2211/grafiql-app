import React, {
  ReactNode,
  useReducer,
  createContext,
  FC,
  // cloneElement,
  // Children,
  // ReactElement,
} from 'react';

import en from '../internatianalization/en.json';
import ru from '../internatianalization/ru.json';

enum LangActionType {
  SET_LANGUAGE = 'SET_LANGUAGE',
}

interface LangState {
  language: string;
}

interface LangStateProps {
  children: ReactNode;
}

interface SetLangAction {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
}

interface ContextProps {
  state: LangState;
  dispathc: {
    setLanguage: (lang: string) => void;
    translate: (key: string) => string;
  };
}

function langReduser(state: LangState, action: SetLangAction): LangState {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
}

const localStorageLang = localStorage.getItem('language');
const initialState = {
  language: localStorageLang ? localStorageLang : 'EN',
};

export const LangContext = createContext({} as ContextProps);

export const LangState: FC<LangStateProps> = ({ children }) => {
  const [state, dispathc] = useReducer(langReduser, initialState);

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    dispathc({
      type: LangActionType.SET_LANGUAGE,
      payload: lang,
    });
  };

  const translate = (key: string): string => {
    const { language } = state;
    let langData: { [key: string]: string } = {};

    if (language === 'EN') {
      langData = en;
    } else langData = ru;

    return langData[key];
  };
  return (
    <LangContext.Provider
      value={{ state, dispathc: { setLanguage, translate } }}
    >
      {/* {Children.map<ReactNode, ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { translate: translate });
        }
      })} */}
      {children}
    </LangContext.Provider>
  );
};

// {Children.map(children, (child) =>
//    cloneElement(child, {
//      translate: translate,
//    })
//  )}
