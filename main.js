        // Mobile Menu Toggle
        $('.menu-toggle').click(function() {
            $('.nav-links').toggleClass('active');
            $(this).find('i').toggleClass('fa-times');
        });

        // Smooth Scrolling for Navigation Links
        $('.nav-link').on('click', function(e) {
            e.preventDefault();
            const target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 800);
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            $('.nav-links').removeClass('active');
            $('.menu-toggle i').removeClass('fa-times');
        });

        // Sticky Navigation on Scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });

        // FAQ Accordion
        $('.faq-question').click(function() {
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().removeClass('active');
        });

        // Modal Functions
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.className === 'modal') {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }



        $('.lang-btn').click(function() {
            const lang = $(this).data('lang');
            $('.lang-btn').removeClass('active');
            $(this).addClass('active');
            
            if (lang === 'fa') {
                $('html').attr('dir', 'rtl').addClass('rtl');
            } else {
                $('html').attr('dir', 'ltr').removeClass('rtl');
            }
            
            $('[data-i18n]').each(function() {
                const key = $(this).data('i18n');
                if (translations[lang][key]) {
                    if ($(this).is('input, textarea')) {
                        $(this).attr('placeholder', translations[lang][key]);
                    } else {
                        $(this).html(translations[lang][key]);
                    }
                }
            });
        });

        // Form Submission
        $('#contactForm').submit(function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });

        // Newsletter Form Submission
        $('.newsletter-form').submit(function(e) {
            e.preventDefault();
            const email = $(this).find('input').val();
            alert('Thank you for subscribing with ' + email + '!');
            $(this).find('input').val('');
        });