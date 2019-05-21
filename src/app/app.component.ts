import { Component } from "@angular/core";
import {
  faHandRock,
  faHandPaper,
  faHandScissors,
  faHandSpock,
  faHandLizard
} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  scores = [0, 0];
  weapons = ["rock", "paper", "scissors", "lizard", "spock"];
  playerSelected = -1;
  loading = false;
  isResultShow = false;
  // theResult -  0 tie
  //              1 win
  //              2 lose
  theResult = 0;
  computerSelected = -1;

  pick(weapon: number): void {
    if (this.loading) return;
    this.loading = true;
    this.playerSelected = weapon;

    setTimeout(() => {
      this.loading = false;
      const randomNum = Math.floor(Math.random() * 5);
      this.computerSelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    }, Math.floor(Math.random() * 500) + 200);
  }

  reset(): void {
    this.scores = [0, 0];
  }

  checkResult(): void {
    const playerPick = this.playerSelected;
    const computerPick = this.computerSelected;
    //if there's a tie:
    if (playerPick == computerPick) {
      // theResult -  0 tie
      //              1 win
      //              2 lose
      this.theResult = 0;
    } else if (
      (playerPick == 0 && computerPick == 2) ||
      (playerPick == 0 && computerPick == 3) ||
      (playerPick == 1 && computerPick == 0) ||
      (playerPick == 1 && computerPick == 4) ||
      (playerPick == 2 && computerPick == 3) ||
      (playerPick == 2 && computerPick == 1) ||
      (playerPick == 3 && computerPick == 1) ||
      (playerPick == 3 && computerPick == 4) ||
      (playerPick == 4 && computerPick == 0) ||
      (playerPick == 4 && computerPick == 2)
    ) {
      this.theResult = 1;
      this.scores[0] = this.scores[0] + 1;
    } else {
      this.theResult = 2;
      this.scores[1] = this.scores[1] + 1;
    }
  }
  // title = 'rock-paper-scissors-lizard-spock';
  faHandRock = faHandRock;
  faHandPaper = faHandPaper;
  faHandScissors = faHandScissors;
  faHandSpock = faHandSpock;
  faHandLizard = faHandLizard;
}
