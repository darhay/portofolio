// Tailwind Config (must run after the Tailwind CDN script tag is loaded)
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "background": "#131313",
              "on-primary-container": "#514483",
              "on-primary-fixed-variant": "#4a3d7c",
              "inverse-primary": "#625595",
              "error": "#ffb4ab",
              "on-tertiary-fixed": "#1a1c1c",
              "inverse-surface": "#e5e2e1",
              "primary": "#dfd5ff",
              "primary-fixed": "#e7deff",
              "tertiary-container": "#bebfbf",
              "tertiary-fixed-dim": "#c6c6c7",
              "on-secondary-container": "#c4abff",
              "surface": "#131313",
              "on-surface": "#e5e2e1",
              "on-secondary-fixed-variant": "#5516be",
              "on-primary": "#332664",
              "outline": "#938f9a",
              "inverse-on-surface": "#313030",
              "primary-container": "#c4b5fd",
              "on-secondary-fixed": "#23005c",
              "on-tertiary-fixed-variant": "#454747",
              "surface-container": "#201f1f",
              "on-primary-fixed": "#1e0e4e",
              "surface-dim": "#131313",
              "surface-container-lowest": "#0e0e0e",
              "tertiary-fixed": "#e2e2e2",
              "primary-fixed-dim": "#ccbeff",
              "on-tertiary": "#2f3131",
              "on-error-container": "#ffdad6",
              "surface-container-high": "#2a2a2a",
              "tertiary": "#dadbdb",
              "secondary-fixed-dim": "#d0bcff",
              "on-surface-variant": "#cac4d1",
              "on-secondary": "#3c0091",
              "secondary-container": "#571bc1",
              "on-error": "#690005",
              "on-tertiary-container": "#4c4e4e",
              "secondary": "#d0bcff",
              "surface-container-low": "#1c1b1b",
              "outline-variant": "#48454f",
              "surface-bright": "#3a3939",
              "surface-variant": "#353534",
              "surface-tint": "#ccbeff",
              "error-container": "#93000a",
              "on-background": "#e5e2e1",
              "surface-container-highest": "#353534",
              "secondary-fixed": "#e9ddff"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "gutter": "24px",
              "container-max": "1440px",
              "margin-edge": "48px",
              "unit": "8px",
              "section-gap": "160px"
      },
      "fontFamily": {
              "display-lg": [
                      "hankenGrotesk"
              ],
              "body-lg": [
                      "notoSans"
              ],
              "headline-lg": [
                      "hankenGrotesk"
              ],
              "headline-md": [
                      "hankenGrotesk"
              ],
              "label-mono": [
                      "jetbrainsMono"
              ],
              "body-md": [
                      "notoSans"
              ],
              "display-xl": [
                      "hankenGrotesk"
              ],
              "display-lg-mobile": [
                      "hankenGrotesk"
              ]
      },
      "fontSize": {
              "display-lg": [
                      "80px",
                      {
                              "lineHeight": "110%",
                              "letterSpacing": "-0.03em",
                              "fontWeight": "800"
                      }
              ],
              "body-lg": [
                      "20px",
                      {
                              "lineHeight": "160%",
                              "fontWeight": "400"
                      }
              ],
              "headline-lg": [
                      "48px",
                      {
                              "lineHeight": "120%",
                              "letterSpacing": "-0.02em",
                              "fontWeight": "700"
                      }
              ],
              "headline-md": [
                      "32px",
                      {
                              "lineHeight": "130%",
                              "fontWeight": "600"
                      }
              ],
              "label-mono": [
                      "12px",
                      {
                              "lineHeight": "100%",
                              "letterSpacing": "0.05em",
                              "fontWeight": "500"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "160%",
                              "fontWeight": "400"
                      }
              ],
              "display-xl": [
                      "120px",
                      {
                              "lineHeight": "110%",
                              "letterSpacing": "-0.04em",
                              "fontWeight": "800"
                      }
              ],
              "display-lg-mobile": [
                      "48px",
                      {
                              "lineHeight": "110%",
                              "fontWeight": "800"
                      }
              ]
      }
    },
  }
};

// Simple Intersection Observer for fade-up animations
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', String(!isHidden));
            mobileMenuToggle.innerHTML = isHidden
                ? '<span class="material-symbols-outlined text-3xl">menu</span>'
                : '<span class="material-symbols-outlined text-3xl">close</span>';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
            });
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealVisibleElements = () => {
        document.querySelectorAll('.fade-up').forEach(element => {
           const rect = element.getBoundingClientRect();
           if (rect.top < window.innerHeight + 120) {
               element.classList.add('visible');
           }
        });
    };

    document.querySelectorAll('.fade-up').forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('.masonry-item img').forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
    });

    document.querySelectorAll('.masonry-item[onclick]').forEach(item => {
        item.removeAttribute('onclick');
    });

    document.querySelectorAll('.masonry-item').forEach(item => {
        const overlay = item.querySelector('.absolute.inset-0');
        if (overlay) {
           overlay.classList.add('project-overlay');
        }

        const projectButton = overlay?.querySelector('.font-jetbrainsMono:last-of-type');
        if (projectButton) {
           const button = document.createElement('button');
           button.type = 'button';
           button.className = projectButton.className + ' view-project-btn';
           button.setAttribute('aria-label', 'View project');
           button.innerHTML = projectButton.innerHTML;
           button.addEventListener('click', (event) => {
               event.preventDefault();
               event.stopPropagation();
               handleProjectAction(item);
           });
           projectButton.replaceWith(button);
        }

        const toggleTapState = () => {
           if (!window.matchMedia('(hover: none)').matches) return;
           item.classList.add('is-tapped');
           clearTimeout(item.dataset.tapTimeoutId);
           item.dataset.tapTimeoutId = setTimeout(() => {
               item.classList.remove('is-tapped');
           }, 1500);
        };

        item.addEventListener('click', (event) => {
           if (event.target.closest('.view-project-btn')) {
               return;
           }

           if (window.matchMedia('(hover: none)').matches) {
               event.preventDefault();
               event.stopPropagation();
               toggleTapState();
               return;
           }

           event.preventDefault();
           event.stopPropagation();
        });

        item.addEventListener('pointerdown', (event) => {
           if (event.pointerType === 'touch' && !event.target.closest('.view-project-btn')) {
               toggleTapState();
           }
        });

        document.addEventListener('touchstart', (event) => {
           if (!window.matchMedia('(hover: none)').matches) return;
           if (!event.target.closest('.masonry-item')) {
               document.querySelectorAll('.masonry-item.is-tapped').forEach((activeItem) => {
                   activeItem.classList.remove('is-tapped');
               });
           }
        }, { passive: true });
    });

    // Trigger immediately for elements already in view on load
    setTimeout(revealVisibleElements, 100);

    window.addEventListener('resize', () => {
        requestAnimationFrame(revealVisibleElements);
    });

    // Filter logic (basic setup)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const masonryItems = document.querySelectorAll('.masonry-item');

    const applyFilter = (filterValue) => {
        masonryItems.forEach(item => {
           const matches = filterValue === 'all' || item.getAttribute('data-category') === filterValue;
           item.style.display = matches ? 'block' : 'none';
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
           // Update active state
           filterBtns.forEach(b => {
               b.classList.remove('text-primary', 'border-b', 'border-primary');
               b.classList.add('text-on-surface-variant');
           });
           btn.classList.add('text-primary', 'border-b', 'border-primary');
           btn.classList.remove('text-on-surface-variant');

           const filterValue = btn.getAttribute('data-filter');
           applyFilter(filterValue);
        });
    });

    applyFilter(document.querySelector('.filter-btn.text-primary')?.getAttribute('data-filter') || 'all');
});

// Lightbox Logic (Mockup structure for keyboard support)
let currentItemIndex = 0;
let zoomLevel = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let dragOriginX = 0;
let dragOriginY = 0;

function applyZoom() {
    const img = document.getElementById('lightbox-img');
    if (!img) return;

    img.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
    img.style.transformOrigin = 'center center';
}

function setZoom(value) {
    const minZoom = 1;
    const maxZoom = 3;
    zoomLevel = Math.min(maxZoom, Math.max(minZoom, value));
    applyZoom();
}

function zoomIn() {
    setZoom(zoomLevel + 0.25);
}

function zoomOut() {
    setZoom(zoomLevel - 0.25);
}

function resetZoom() {
    panX = 0;
    panY = 0;
    setZoom(1);
}

function handleProjectAction(element) {
    if (!element) return;

    const projectUrl = element.getAttribute('data-project-url');
    if (projectUrl) {
        try {
            const tempLink = document.createElement('a');
            tempLink.href = projectUrl;
            tempLink.target = '_blank';
            tempLink.rel = 'noopener noreferrer';
            tempLink.style.display = 'none';
            document.body.appendChild(tempLink);
            tempLink.click();
            tempLink.remove();
        } catch (error) {
            window.open(projectUrl, '_blank', 'noopener,noreferrer');
        }
        return;
    }

    openLightbox(element);
}

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !element) return;

    const projectUrl = element.getAttribute('data-project-url');
    if (projectUrl) {
        handleProjectAction(element);
        return;
    }

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
    resetZoom();

    const imgEl = element.querySelector('img');
    const catEl = element.querySelector('.text-primary') ? element.querySelector('.text-primary').innerText : '';
    const titleEl = element.querySelector('h3, h4') ? element.querySelector('h3, h4').innerText : '';
    const descEl = element.querySelector('p') ? element.querySelector('p').innerText : '';

    const lightboxImg = document.getElementById('lightbox-img');
    if (imgEl && lightboxImg) {
        lightboxImg.src = imgEl.currentSrc || imgEl.src;
        lightboxImg.alt = imgEl.alt || titleEl;
    }
    document.getElementById('lightbox-category').innerText = catEl;
    document.getElementById('lightbox-title').innerText = titleEl;
    if (document.getElementById('lightbox-desc')) {
        document.getElementById('lightbox-desc').innerText = descEl;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
    resetZoom();
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || lightbox.classList.contains('hidden')) return;

    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=' || e.key === '-' || e.key === '_' || e.key === '0')) {
        e.preventDefault();
    }

    if (e.key === 'Escape') closeLightbox();
    if (e.key === '+' || e.key === '=') zoomIn();
    if (e.key === '-' || e.key === '_') zoomOut();
    if (e.key === '0') resetZoom();
});

const lightboxContent = document.getElementById('lightbox-content');
if (lightboxContent) {
    lightboxContent.addEventListener('wheel', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox || lightbox.classList.contains('hidden')) return;
        e.preventDefault();

        if (e.ctrlKey || e.metaKey) {
            if (e.deltaY > 0) {
                zoomOut();
            } else {
                zoomIn();
            }
            return;
        }

        if (e.deltaY > 0) {
            zoomOut();
        } else {
            zoomIn();
        }
    }, { passive: false });

    lightboxContent.addEventListener('pointerdown', (e) => {
        if (zoomLevel <= 1) return;
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        dragOriginX = panX;
        dragOriginY = panY;
        lightboxContent.setPointerCapture(e.pointerId);
    });

    lightboxContent.addEventListener('pointermove', (e) => {
        if (!isDragging || zoomLevel <= 1) return;
        panX = dragOriginX + (e.clientX - dragStartX);
        panY = dragOriginY + (e.clientY - dragStartY);
        applyZoom();
    });

    ['pointerup', 'pointerleave', 'pointercancel'].forEach((eventName) => {
        lightboxContent.addEventListener(eventName, () => {
            isDragging = false;
        });
    });
}

const lightboxImg = document.getElementById('lightbox-img');
if (lightboxImg) {
    lightboxImg.style.transformOrigin = 'center center';
}
