import { Serializer as ТЧСоставаСпортSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-т-ч-состава-спорт';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСоставаСпортSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
