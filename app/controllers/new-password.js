import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({

store: Ember.inject.service(),

  actions: {
    createPassword: function() {
      var store = this.get('store');
      var newPassword = this.store.createRecord('password', {
        userId: this.get('userId'),
        password: this.get('password'),
        applicationName: this.get('applicationName'),
        applicationURL: this.get('applicationURL'),
      });
      newPassword.save();
      this.transitionTo('plist');
    },
  },
});
