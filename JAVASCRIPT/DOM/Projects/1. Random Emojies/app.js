const emoji = document.querySelector("#emoji");
const emojis = [
  "😃", // Smiling Face with Open Mouth
  "😄", // Smiling Face with Open Mouth and Smiling Eyes
  "😁", // Grinning Face with Smiling Eyes
  "😊", // Smiling Face with Smiling Eyes
  "😇", // Smiling Face with Halo
  "😉", // Winking Face
  "🤩", // Star-Struck
  "😘", // Face Blowing a Kiss
  "😗", // Kissing Face
  "😙", // Kissing Face with Smiling Eyes
  "😚", // Kissing Face with Closed Eyes
  "🤗", // Hugging Face
  "🥰", // Smiling Face with Hearts
  "😍", // Smiling Face with Heart-Eyes
  "🥳", // Partying Face
  "🥂", // Clinking Glasses
  "🍾", // Bottle with Popping Cork
  "🎉", // Party Popper
  "💖", // Sparkling Heart
];

emoji.addEventListener("mouseover", () => {
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});
