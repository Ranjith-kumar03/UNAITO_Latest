// $(function () {

//     $('[data-toggle="popover"]').popover()

//     $('.expose').on('click', function () {
//         $(this).css('z-index', '99999');
//         $('#page_overlay').fadeIn(300);
//     });

//     $('#page_overlay').on('click', function () {
//         $('#page_overlay').fadeOut(300, function () {
//             $('.expose').css('z-index', '1');
//             $('.side-appbar').removeClass('side-appbar-open');
//         });
//     });

//     $('.side-appbar .profile-menu a.dropdown-item').on('click', function () {
//         $('#page_overlay').fadeOut(300, function () {
//             $('.expose').css('z-index', '1');
//             $('.side-appbar').removeClass('side-appbar-open');
//         });
//     });

// });

// function closeSidebar() {
//     $('#page_overlay').fadeOut(300, function () {
//         $('.expose').css('z-index', '1');
//         $('.side-appbar').removeClass('side-appbar-open');
//     });
// };

// function showCompanyDetails() {
//     $('.companyDropdown').toggleClass('open');
//     $('.companyDetail').toggleClass('open');
//     $(".tab-content").css({
//         'height': $(window).height() - $('.title-bar').outerHeight() - $('.topBox').outerHeight() - $('#myTab').outerHeight() - $('.bottomBtnBox').outerHeight() - 60 - 24 + 'px'
//     });
// };





// $(document).ready(function () {

//     /* =================== for input range ==================== */
//     function appendTitles() {
//         var val = ($('input[type="range"]').val() - $('input[type="range"]').attr('min')) / ($('input[type="range"]').attr('max') - $('input[type="range"]').attr('min'));
//         var valend = val + 0.001;
//         console.log(val);
//         console.log(valend);
//         $('input[type="range"]').css('background-image',
//             '-webkit-gradient(linear, left top, right top, ' +
//             'color-stop(' + val + ', #28a0ff), ' +
//             'color-stop(' + valend + ', #dee2e6)' +
//             ')'
//         );

//         for (var i = 0; i <= 20; i++) {
//             var rangeWidth = $('.customRangeBox').width();
//             rangeShadow = 15 + (rangeWidth / 20) * i;
//             $('.customRangeBox').append("<span class='customRangePointer' style='left:" + rangeShadow + "px'></span>");
//         }
//     }
//     appendTitles();


//     $('input[type="range"]').change(function () {
//         var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
//         $(this).css('background-image',
//             '-webkit-gradient(linear, left top, right top, ' +
//             'color-stop(' + val + ', #28a0ff), ' +
//             'color-stop(' + val + ', #dee2e6)' +
//             ')'
//         );
//     });
//     /* =================== for input range ==================== */

//     $('.toggle-wrap').on('click', function () {
//         $(this).toggleClass('active');
//         $('.side-navbar').toggleClass('expand');
//     });

//     $('li.nav-item-first').on('click', function (e) {
//         if ($(this).find('ul.nav-item-second').length !== 0 && $('.side-navbar').hasClass('expand')) {
//             e.preventDefault();
//             $('.nav-item-first').removeClass('active');
//             $(this).addClass('active');
//         }
//     });

//     $('.closesecondaryMenu .nav-link').on('click', function (e) {
//         $('li.nav-item-first').removeClass('active')
//         e.stopPropagation();
//         //return false;
//     });
//     $('.nav-item-second li a').on('click', function (e) {
//         if ($(this).parent().find('ul.nav-item-third').length === 0) {
//             window.location.href = $(this).attr('href');
//         }
//     });

//     $('.nav-item-third li a').on('click', function (e) {
//         window.location.href = $(this).attr('href');
//     });

//     $('.assoc-app-btn').on('click', function () {
//         // alert("side bar clicked")
//         var sideBarCnt = '#' + $(this).attr('id') + 'Cnt';
        
//         if ($(sideBarCnt).hasClass("side-appbar-open")) {
//             $('#page_overlay').fadeOut(300, function () {
//                 $('.expose').css('z-index', '1');
//                 $('.side-appbar').removeClass('side-appbar-open');
//             });
//         } else {
//             $('.side-appbar').removeClass('side-appbar-open');
//             $(sideBarCnt).addClass('side-appbar-open');
//         }
//     });

//     $(".tab-content").css({
//         'height': $(window).height() - $('.title-bar').outerHeight() - $('.topBox').outerHeight() - $('#myTab').outerHeight() - $('.bottomBtnBox').outerHeight() - 60 - 24 + 'px'
//     });



// });

// $(window).resize(function () {
//     $(".tab-content").css({
//         'height': $(window).height() - $('.title-bar').outerHeight() - $('.topBox').outerHeight() - $('#myTab').outerHeight() - $('.bottomBtnBox').outerHeight() - 60 - 24 + 'px'
//     });
// });
