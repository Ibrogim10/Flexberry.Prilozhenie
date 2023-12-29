import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  телефон: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-prilozhenie-спортсмены.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-prilozhenie-спортсмены.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-prilozhenie-спортсмены.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпортсменыE', 'i-i-s-prilozhenie-спортсмены', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });

  modelClass.defineProjection('СпортсменыL', 'i-i-s-prilozhenie-спортсмены', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });
};
