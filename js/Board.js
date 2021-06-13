import Background from './Background.js'
import Player from './Player.js'
import Wall from './Wall.js'
import Sprite from './Sprite.js'
import HealthHUD from './HUD/HealthHUD.js';

class Board {
    constructor() {
        this.DOMContainer = document.querySelector("#board");

        this.size = {
            x: 512,
            y: 512
        };

        this.backgroundClass = Background;
        this.playerClass = Player;
        this.wallClass = Wall;

        this.players = {};
        this.walls = [];
        this.HUD = {};

        this.initBoard();
        this.initBackground();
        this.initWalls();
        this.initPlayer();
        this.initHUD();
    }

    initBackground() {
        this.background = new this.backgroundClass(this, '../assets/img/background.png');
    }

    initBoard() {
        this.DOMContainer.style.width = this.size.x + "px";
        this.DOMContainer.style.height = this.size.y + "px";
    }

    initPlayer() {
        this.players = new this.playerClass(
            this,
            {
                x: 300,
                y: 300
            },
            {
                x: 30,
                y: 30
            },
            1,
            new Sprite('../assets/img/spaceship.png', true),
        )
    }

    initWalls() {
        setInterval(() => {
            this.walls.push(
                new this.wallClass(
                    this,
                    {
                        x: 128,
                        y: 128
                    },
                )
            )
        }, 2000)
    }

    initHUD() {
        this.HUD.healthHUD = new HealthHUD()
    }
}

new Board()
export default Board