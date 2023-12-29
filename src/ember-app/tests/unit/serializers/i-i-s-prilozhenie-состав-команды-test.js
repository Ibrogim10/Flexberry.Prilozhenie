import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-состав-команды', 'Unit | Serializer | i-i-s-prilozhenie-состав-команды', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-состав-команды',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
