import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧГрафикаMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-т-ч-графика';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧГрафикаMixin, Validations, {
});

defineProjections(Model);

export default Model;
