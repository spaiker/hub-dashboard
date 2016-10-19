/*http://filer.grandesign.md/*/

$(document).ready(function() {
    $('.js-input-templates').filer({
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
});/**
 * Created by Main on 20.10.2016.
 */
