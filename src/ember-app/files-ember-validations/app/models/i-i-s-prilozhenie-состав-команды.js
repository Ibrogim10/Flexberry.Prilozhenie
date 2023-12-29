import {
  defineNamespace,
  defineProjections,
  Model as СоставКомандыMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-состав-команды';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставКомандыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
