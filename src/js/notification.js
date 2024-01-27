import iziToast from "izitoast";

export function sendIziToast(text, type) {
  iziToast[type]({
    message: text,
    position: "topCenter",
    transitionIn: 'fadeInDown'
  });
}