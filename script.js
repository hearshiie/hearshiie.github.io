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
  /* ---------- DROPDOWN MENU ---------- */
  const dropdownButton = document.querySelector("#dropdownBtn");
  const dropdownMenu   = document.querySelector("#dropdownMenu");
  const dropdownArrow  = document.querySelector("#dropdownArrow");

  dropdownButton.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
    dropdownArrow.classList.toggle("open");
  });

  // Bonus 1 — close when clicking outside
  document.addEventListener("click", function (e) {
    if (!dropdownMenu.contains(e.target) && e.target !== dropdownButton) {
      dropdownMenu.classList.remove("show");
      dropdownArrow.classList.remove("open");
    }
  });
