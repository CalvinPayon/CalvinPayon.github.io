const AnimTXT = document.getElementById("animtxt");

window.addEventListener("load", function(event)
{
  window.scroll(0,0);
})

new Typewriter(AnimTXT,
{
  deleteSpeed: 30,
})
  .changeDelay(50)
  .typeString("Calvin Payon, <br>")
  .pauseFor(300)
  .typeString("Développeur Web, Front-End et Back-End")
  .pause(1500)
  .deleteChars(22)
  .typeString("<a class='blue'> Front-End et Back-End</a>." )
  .start();

function scrolldown()
{
  section.scrollIntoView();
}

function scrollup()
{
  window.scroll(0,0);
}

