import { Serializer as СпортсменыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-спортсмены';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпортсменыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
