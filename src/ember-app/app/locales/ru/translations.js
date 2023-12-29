import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie',
          title: 'Prilozhenie'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
