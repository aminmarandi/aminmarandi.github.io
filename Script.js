<script>
  const navToggle = document.getElementById("navToggle");
  const navMenuContainer = document.querySelector(".nav-menu-container");

  navToggle.addEventListener("click", () => {
    navMenuContainer.classList.toggle("active");
  });
</script>
