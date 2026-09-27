function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  const target = document.getElementById(sectionId);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function selectService(service) {
  const serviceType = document.getElementById("serviceType");

  if (serviceType) {
    serviceType.value = service;
  }

  showSection("create");
}

function confirmOrder() {
  alert("تم إرسال طلبك بنجاح ✅");
  showSection("tracking");
}

function goHome() {
  showSection("home");
}
