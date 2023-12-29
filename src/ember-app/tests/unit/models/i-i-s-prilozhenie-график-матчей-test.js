import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-график-матчей', 'Unit | Model | i-i-s-prilozhenie-график-матчей', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-график-матчей',
    'model:i-i-s-prilozhenie-группы-возраст',
    'model:i-i-s-prilozhenie-состав-команды',
    'model:i-i-s-prilozhenie-сотрудники',
    'model:i-i-s-prilozhenie-спортсмены',
    'model:i-i-s-prilozhenie-т-ч-графика',
    'model:i-i-s-prilozhenie-т-ч-состава-спорт',
    'model:i-i-s-prilozhenie-т-ч-состава-тренер',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
