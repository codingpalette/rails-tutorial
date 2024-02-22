import { Application } from "@hotwired/stimulus";
import dayjs from "dayjs";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

// console.log("123123");
// const aa = dayjs().format("YYYY-MM-DD HH:mm:ss");
// console.log(aa);

export { application };
