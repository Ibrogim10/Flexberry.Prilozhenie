import {
  defineNamespace,
  defineProjections,
  Model as ГруппыВозрастMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-группы-возраст';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГруппыВозрастMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
