import { Serializer as ТЧГрафикаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-т-ч-графика';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧГрафикаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
