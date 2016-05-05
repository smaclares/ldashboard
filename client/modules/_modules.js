Modal = {
  display: function(template){

    switch(template) {
      case 'LogIn':
        Session.set('modalTemplate', 'LogIn');
        break;
      case 'Register':
        Session.set('modalTemplate', 'Register');
        break;
    }

    $('#main-modal').modal('show');
  }
}
