import { Controller } from "@hotwired/stimulus";
import $ from "jquery";

export default class extends Controller {
  static values = {
    text: String,
    variant: String,
    size: String,
  };

  connect() {
    console.log("Button 컴포넌트 연결됨");

    const aa = $(".btn");
    console.log("aa", aa);
    aa.addClass("cccc");
  }
}
