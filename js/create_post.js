!(function (exports) {
  'use strict';

  const CreatePost = {
    postButton: document.getElementById('post-button'),

    dialog: document.getElementById('create-post'),
    dialogAudience: document.getElementById('create-post-audience'),
    dialogInput: document.getElementById('create-post-input'),
    submitButton: document.getElementById('create-post-submit-button'),

    init: function () {
      this.dialog.addEventListener('submit', this.handleSubmit.bind(this));
      this.postButton.addEventListener('click', this.handlePostButtonClick.bind(this));
      this.submitButton.addEventListener('click', this.handleSubmitButtonClick.bind(this));
    },

    handleSubmit: function (event) {
      event.preventDefault();
    },

    handlePostButtonClick: function (event) {
      this.dialog.classList.add('visible');
    },

    handleSubmitButtonClick: function (event) {
      OrchidServices.articles.post(this.dialogAudience.value, this.dialogInput.value);
      this.dialog.classList.remove('visible');
    }
  };

  CreatePost.init();
})(window);
