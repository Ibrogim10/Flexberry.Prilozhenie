import { Serializer as ТЧСоставаТренерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-т-ч-состава-тренер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСоставаТренерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
