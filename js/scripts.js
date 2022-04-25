$(document).ready(function () {
  var a = document.querySelectorAll(".titles .row .col-3 .box");
  $(".container").hide();
  for (var i = 0, length = a.length; i < length; i++) {
    a[i].onclick = function () {
      var b = document.querySelector(".active");
      var title = this.getElementsByTagName("span")[0].innerText;
      $(".container").empty();

      switch (title) {
        case "About me":
          var content = `
        <p class="introduction space">I am a developer who has enthusiasm for Web development. I want to challenge myself and
            learn more to improve my skills and gain as much experience as possible.</p>
        `;
          break;
        case "My contact":
          var content = `
        <div class="contact-box">
          <span class="material-icons">perm_phone_msg</span>
          <span class="info">0359338428</span>
        </div>
        <div class="contact-box">
            <span class="material-icons">email</span>
            <span class="info">qd24052000@gmail.com</span>
        </div>
        <div class="contact-box">
            <span class="material-icons">my_location</span>
            <span class="info">Xuan Dieu, Tan Binh District, Ho Chi Minh City</span>
        </div>
        `;
          break;
        case "My skills":
          var content = `
        <div class="skills">
            <div class="bar angular" data-skill="Angular"></div>
            <div class="bar git" data-skill="Git"></div>
            <div class="bar html" data-skill="HTML/CSS"></div>
            <div class="bar javaee" data-skill="JavaEE"></div>
            <div class="bar mysql" data-skill="MySQL"></div>
        </div>
          `;
          break;
        case "My experience":
          var content = `
          <div class="projects">
          <div class="project">
              <div class="project-title">
                  <span class="project-name">Smart Food Court System</span>
                  <span class="project-time">
                      Feb 2019 - Jun 2019
                  </span>
              </div>
              <span class="role">Developer</span>
              <ul>
                  <li class="group"><strong>Teamsize:</strong> 5</li>
                  <li class="tech"><strong>Technologies:</strong> Winform C#</li>
                  <li class="details"><strong>Description:</strong> A software built in intention to help
                      students in universities order food at food-stalls more easily.</li>
              </ul>
          </div>
          <div class="project">
              <div class="project-title">
                  <span class="project-name project-name-size">E.Book-store</span>
                  <span class="project-time">Feb 2020 - Jun 2020</span>
              </div>
              <span class="role">Developer</span>
              <ul>
                  <li class="group"><strong>Teamsize:</strong> 4</li>
                  <li class="tech"><strong>Technologies:</strong> Nodejs</li>
                  <li class="details"><strong>Description:</strong> An online book-store sells books for both
                      inland and international customers</li>
              </ul>
          </div>
          <div class="project">
              <div class="project-title">
                  <span class="project-name project-name-size">Education Management</span>
                  <span class="project-time">Feb 2021 - Jun 2021</span>
              </div>
              <span class="role">Developer</span>
              <ul>
                  <li class="group"><strong>Teamsize:</strong> 5</li>
                  <li class="tech"><strong>Technologies:</strong> Android Java</li>
                  <li class="details"><strong>Description:</strong>Managing student's educational things like
                      schedule, grades, etc.</li>
              </ul>
          </div>
          <div class="project">
              <div class="project-title">
                  <span class="project-name project-name-size">BKShoes</span>
                  <span class="project-time">Aug 2021 - Dec 2021</span>
              </div>
              <span class="role">Developer</span>
              <ul>
                  <li class="group"><strong>Teamsize:</strong> 5</li>
                  <li class="tech"><strong>Technologies:</strong> ReactJS, Python web server</li>
                  <li class="details"><strong>Description:</strong> Responsive webapp to serve customers from
                      all ages with best shoes from popular brands.</li>
              </ul>
          </div>
      </div>
          `;
          break;
      }

      $(".container").append(content);

      $(".container").slideDown();
      this.classList.add("active");
      if (b) {
        b.classList.remove("active");
        var c = b.getElementsByTagName("span")[0];
        if (c.innerText === this.getElementsByTagName("span")[0].innerText)
          $(".container").slideToggle();
      }
    };
  }
});
