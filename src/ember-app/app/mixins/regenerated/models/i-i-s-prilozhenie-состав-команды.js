import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяКоманды: DS.attr('string'),
  группыВозраст: DS.belongsTo('i-i-s-prilozhenie-группы-возраст', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-сотрудники', { inverse: null, async: false }),
  тЧСоставаСпорт: DS.hasMany('i-i-s-prilozhenie-т-ч-состава-спорт', { inverse: 'составКоманды', async: false }),
  тЧСоставаТренер: DS.hasMany('i-i-s-prilozhenie-т-ч-состава-тренер', { inverse: 'составКоманды', async: false })
});

export let ValidationRules = {
  имяКоманды: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-команды.validations.имяКоманды.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  группыВозраст: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-команды.validations.группыВозраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-команды.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧСоставаСпорт: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-команды.validations.тЧСоставаСпорт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧСоставаТренер: {
    descriptionKey: 'models.i-i-s-prilozhenie-состав-команды.validations.тЧСоставаТренер.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставКомандыE', 'i-i-s-prilozhenie-состав-команды', {
    имяКоманды: attr('Имя команды', { index: 0 }),
    сотрудники: belongsTo('i-i-s-prilozhenie-сотрудники', 'Сотрудники', {
      фИО: attr('Заполнил', { index: 3 })
    }, { index: 2 }),
    группыВозраст: belongsTo('i-i-s-prilozhenie-группы-возраст', 'Группы возраст', {
      наименование: attr('Возрастная группа', { index: 4, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' }),
    тЧСоставаСпорт: hasMany('i-i-s-prilozhenie-т-ч-состава-спорт', 'Т ч состава спорт', {
      номерСпортсмена: attr('Номер спортсмена', { index: 0 }),
      спортсмены: belongsTo('i-i-s-prilozhenie-спортсмены', 'Спортсмены', {
        фИО: attr('ФИО', { index: 2, hidden: true }),
        датаРождения: attr('Дата рождения', { index: 3 })
      }, { index: 1, displayMemberPath: 'фИО' })
    }),
    тЧСоставаТренер: hasMany('i-i-s-prilozhenie-т-ч-состава-тренер', 'Т ч состава тренер', {
      сотрудники: belongsTo('i-i-s-prilozhenie-сотрудники', 'Сотрудники', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        должность: attr('Должность', { index: 2 })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('СоставКомандыL', 'i-i-s-prilozhenie-состав-команды', {
    имяКоманды: attr('Имя команды', { index: 0 }),
    группыВозраст: belongsTo('i-i-s-prilozhenie-группы-возраст', 'Возрастная группа', {
      наименование: attr('Возрастная группа', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
