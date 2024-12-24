
    
    $(document).ready(function () {


        let $btns = $('.project-area .button-group button');
    
    
        $btns.click(function (e) {
    
            $('.project-area .button-group button').removeClass('active');
            e.target.classList.add('active');
    
            let selector = $(e.target).attr('data-filter');
            $('.project-area .grid').isotope({
                filter: selector
            });
    
            return false;
        })
    
        $('.project-area .button-group #btn1').trigger('click');
    
    
   
        // sticky navigation menu
    
// When the page is loaded

      
    });
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
let selectHeader = document.getElementById('header')
  if (selectHeader) {
    console.log(selectHeader)

    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


