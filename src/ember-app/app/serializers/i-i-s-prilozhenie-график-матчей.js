import { Serializer as ГрафикМатчейSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-график-матчей';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрафикМатчейSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
