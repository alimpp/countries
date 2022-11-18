import Swal from "sweetalert2";
// icons name => error - info - success - warning

export const TOAST_MESSAGE = (message, icon, time) => {
  Swal.fire({
    position: "top",
    icon: icon,
    title: message,
    showConfirmButton: false,
    timerProgressBar: true,
    toast: true,
    timer: time,
  });
};
