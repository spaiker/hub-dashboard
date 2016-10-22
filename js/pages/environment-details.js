$('.js-assign-subdomain').change(function(){
    if(this.checked) {
        $('.modal-wrapper-hidden').addClass('show');
    } else {
        $('.modal-wrapper-hidden').removeClass('show');
    }
});

$('.js-ssh-key').filer({
    captions: {
        button: "Browse",
        feedback: "Choose file To Upload"
    },
    limit: 1,
    maxSize: 3,
});

$('.js-custom-select').ddslick({
    width: '100%',
    height: '117px'
});