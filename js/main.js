
    $(function() {

        //toggle navbar
        $('.navbar .toggle').click(function(){
            $('.navbar .links').slideToggle();
        });

        //scrolling navbar
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            if(st > 350){
                $('.navbar').addClass('scrolled');
            }
            else{
                $('.navbar').removeClass('scrolled');
            }
        })

        //home slider
        var itemsNo = $('.slider-item').length;

        //slider autoplay

        SliderAutoplay();

        function SliderAutoplay(){
        setInterval(sliderNext, 4000);
        }

        function sliderNext(){
            var currentSlider = $('.slider-item.active');
            currentIndx =  $('.slider-item').index(currentSlider);
            if(currentIndx == itemsNo - 1){
                currentIndx = -1;
            }
            sliderChange(currentIndx + 1);
        }

        //handle dots click
        $('.slider-dots li').each(function(){
            $(this).on('click', function(){
                sliderChange($(this).index());
            });
        });

        function sliderChange(index){
            $('.slider-item.active').removeClass('active');
            $('.slider-item').eq(index).addClass('active');
            $('.slider-dots li.active').removeClass('active');
            $('.slider-dots li').eq(index).addClass('active');
        }


        // $(window).stellar({
        //     responsive: true,
        //     parallaxBackgrounds: true,
        //     parallaxElements: true,
        //     horizontalScrolling: false,
        //     hideDistantElements: false,
        //     scrollProperty: 'scroll',
        //     horizontalOffset: 0,
        //     verticalOffset: 0
        // });

        //Tabs Section
        $('.products li').click(function(){
            $('.products li').removeClass('active');
            $(this).addClass('active');
            $('.products .tab').removeClass('active');
            $('.products .tab').removeClass('fade');
            var currentTab = $('.products .tab').eq($(this).index());
            currentTab.addClass('active');
            currentTab.addClass('fade');
        })

        // Scroll Animation

        const scrollElements = document.querySelectorAll(".js-scroll");
        window.addEventListener('scroll', ()=>{
            scrollElements.forEach(el=>{
                if(el.getBoundingClientRect().top <= window.innerHeight){
                    el.classList.add('scrolled');
                }
            })
        });

        //Counter
        var experienceSection = document.querySelector('.counter');
        var Countercount = 0;
        window.addEventListener("scroll", () => {
            function counter(id, start, end, duration) {
                let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                clearInterval(timer);
                }
                }, step);
            }
            if(experienceSection.getBoundingClientRect().top <= window.innerHeight){
                if(Countercount==0){
                    counter("count1", 0, 50, 1000);
                    counter("count2", 100, 350, 500);
                    counter("count3", 0, 1564, 500);
                    counter("count4", 0, 300, 500);
                }
                Countercount++;
            }
        });
    })