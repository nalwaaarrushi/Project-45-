var backgroungImage; 

var player1, player2, playerLeft, playerRight, playerWin; 

var leftNet, rightNet; 

var puck; 

var p1Img, p2Img, pLImg, pRImg, pWImg, leftNetImg, rightNetImg, puckImg; 

function preload(){ 
  backgroundImage = loadImage("images/bg_img.jpg"); 
  p1Img = loadImage("images/P_1hit.png"); 
  p2Img = loadImage("images/p_2hit.png"); 
  pLImg = loadImage("images/p_left.png"); 
  pRImg = loadImage("images/p_right.png"); 
  pWImg = loadmage("images/p_winhit.png"); 
  leftNetImg = loadImage("limages/eft_net.png"); 
  rightNetImg = loadImage("images/right-net.png"); 
  puckImg = loadImage("images/puck.png"); 

}
function setup() {
  createCanvas(1000, 450);
  createSprite(400, 200, 50, 50);

  player1 = createSprite(); 
  player1.addImage("player1",p1Img); 

  player2 = createSprite(); 
  player2.addImage("player2", p2Img); 

  playerLeft = createSprite(); 
  playerLeft.addImage("playerLeft",pLImg); 

  playerRight = createSprite(); 
  playerRight.addImage("playerRight",pRImg); 

  playerWin = createSprite(); 
  playerWin.addImage("playerWin",pWImg); 

  leftNet = createSprite(); 
  leftNet.addImage("leftNet",leftNetImg); 

  rightNet = createSprite(); 
  rightNet.addImage("rightNet",rightNetImg); 

  puck= createSprite(); 
  puck.addImage("puck",puckImg); 

}

function draw() {
  background("black");  
  drawSprites();
}

