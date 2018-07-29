// I need to initialize hero and enemy objects I built(sort of)
//    New hero object

// Initialize allEnemies array
// For each enemy create and push new Enemy object into above array


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // If enemy is not passed boundary:
    //   move forward
    //   increment x by speed * dt
    //  else
    //    reset position to starting point
};

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

class Hero {
    constructor() {
      this.step = 101;
      this.jump = 83;
      this.x = 200;
      this.y = 400;
      this.sprite = 'images/char-boy.png';
    }
//Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    // @param {string} input 
    handleInput(input) {
      switch(input) {
          case 'left':
           if (this.x >0) {
              this.x -= this.step;
           }
             break;
          case 'up':
           if (this.y > 0){
             this.y -= this.jump;
           }
            
              break;
          case 'right':
           if (this.x < 401) {
              this.x += this.step;
           }
              break;
          case 'down':
           if ( this.y < 400) {
            this.y += this.jump;
           }
              break;
      }
    }



    // put methods also:
     
      //  check for collision between hero and enemy
        //   did player x and y collide with enemy?

     //  check win here
        //   did player x and y reach final tile?

     //  render
        //  draw player sprite on current x and y coord position

    //   handle keyboard input
        //  update players x and y properties according to input

    //   reset hero when collision with enemy occurs
        //  set x and y to starting(default) x and y coord



}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const player = new Hero();
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
