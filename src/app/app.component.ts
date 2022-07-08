import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './Services/auth.service';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  //isLoggedIn$: Observable<boolean>;
  name: String;
  loggedIn: boolean;
  rememberme;

  constructor(public authService: AuthService, private cdr: ChangeDetectorRef, private router: Router) {
    this.authService.username$.subscribe((username) => {
      this.name = username;
      console.log("see the full name", this.name)
    })
    if (this.name === '') {
      this.name = localStorage.getItem('fullname')
    }

  }
  ngAfterViewInit(): void {
    ///JQUERY Code moved to here for Loading with appcomponent for click events not getting failed
    $(function () {
      $('[data-toggle="popover"]').popover()
  
      $('.expose').on('click', function () {
          $(this).css('z-index', '99999');
          $('#page_overlay').fadeIn(300);
      });
  
      $('#page_overlay').on('click', function () {
          $('#page_overlay').fadeOut(300, function () {
              $('.expose').css('z-index', '1');
              $('.side-appbar').removeClass('side-appbar-open');
          });
      });
  
      $('.side-appbar .profile-menu a.dropdown-item').on('click', function () {
          $('#page_overlay').fadeOut(300, function () {
              $('.expose').css('z-index', '1');
              $('.side-appbar').removeClass('side-appbar-open');
          });
      });
  
  });
  
  function closeSidebar() {
      $('#page_overlay').fadeOut(300, function () {
          $('.expose').css('z-index', '1');
          $('.side-appbar').removeClass('side-appbar-open');
      });
  };
  
  function showCompanyDetails() {
      $('.companyDropdown').toggleClass('open');
      $('.companyDetail').toggleClass('open');
      $(".tab-content").css({
          'height': $(window).height() - $('.title-bar').outerHeight() - $('.topBox').outerHeight() - $('#myTab').outerHeight() - $('.bottomBtnBox').outerHeight() - 60 - 24 + 'px'
      });
  };
  
  
  
  
  
  $(document).ready(function () {
  
      /* =================== for input range ==================== */
      function appendTitles() {
          var val = ($('input[type="range"]').val() - $('input[type="range"]').attr('min')) / ($('input[type="range"]').attr('max') - $('input[type="range"]').attr('min'));
          var valend = val + 0.001;
          console.log(val);
          console.log(valend);
          $('input[type="range"]').css('background-image',
              '-webkit-gradient(linear, left top, right top, ' +
              'color-stop(' + val + ', #28a0ff), ' +
              'color-stop(' + valend + ', #dee2e6)' +
              ')'
          );
  
          for (var i = 0; i <= 20; i++) {
              var rangeWidth = $('.customRangeBox').width();
             let rangeShadow = 15 + (rangeWidth / 20) * i;
              $('.customRangeBox').append("<span class='customRangePointer' style='left:" + rangeShadow + "px'></span>");
          }
      }
      appendTitles();
  
  
      $('input[type="range"]').change(function () {
          var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
          $(this).css('background-image',
              '-webkit-gradient(linear, left top, right top, ' +
              'color-stop(' + val + ', #28a0ff), ' +
              'color-stop(' + val + ', #dee2e6)' +
              ')'
          );
      });
      /* =================== for input range ==================== */
  
      $('.toggle-wrap').on('click', function () {
          $(this).toggleClass('active');
          $('.side-navbar').toggleClass('expand');
      });
  
      $('li.nav-item-first').on('click', function (e) {
          if ($(this).find('ul.nav-item-second').length !== 0 && $('.side-navbar').hasClass('expand')) {
              e.preventDefault();
              $('.nav-item-first').removeClass('active');
              $(this).addClass('active');
          }
      });
  
      $('.closesecondaryMenu .nav-link').on('click', function (e) {
          $('li.nav-item-first').removeClass('active')
          e.stopPropagation();
          //return false;
      });
      $('.nav-item-second li a').on('click', function (e) {
          if ($(this).parent().find('ul.nav-item-third').length === 0) {
              window.location.href = $(this).attr('href');
          }
      });
  
      $('.nav-item-third li a').on('click', function (e) {
          window.location.href = $(this).attr('href');
      });
  
      $('.assoc-app-btn').on('click', function () {
          // alert("side bar clicked")
          var sideBarCnt = '#' + $(this).attr('id') + 'Cnt';
          
          if ($(sideBarCnt).hasClass("side-appbar-open")) {
              $('#page_overlay').fadeOut(300, function () {
                  $('.expose').css('z-index', '1');
                  $('.side-appbar').removeClass('side-appbar-open');
              });
          } else {
              $('.side-appbar').removeClass('side-appbar-open');
              $(sideBarCnt).addClass('side-appbar-open');
          }
      });
  
      $(".tab-content").css({
          'height': $(window).height() - $('.title-bar').outerHeight() - $('.topBox').outerHeight() - $('#myTab').outerHeight() - $('.bottomBtnBox').outerHeight() - 60 - 24 + 'px'
      });
  
  
  
  });
  
  $(window).resize(function () {
      $(".tab-content").css({
          'height': $(window).height() - $('.title-bar').outerHeight() - $('.topBox').outerHeight() - $('#myTab').outerHeight() - $('.bottomBtnBox').outerHeight() - 60 - 24 + 'px'
      });
  });
  



  }

  ngOnChanges() {
    ///for Firstname and Last Name Display on ICON

  }





  getInitials(nameString?: String) {

    console.log("see the name string", nameString)
    if(nameString!=null)
    {
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  } else{
    return ''
  }
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.cdr.detectChanges()
    // this.name = !!localStorage.getItem('fullname') ? localStorage.getItem('fullname') : ""
    // console.log("see the full name",this.name )

  }
  isLoginView() {
    if (this.router.url.match('/login')) {
      //need to remove once refresh screen white page is fixed
      this.rememberme = localStorage.getItem('rememberme');
      if (!this.rememberme) {
        this.logOut()
        //console.log("iam inside app component remember me not",this.rememberme)
      }
      return true;
    } else {
      return false;
    }
  }


  isApplicationView() {

    console.log("see the router url", this.router.url)
    if (this.router.url.match('/application')) {
      console.log("Iam inside true")
      return true;
    } else {
      console.log("Iam inside false")
      return false;
    }

  }

  clickNotification(e) {
    console.log("Iam clciked in Notifcation new")
  }

  clickApplication(e) {
    console.log("Iam clciked in Application new")
  }

  clickMenu(e) {
    console.log("Iam clciked in Menu new")
  }

  logOut() {
    //this.authService.logout();
    this.router.navigate(['/logout']);
  }



  ngOnDestroy(): void {
    //this.isLoggedIn$.unsubscribe()
  }


}
