  const scrollTargets = document.querySelectorAll('[data-target]');
  scrollTargets.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const navButtons = document.querySelectorAll('.nav-links button');
  const sections = ['home','skills','work','contact'].map(id => document.getElementById(id));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.id;
        navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.target === id));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach(section => { if(section) observer.observe(section); });