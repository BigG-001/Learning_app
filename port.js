
        // Page Loader
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('pageLoader').classList.add('hidden');
            }, 500);
        });

        // Typing Animation
        const words = ['Frontend Developer', 'Web Designer', 'React Developer', 'UI/UX Enthusiast'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 1000);

        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        const icon = themeToggle.querySelector('i');

        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }

        // Contact Sidebar
        const contactBtn = document.getElementById('contactBtn');
        const mobileContact = document.getElementById('mobileContact');
        const contactSidebar = document.getElementById('contactSidebar');
        const contactOverlay = document.getElementById('contactOverlay');
        const closeSidebar = document.getElementById('closeSidebar');

        function openSidebar() {
            contactSidebar.classList.add('active');
            contactOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeSidebarFunc() {
            contactSidebar.classList.remove('active');
            contactOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        contactBtn.addEventListener('click', openSidebar);
        mobileContact.addEventListener('click', function(e) {
            e.preventDefault();
            openSidebar();
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
        closeSidebar.addEventListener('click', closeSidebarFunc);
        contactOverlay.addEventListener('click', closeSidebarFunc);

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        document.querySelectorAll('.mobile-link').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });

        // Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(function(el) {
            observer.observe(el);
        });

        // Active Navigation Link
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });

            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // View Project button click handler
        document.querySelectorAll('.view-project-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const projectName = this.closest('.project-card').querySelector('h3').textContent;
                alert('Opening ' + projectName + '... (Demo link would go here)');
            });
        });

        // Add parallax effect to hero image wrapper
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroWrapper = document.getElementById('heroImageWrapper');
            if (heroWrapper && window.innerWidth > 768) {
                heroWrapper.style.transform = 'translateY(' + (scrolled * 0.1) + 'px)';
            }
        });