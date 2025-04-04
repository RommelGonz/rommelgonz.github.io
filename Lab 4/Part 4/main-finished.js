roro
apple_sauce69
Invisible

roro — 1/20/2025 4:12 PM
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

<!--
Name: Rommel Gonzales
Date: 13 January 2025
Desc: Lab 1 part 1 making up a cover letter, intro to HTML

-->
    <title> Lab 1 - Part 1 - Letter </title>
    <style>
body {
  max-width: 800px;
  margin: 0 auto;
}

.sender-column {
  text-align: right;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
}

p,ul,ol,dl,address {
  font-size: 1.1em;
}

p, li, dd, dt, address {
  line-height: 1.5;
}
</style>
Cyriebelle — 1/20/2025 5:30 PM
dude, i already know how can you make it work
roro — 1/20/2025 5:30 PM
Wdym
Cyriebelle — 1/20/2025 5:30 PM
you need to remove the removeme
Image
for the vpn
roro — 1/20/2025 5:30 PM
Ohhhhhhhhhh
Oh okok tyty
Cyriebelle — 1/20/2025 7:45 PM
dude, for the web dev where can you see the code for the second part of the assignment? 
roro — 1/20/2025 7:55 PM
It’s underneath marking up a paper
Cyriebelle — 1/20/2025 7:55 PM
okok
thankss
roro — 1/20/2025 7:55 PM
Yup yup
Cyriebelle — 3/24/2025 5:50 PM
Forwarded
https://youtu.be/nKfc1j4PrOk?si=Kv3K1hMmah2JuH_e
YouTube
JasheleTechTV
Image Gallery Project | ☕️ vanilla JavaScript, HTML, CSS
Image
part 2
Forwarded
https://youtu.be/foy7OWj_WY4?si=iAefSmDSj9r4kjtJ
YouTube
maciejdev
MDN - Object building practice
Image
part 3
Forwarded
https://youtu.be/nKfc1j4PrOk?si=Kv3K1hMmah2JuH_e
YouTube
JasheleTechTV
Image Gallery Project | ☕️ vanilla JavaScript, HTML, CSS
Image
https://www.youtube.com/watch?v=nKfc1j4PrOk
YouTube
JasheleTechTV
Image Gallery Project | ☕️ vanilla JavaScript, HTML, CSS
Image
https://www.youtube.com/watch?v=foy7OWj_WY4
YouTube
maciejdev
MDN - Object building practice
Image
Cyriebelle — 3/24/2025 6:33 PM
Attachment file type: acrobat
Winter 2025 GNED Course Descriptions-REVISED.pdf
280.97 KB
Attachment file type: acrobat
Winter 2025 GNED Options-Revised.pdf
74.28 KB
Cyriebelle — 3/24/2025 6:58 PM
Attachment file type: spreadsheet
GPA1.xlsx
18.37 KB
Cyriebelle — 3/25/2025 10:47 PM
opps wrong send
roro — 3/31/2025 12:06 PM
wait theyer all the same
roro — 3/31/2025 12:06 PM
for this
isnt this part 3?
Cyriebelle — 3/31/2025 12:18 PM
yes
for part 3 and 4 they are the same
there’s just a minor difference that you have to do in part 4
roro — 3/31/2025 12:40 PM
oh shut okok
is there a part 2?
Cyriebelle — 3/31/2025 12:41 PM
there is
wait  let me send it again
Forwarded
https://youtu.be/nKfc1j4PrOk?si=Kv3K1hMmah2JuH_e
YouTube
JasheleTechTV
Image Gallery Project | ☕️ vanilla JavaScript, HTML, CSS
Image
roro — 3/31/2025 12:42 PM
tyty
Cyriebelle — 3/31/2025 12:42 PM
don’t forget to check the whole code on github
roro — 3/31/2025 12:42 PM
okok
Cyriebelle — 3/31/2025 12:42 PM
cause what she shows you there is not yet done
Cyriebelle — 3/31/2025 6:39 PM
Attachment file type: document
Mid-term Test W2025 SN_v2.docx
112.63 KB
roro — 10:56 PM
oaky you ready
roro started a call. — 10:57 PM
Cyriebelle — 11:13 PM
class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}
class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY)
    this.color = color;
    this.size = size;
    this.exists = true;
  }
collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball && ball.exists)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball && ball.exists)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
// EvilCircle class
class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20); // Hardcoded velX and velY
    this.color = "white"; // EvilCircle's color
    this.size = 10; // EvilCircle's size

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });
  }

  draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if (this.x + this.size >= width) {
      this.x -= this.size;
    }

    if (this.x - this.size <= 0) {
      this.x += this.size;
    }

    if (this.y + this.size >= height) {
      this.y -= this.size;
    }

    if (this.y - this.size <= 0) {
      this.y += this.size;
    }
  }
Cyriebelle — 11:22 PM
collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          count--;
          para.textContent = "Ball count: " + count;
        }
      }
    }
  }

}
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
  count++;
  para.textContent = "Ball count: " + count;
}

const evilCircle = new EvilCircle (random(0, width), random(0, height));

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exists){
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  requestAnimationFrame(loop);
}
const para = document.querySelector('p');
let count = 0
Image
Cyriebelle — 11:32 PM
/*
Name: Mariah Jurao
File: index.html
Date: March 25, 2025
Description: This is the javascript code for the object building practice with the evil circle. */
Expand
message.txt
5 KB
roro — 11:33 PM
// set up canvas

const para = document.querySelector('p');
let count = 0

const canvas = document.querySelector("canvas");
Expand
main-finished.js
5 KB
Cyriebelle — 11:34 PM
/*
Name: Mariah Jurao
File: index.html
Date: March 25, 2025
Description: This is the CSS for the object building practice with the evil circle. */
Expand
style.css
1 KB
// set up canvas
const para = document.querySelector('p');
let count = 0

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
Expand
main-finished.js
5 KB
﻿
// set up canvas
const para = document.querySelector('p');
let count = 0

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const number =  Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

class Ball extends Shape {
  constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY)
    this.color = color;
    this.size = size;
    this.exists = true;
  }
  

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball && ball.exists)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}


// EvilCircle class
class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20); // Hardcoded velX and velY
    this.color = "white"; // EvilCircle's color
    this.size = 10; // EvilCircle's size
  
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    });
  }

  draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if (this.x + this.size >= width) {
      this.x -= this.size;
    }

    if (this.x - this.size <= 0) {
      this.x += this.size;
    }

    if (this.y + this.size >= height) {
      this.y -= this.size;
    }

    if (this.y - this.size <= 0) {
      this.y += this.size;
    }
  }

  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          count--;
          para.textContent = "Ball count: " + count;
        }
      }
    }
  }

}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
  count++;
  para.textContent = "Ball count: " + count;
}

const evilCircle = new EvilCircle (random(0, width), random(0, height));

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    if (ball.exists){
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  requestAnimationFrame(loop);
}

loop();
main-finished.js
5 KB