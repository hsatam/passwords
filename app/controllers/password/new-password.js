import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    alert ('in controller...');
    createPassword: function() {
      var newPassword = this.store.createRecord('password', {
        userId: this.get('userId'),
        password: this.get('password'),
        applicationName: this.get('applicationName'),
        applicationURL: this.get('applicationURL')
      });
      newPassword.save();
      this.transitionTo('plist');
    }
  }
});
