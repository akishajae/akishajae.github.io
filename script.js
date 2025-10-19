(function () {
  // Event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");

  // Parallax settings
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
      50 - (_mouseY - _h) * 0.06
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

// audio

// var audio = new Audio(
//   "https://github.com/akishajae/akishajae.github.io/raw/refs/heads/main/assets/bgm/piano-for-spring-loop-348840.mp3?raw=true"
// );
// audio.play();

const container = document.getElementById("constellation");
const starCount = 9;

// Create stars
for (let i = 1; i <= starCount; i++) {
  const star = document.createElement("div");
  container.appendChild(star);

  star.id = `star-${i}`;
  star.className = "star";
  star.innerHTML = `
                  <svg 
                    version="1.1" 
                    id="sparkle_x5F_stars" 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128" 
                    style="enable-background:new 0 0 128 128" 
                    xml:space="preserve">
                    fill="#f0eaea"
                    stroke="#f0eaea"
                    <g id="row1">
                      <path id="icon:5" d="m128 62.6-38.3 6.6c-9.9 1.7-17.6 9.6-18.9 19.6L65.4 128l-6.6-38.3c-1.7-9.9-9.6-17.6-19.6-18.9L0 65.4l38.3-6.6c9.9-1.7 17.6-9.6 18.9-19.6L62.6 0l6.6 38.3c1.7 9.9 9.6 17.6 19.6 18.9l39.2 5.4z" ></path>
                    </g>
                  </svg>
                  <svg
                    width="50"
                    height="50"
                  >
                  </svg>
                `;
}

function closeModal(modal, span) {
  modal.style.display = "none";
}

function displayModal(modal, span, index) {
  modal.style.display = "block";
  span.onclick = function () {
    closeModal(modal, span);
  };
  window.onclick = function (event) {
    if (event.target === modal || event.target.classList.contains("close")) {
      closeModal(modal, span);
    }
  };
}

document.getElementById("star-1").addEventListener("click", function () {
  var modal = document.getElementById("star1-modal");
  var span = document.getElementsByClassName("close")[0];
  displayModal(modal, span, 0);
});

document.getElementById("star-2").addEventListener("click", function () {
  var modal = document.getElementById("star2-modal");
  var span = document.getElementsByClassName("close")[1];
  displayModal(modal, span, 1);
});

document.getElementById("star-3").addEventListener("click", function () {
  var modal = document.getElementById("star3-modal");
  var span = document.getElementsByClassName("close")[2];
  displayModal(modal, span, 2);
});

document.getElementById("star-4").addEventListener("click", function () {
  var modal = document.getElementById("star4-modal");
  var span = document.getElementsByClassName("close")[3];
  displayModal(modal, span, 3);
});

document.getElementById("star-5").addEventListener("click", function () {
  var modal = document.getElementById("star5-modal");
  var span = document.getElementsByClassName("close")[4];
  displayModal(modal, span, 4);
});

document.getElementById("star-6").addEventListener("click", function () {
  var modal = document.getElementById("star6-modal");
  var span = document.getElementsByClassName("close")[5];
  displayModal(modal, span, 5);
});

document.getElementById("star-7").addEventListener("click", function () {
  var modal = document.getElementById("star7-modal");
  var span = document.getElementsByClassName("close")[6];
  displayModal(modal, span, 6);
});

document.getElementById("star-8").addEventListener("click", function () {
  var modal = document.getElementById("star8-modal");
  var span = document.getElementsByClassName("close")[7];
  displayModal(modal, span, 7);
});

document.getElementById("star-9").addEventListener("click", function () {
  var modal = document.getElementById("star9-modal");
  var span = document.getElementsByClassName("close")[8];
  displayModal(modal, span, 8);
});
