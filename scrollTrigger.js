let text = document.querySelector("h2"),
  textString = text.textContent,
  split = textString.split(""),
  tl = gsap.timeline();

text.textContent = "";
for (let i = 0; i < split.length; i++) {
  text.innerHTML += `<span>${split[i]}</span>`;
}

tl.from("span", {
  y: -500,
  opacity: 0,
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: "section",
  },
  stagger: {
    amount: 1,
  },
});
