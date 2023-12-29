import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СпортсменыMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-спортсмены';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СпортсменыMixin, Validations, {
});

defineProjections(Model);

export default Model;
