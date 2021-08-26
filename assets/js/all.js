"use strict";

;

(function (self) {
  var nav_admin = document.querySelector('#Admin');
  var nav_assignment = document.querySelector('#Assignment');

  function navbar_changeBorder(el) {
    el.classList.remove('border-gray-100');
    el.classList.add('border-success');
    el.classList.add('text-success');
  }

  self.addEventListener('load', function () {
    if (this.location.pathname === "/admin.html") {
      navbar_changeBorder(nav_admin);
    } else if (this.location.pathname === "/assignment.html") {
      navbar_changeBorder(nav_assignment);
    } // alert(this.location.pathname);

  });
  var btn_reply = document.querySelector('#reply-btn');
  var reply_area = document.querySelector('#input-text');
  var btn_cancel = document.querySelector('#cancel-btn');
  var btn_submit = document.querySelector('#submit');
  var textarea = document.querySelector('.textarea');
  btn_reply.addEventListener('click', function (e) {
    e.preventDefault();
    reply_area.classList.remove('d-none');
    this.classList.add('invisible');
  });
  btn_cancel.addEventListener('click', function (e) {
    e.preventDefault();
    reply_area.classList.add('d-none');
    btn_reply.classList.remove('invisible');
    btn_reply.classList.add('visible');
    textarea.value = null;
  });
  btn_submit.addEventListener('click', function (e) {
    e.preventDefault();

    if (textarea.value === "") {
      alert('請輸入資料');
      return;
    } else {
      reply_area.classList.add('d-none');
      btn_reply.classList.remove('invisible');
      btn_reply.classList.add('visible');
      textarea.value = null;
    }

    ;
  });
})(window);
//# sourceMappingURL=all.js.map
