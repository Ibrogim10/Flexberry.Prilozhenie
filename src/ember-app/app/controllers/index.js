import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-по-спортсменам.caption'),
          title: i18n.t('forms.application.sitemap.информация-по-спортсменам.title'),
          children: [{
            link: 'i-i-s-prilozhenie-спортсмены-l',
            caption: i18n.t('forms.application.sitemap.информация-по-спортсменам.i-i-s-prilozhenie-спортсмены-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-по-спортсменам.i-i-s-prilozhenie-спортсмены-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-группы-возраст-l',
            caption: i18n.t('forms.application.sitemap.информация-по-спортсменам.i-i-s-prilozhenie-группы-возраст-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-по-спортсменам.i-i-s-prilozhenie-группы-возраст-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-состав-команды-l',
            caption: i18n.t('forms.application.sitemap.информация-по-спортсменам.i-i-s-prilozhenie-состав-команды-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-по-спортсменам.i-i-s-prilozhenie-состав-команды-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.графики.caption'),
          title: i18n.t('forms.application.sitemap.графики.title'),
          children: [{
            link: 'i-i-s-prilozhenie-график-матчей-l',
            caption: i18n.t('forms.application.sitemap.графики.i-i-s-prilozhenie-график-матчей-l.caption'),
            title: i18n.t('forms.application.sitemap.графики.i-i-s-prilozhenie-график-матчей-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-prilozhenie-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-сотрудники-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})