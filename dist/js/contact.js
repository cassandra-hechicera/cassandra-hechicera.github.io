function emailIsValid(a){if(a){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(a)}return!1}function performContact(){toastr.clear(),toastr.options.newestOnTop=!1;var a=!0,t=$("#name").val();void 0!==t&&null!=t&&""!=t||(toastr.warning("Indica tu nombre"),a=!1);var n=$("#email").val();void 0===n||null==n||""==n?(toastr.warning("Indica tu email"),a=!1):emailIsValid(n)||(toastr.warning("Indica correctamente tu email"),a=!1);var i=$("#message").val();void 0!==i&&null!=i&&""!=i||(toastr.warning("Indica tu mensaje"),a=!1),a&&$("#contact-form").submit()}