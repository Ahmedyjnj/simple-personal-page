document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {

    
    const projectName = card.dataset.project;

    const images = [
      `photos/projects/${projectName}/(1).png`,
      `photos/projects/${projectName}/(2).png`,
      `photos/projects/${projectName}/(3).png`,
      `photos/projects/${projectName}/(4).png`,
    ]; // replace per project

    let index = 0;
    const imgElement = card.querySelector('.slide-img');
    const nextBtn = card.querySelector('.next-btn');
    const prevBtn = card.querySelector('.prev-btn');

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % images.length;
      imgElement.src = images[index];
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      imgElement.src = images[index];
    });
  }





);

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_2f7o6p8";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    },
  );
});










});










