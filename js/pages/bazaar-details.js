/*http://filer.grandesign.md/*/

$(document).ready(function() {
    $('.js-input-screenshots').filer({
        captions: {
            button: "Browse",
            feedback: "Choose file To Upload"
        },
        limit: 1,
        maxSize: 3,
        extensions: ["jpg", "png", "gif"]
    });
    $('.js-input-product').filer({
        captions: {
            button: "Browse",
            feedback: "Choose file To Upload"
        }
    });
    $('.js-input-logo').filer({
        captions: {
            button: "Browse",
            feedback: "Choose file To Upload"
            },
        limit: 1,
        maxSize: 3,
        extensions: ["jpg", "png", "gif"]
    });
});