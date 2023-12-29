import {
  defineNamespace,
  defineProjections,
  Model as ТЧСоставаТренерMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-т-ч-состава-тренер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСоставаТренерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
