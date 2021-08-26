;
(function (self) {
    let nav_admin = document.querySelector('#Admin');
    let nav_assignment = document.querySelector('#Assignment');


    function navbar_changeBorder(el) {
        el.classList.remove('border-gray-100');
        el.classList.add('border-primary');
        el.classList.add('text-primary');
    }
    self.addEventListener('load', function () {

        if (this.location.pathname === "/admin.html") {

            navbar_changeBorder(nav_admin);
        } else if (this.location.pathname === "/assignment.html") {
            navbar_changeBorder(nav_assignment);
        }
        // alert(this.location.pathname);

    });


    let btn_reply = document.querySelector('#reply-btn');
    let reply_area = document.querySelector('#input-text');
    let btn_cancel = document.querySelector('#cancel-btn');
    let btn_submit = document.querySelector('#submit');
    let textarea = document.querySelector('.textarea');

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
    })
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
        };

    })











})(window);