import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудники: DS.belongsTo('i-i-s-prilozhenie-сотрудники', { inverse: null, async: false }),
  составКоманды: DS.belongsTo('i-i-s-prilozhenie-состав-команды', { inverse: 'тЧСоставаТренер', async: false })
});

export let ValidationRules = {
  сотрудники: {
    descriptionKey: 'models.i-i-s-prilozhenie-т-ч-состава-тренер.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составКоманды: {
    descriptionKey: 'models.i-i-s-prilozhenie-т-ч-состава-тренер.validations.составКоманды.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоставаТренерE', 'i-i-s-prilozhenie-т-ч-состава-тренер', {
    сотрудники: belongsTo('i-i-s-prilozhenie-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      должность: attr('Должность', { index: 2 })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
