import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСоздания: DS.attr('date', { defaultValue() { return new Date(); } }),
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-сотрудники', { inverse: null, async: false }),
  тЧГрафика: DS.hasMany('i-i-s-prilozhenie-т-ч-графика', { inverse: 'графикМатчей', async: false })
});

export let ValidationRules = {
  датаСоздания: {
    descriptionKey: 'models.i-i-s-prilozhenie-график-матчей.validations.датаСоздания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-график-матчей.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧГрафика: {
    descriptionKey: 'models.i-i-s-prilozhenie-график-матчей.validations.тЧГрафика.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикМатчейE', 'i-i-s-prilozhenie-график-матчей', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-prilozhenie-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    тЧГрафика: hasMany('i-i-s-prilozhenie-т-ч-графика', 'Т ч графика', {
      датаПроведения: attr('Дата проведения', { index: 0 }),
      время: attr('Время', { index: 1 }),
      местоПроведения: attr('Место проведения', { index: 2 }),
      группыВозраст: belongsTo('i-i-s-prilozhenie-группы-возраст', 'Группы возраст', {
        наименование: attr('Наименование', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ГрафикМатчейL', 'i-i-s-prilozhenie-график-матчей', {
    датаСоздания: attr('Дата создания', { index: 0 }),
    сотрудники: belongsTo('i-i-s-prilozhenie-сотрудники', 'Создал', {
      фИО: attr('Создал', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
