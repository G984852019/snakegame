
ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2,canv.height/2,20,20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width,canv.height);
  ctx.fillStyle = "lime";
  px +=xd;
  py +=yd;
  snake.push({x:px,y:py});
  for(let i=0;i<snake.length-1;i++){
    ctx.fillRect(snake[i].x*SIZE,snake[i].y*SIZE,SIZE-2,SIZE-2);
    if(snake[i].x==px && snake[i].y ==py){
      tail = MIN;
    }
  }
  ctx.fillRect(px*SIZE,py*SIZE,SIZE-2,SIZE-2);
  while(snake.length > tail){
    snake.shift();
  }
    if(appleX == px && appleY == py){
      tail++;
      rnd();
  }
  ctx.fillStyle ="red";
  ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2);

  if(nappleX == px && nappleY == py){
    if(tail >0){
    tail--;
    }
    rnd();
  }
ctx.fillStyle ="purple";
ctx.fillRect(nappleX*SIZE,nappleY*SIZE,SIZE-2,SIZE-2);
},1000/FPS);


function rnd() {
  rX1 = Math.floor(Math.random()*canv.width/SIZE);
  rY1 = Math.floor(Math.random()*canv.height/SIZE);
  rX2 = Math.floor(Math.random()*canv.width/SIZE);
  rY2 = Math.floor(Math.random()*canv.height/SIZE);
  if(rX1==rX2 && rY1==rY2){
    rnd();
  }
  appleX = rX1;
  appleY = rY1;
  nappleX = rX2;
  nappleY = rY2;
}
