function showDetails(artId) {
alert("You selected: " + artId);
}

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your form has been submitted.");
  });
});
