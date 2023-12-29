import {
  defineNamespace,
  defineProjections,
  Model as СпортсменыMixin
} from '../mixins/regenerated/models/i-i-s-prilozhenie-спортсмены';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпортсменыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
