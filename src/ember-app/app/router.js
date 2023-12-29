import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-график-матчей-l');
  this.route('i-i-s-prilozhenie-график-матчей-e',
  { path: 'i-i-s-prilozhenie-график-матчей-e/:id' });
  this.route('i-i-s-prilozhenie-график-матчей-e.new',
  { path: 'i-i-s-prilozhenie-график-матчей-e/new' });
  this.route('i-i-s-prilozhenie-группы-возраст-l');
  this.route('i-i-s-prilozhenie-группы-возраст-e',
  { path: 'i-i-s-prilozhenie-группы-возраст-e/:id' });
  this.route('i-i-s-prilozhenie-группы-возраст-e.new',
  { path: 'i-i-s-prilozhenie-группы-возраст-e/new' });
  this.route('i-i-s-prilozhenie-состав-команды-l');
  this.route('i-i-s-prilozhenie-состав-команды-e',
  { path: 'i-i-s-prilozhenie-состав-команды-e/:id' });
  this.route('i-i-s-prilozhenie-состав-команды-e.new',
  { path: 'i-i-s-prilozhenie-состав-команды-e/new' });
  this.route('i-i-s-prilozhenie-сотрудники-l');
  this.route('i-i-s-prilozhenie-сотрудники-e',
  { path: 'i-i-s-prilozhenie-сотрудники-e/:id' });
  this.route('i-i-s-prilozhenie-сотрудники-e.new',
  { path: 'i-i-s-prilozhenie-сотрудники-e/new' });
  this.route('i-i-s-prilozhenie-спортсмены-l');
  this.route('i-i-s-prilozhenie-спортсмены-e',
  { path: 'i-i-s-prilozhenie-спортсмены-e/:id' });
  this.route('i-i-s-prilozhenie-спортсмены-e.new',
  { path: 'i-i-s-prilozhenie-спортсмены-e/new' });
});

export default Router;
