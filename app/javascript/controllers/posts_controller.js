import { Controller } from "@hotwired/stimulus";
import dayjs from "dayjs";

export default class extends Controller {
  // Posts 컨트롤러에 대한 자바스크립트 코드

  static targets = ["name", "output"];

  connect() {
    console.log("Posts 컨트롤러가 연결되었습니다.");
    this.nameTarget.value = "world"; // 초기값 설정
  }

  greet() {
    console.log("Hello, Stimulus!");
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}
