import {
  defineNamespace,
  defineProjections,
  Model as ГрафикМатчейMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-график-матчей';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикМатчейMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
