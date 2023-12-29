import {
  defineNamespace,
  defineProjections,
  Model as ТЧГрафикаMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-т-ч-графика';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧГрафикаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
