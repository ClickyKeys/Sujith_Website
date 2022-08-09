$(document).ready(function () {
    setTimeout(function () {

          $('a[href]').each(function () {
              var href = this.href;

              $(this).removeAttr('href').css('cursor', 'pointer').click(function () {
                  if (href.toLowerCase().indexOf("#") >= 0) {

                  } else {
                      window.open(href, '_blank');
                  }
              });
          });

    }, 500);
});