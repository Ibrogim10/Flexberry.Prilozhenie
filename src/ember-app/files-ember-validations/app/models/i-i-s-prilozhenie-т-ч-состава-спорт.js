import {
  defineNamespace,
  defineProjections,
  Model as ТЧСоставаСпортMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-т-ч-состава-спорт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСоставаСпортMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
