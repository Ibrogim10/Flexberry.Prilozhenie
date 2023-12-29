import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenieГрафикМатчейLForm from './forms/i-i-s-prilozhenie-график-матчей-l';
import IISPrilozhenieГруппыВозрастLForm from './forms/i-i-s-prilozhenie-группы-возраст-l';
import IISPrilozhenieСоставКомандыLForm from './forms/i-i-s-prilozhenie-состав-команды-l';
import IISPrilozhenieСотрудникиLForm from './forms/i-i-s-prilozhenie-сотрудники-l';
import IISPrilozhenieСпортсменыLForm from './forms/i-i-s-prilozhenie-спортсмены-l';
import IISPrilozhenieГрафикМатчейEForm from './forms/i-i-s-prilozhenie-график-матчей-e';
import IISPrilozhenieГруппыВозрастEForm from './forms/i-i-s-prilozhenie-группы-возраст-e';
import IISPrilozhenieСоставКомандыEForm from './forms/i-i-s-prilozhenie-состав-команды-e';
import IISPrilozhenieСотрудникиEForm from './forms/i-i-s-prilozhenie-сотрудники-e';
import IISPrilozhenieСпортсменыEForm from './forms/i-i-s-prilozhenie-спортсмены-e';
import IISPrilozhenieГрафикМатчейModel from './models/i-i-s-prilozhenie-график-матчей';
import IISPrilozhenieГруппыВозрастModel from './models/i-i-s-prilozhenie-группы-возраст';
import IISPrilozhenieСоставКомандыModel from './models/i-i-s-prilozhenie-состав-команды';
import IISPrilozhenieСотрудникиModel from './models/i-i-s-prilozhenie-сотрудники';
import IISPrilozhenieСпортсменыModel from './models/i-i-s-prilozhenie-спортсмены';
import IISPrilozhenieТЧГрафикаModel from './models/i-i-s-prilozhenie-т-ч-графика';
import IISPrilozhenieТЧСоставаСпортModel from './models/i-i-s-prilozhenie-т-ч-состава-спорт';
import IISPrilozhenieТЧСоставаТренерModel from './models/i-i-s-prilozhenie-т-ч-состава-тренер';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-график-матчей': IISPrilozhenieГрафикМатчейModel,
    'i-i-s-prilozhenie-группы-возраст': IISPrilozhenieГруппыВозрастModel,
    'i-i-s-prilozhenie-состав-команды': IISPrilozhenieСоставКомандыModel,
    'i-i-s-prilozhenie-сотрудники': IISPrilozhenieСотрудникиModel,
    'i-i-s-prilozhenie-спортсмены': IISPrilozhenieСпортсменыModel,
    'i-i-s-prilozhenie-т-ч-графика': IISPrilozhenieТЧГрафикаModel,
    'i-i-s-prilozhenie-т-ч-состава-спорт': IISPrilozhenieТЧСоставаСпортModel,
    'i-i-s-prilozhenie-т-ч-состава-тренер': IISPrilozhenieТЧСоставаТренерModel
  },

  'application-name': 'Prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie',
          title: 'Prilozhenie'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'информация-по-спортсменам': {
          caption: 'Информация по спортсменам',
          title: 'Информация по спортсменам',
          'i-i-s-prilozhenie-спортсмены-l': {
            caption: 'Спортсмены',
            title: ''
          },
          'i-i-s-prilozhenie-группы-возраст-l': {
            caption: 'Группы возраст',
            title: ''
          },
          'i-i-s-prilozhenie-состав-команды-l': {
            caption: 'Состав команды',
            title: ''
          }
        },
        графики: {
          caption: 'Графики',
          title: 'Графики',
          'i-i-s-prilozhenie-график-матчей-l': {
            caption: 'График матчей',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-prilozhenie-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-график-матчей-l': IISPrilozhenieГрафикМатчейLForm,
    'i-i-s-prilozhenie-группы-возраст-l': IISPrilozhenieГруппыВозрастLForm,
    'i-i-s-prilozhenie-состав-команды-l': IISPrilozhenieСоставКомандыLForm,
    'i-i-s-prilozhenie-сотрудники-l': IISPrilozhenieСотрудникиLForm,
    'i-i-s-prilozhenie-спортсмены-l': IISPrilozhenieСпортсменыLForm,
    'i-i-s-prilozhenie-график-матчей-e': IISPrilozhenieГрафикМатчейEForm,
    'i-i-s-prilozhenie-группы-возраст-e': IISPrilozhenieГруппыВозрастEForm,
    'i-i-s-prilozhenie-состав-команды-e': IISPrilozhenieСоставКомандыEForm,
    'i-i-s-prilozhenie-сотрудники-e': IISPrilozhenieСотрудникиEForm,
    'i-i-s-prilozhenie-спортсмены-e': IISPrilozhenieСпортсменыEForm
  },

});

export default translations;
