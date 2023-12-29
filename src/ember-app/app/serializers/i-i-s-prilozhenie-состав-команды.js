import { Serializer as СоставКомандыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-состав-команды';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставКомандыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
