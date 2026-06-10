// This module is the single registration point for i18next.
// Do not call i18n.use() / i18n.init() anywhere else in the codebase.
// (Verifies PRD-AC-003: the i18n registration contract.)

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enUS from './en-US';
// AGENTS.md hard rule: do not fake i18n mirrors. zh-CN is only imported
// once a real src/i18n/zh-CN/index.ts resource file exists.

const resources = {
  'en-US': { translation: enUS },
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en-US',
      supportedLngs: ['en-US'],
      interpolation: { escapeValue: false },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    });
}

export default i18n;
