 /* tab to accordion for mobile view  */

 function getAccordion(element_id, screen) {
     $(window).resize(function () {
         location.reload();
     });

     if ($(window).width() < screen) {
         var concat = '';
         obj_tabs = $(element_id + " li").toArray();
         obj_cont = $(".tab-content .tab-pane").toArray();
         jQuery.each(obj_tabs, function (n, val) {
             concat += '<div id="' + n + '" class="panel panel-default">';
             concat += '<div class="panel-heading" role="tab" id="heading' + n + '">';
             concat += '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + n + '" aria-expanded="false" aria-controls="collapse' + n + '"><span>' + val.innerText + '</span></a></h4>';
             concat += '</div>';
             concat += '<div id="collapse' + n + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + n + '">';
             concat += '<div class="panel-body">' + obj_cont[n].innerHTML + '</div>';
             concat += '</div>';
             concat += '</div>';
         });
         $("#accordion").html(concat);
         /*$("#accordion").find('.panel-collapse:first').addClass("in");
         $("#accordion").find('.panel-title a:first').attr("aria-expanded", "true");*/
         $("#accordion #1 .panel-collapse").addClass("show");
         $("#accordion #1 .panel-title a").attr("aria-expanded", "true").addClass("active");;
         $(element_id).remove();
         $(".tab-content").remove();
     }
 };

 $(document).ready(function () {
     getAccordion("#tabspayment", 768);
     $("#accordion a").on('click', function () {
         $("#accordion a").removeClass('active');
         $(this).addClass('active');
         $(".panel-collapse").removeClass('show');
         var accordionID = $(this).attr('href');
     });
 });
