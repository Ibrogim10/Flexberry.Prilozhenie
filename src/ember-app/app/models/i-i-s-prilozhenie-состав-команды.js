import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставКомандыMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-состав-команды';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставКомандыMixin, Validations, {
});

defineProjections(Model);

export default Model;
