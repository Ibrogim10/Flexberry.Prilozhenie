import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерСпортсмена: DS.attr('number'),
  спортсмены: DS.belongsTo('i-i-s-prilozhenie-спортсмены', { inverse: null, async: false }),
  составКоманды: DS.belongsTo('i-i-s-prilozhenie-состав-команды', { inverse: 'тЧСоставаСпорт', async: false })
});

export let ValidationRules = {
  номерСпортсмена: {
    descriptionKey: 'models.i-i-s-prilozhenie-т-ч-состава-спорт.validations.номерСпортсмена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  спортсмены: {
    descriptionKey: 'models.i-i-s-prilozhenie-т-ч-состава-спорт.validations.спортсмены.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составКоманды: {
    descriptionKey: 'models.i-i-s-prilozhenie-т-ч-состава-спорт.validations.составКоманды.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоставаСпортE', 'i-i-s-prilozhenie-т-ч-состава-спорт', {
    номерСпортсмена: attr('Номер спортсмена', { index: 0 }),
    спортсмены: belongsTo('i-i-s-prilozhenie-спортсмены', 'Спортсмены', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      датаРождения: attr('Дата рождения', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' })
  });
};
