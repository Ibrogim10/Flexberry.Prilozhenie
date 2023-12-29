import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГрафикМатчейMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-график-матчей';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГрафикМатчейMixin, Validations, {
});

defineProjections(Model);

export default Model;
