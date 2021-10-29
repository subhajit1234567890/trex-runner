var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2f0cd01e-ae61-435d-a4d5-ac53368e08da","9a1abdaa-eac8-4568-8319-94b0e7f296ba","2b32d767-b76d-48af-8be4-0245db2a1195","a92c08bd-5e49-479b-abd6-975c9618898b","6608b4a3-03c2-4d9d-bd11-8bd065083b42","37131711-3843-43f3-a679-5d0ba5db4f01","294c842c-630b-44a9-a838-835a5ce3b466","f95c5eb3-8a82-426a-aa9c-38a230c42dc2","fdf3142b-c74a-4086-a700-7206e3492989","6ea35c07-1938-49ad-86c2-a6b530da004d","baee99ee-1a3c-497e-9316-983f2ce03088","3824715b-949c-472c-b8f7-99b7a0e32343","125972ab-f705-43c1-825d-dfe7b4bddee6"],"propsByKey":{"2f0cd01e-ae61-435d-a4d5-ac53368e08da":{"name":"Clouds.png","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/2f0cd01e-ae61-435d-a4d5-ac53368e08da.png","frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"qgqEaUmHfTa83LQJmXBsjFBoCgyn7asn","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/2f0cd01e-ae61-435d-a4d5-ac53368e08da.png"},"9a1abdaa-eac8-4568-8319-94b0e7f296ba":{"name":"GameOver","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/9a1abdaa-eac8-4568-8319-94b0e7f296ba.png","frameSize":{"x":92,"y":5},"frameCount":1,"looping":true,"frameDelay":4,"version":"_L3m.01pveRDCgWOJvuakdyGA57tymgQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":5},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/9a1abdaa-eac8-4568-8319-94b0e7f296ba.png"},"2b32d767-b76d-48af-8be4-0245db2a1195":{"name":"Ground.png","sourceUrl":null,"frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"5zLWsHpRzfbmIpN24LktoFRcXMkuAgOP","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/2b32d767-b76d-48af-8be4-0245db2a1195.png"},"a92c08bd-5e49-479b-abd6-975c9618898b":{"name":"Obs1","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/a92c08bd-5e49-479b-abd6-975c9618898b.png","frameSize":{"x":30,"y":66},"frameCount":1,"looping":true,"frameDelay":4,"version":"XBdFdKx_T6J4yk8lhuXeIdxzVuldeIUP","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":66},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/a92c08bd-5e49-479b-abd6-975c9618898b.png"},"6608b4a3-03c2-4d9d-bd11-8bd065083b42":{"name":"Obs2","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/6608b4a3-03c2-4d9d-bd11-8bd065083b42.png","frameSize":{"x":64,"y":66},"frameCount":1,"looping":true,"frameDelay":4,"version":"y_v67Q4EW8wZwA8l3I.c7SyeQNKZPELx","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":66},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/6608b4a3-03c2-4d9d-bd11-8bd065083b42.png"},"37131711-3843-43f3-a679-5d0ba5db4f01":{"name":"Obs3","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/37131711-3843-43f3-a679-5d0ba5db4f01.png","frameSize":{"x":63,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"bS_X.ApIS00qL.NAY99OMNII8K4DnrGl","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":43},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/37131711-3843-43f3-a679-5d0ba5db4f01.png"},"294c842c-630b-44a9-a838-835a5ce3b466":{"name":"Obs4","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/294c842c-630b-44a9-a838-835a5ce3b466.png","frameSize":{"x":64,"y":133},"frameCount":1,"looping":true,"frameDelay":4,"version":"II726rll4TAL6xVtaKD8AWuZdi80rIxl","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":133},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/294c842c-630b-44a9-a838-835a5ce3b466.png"},"f95c5eb3-8a82-426a-aa9c-38a230c42dc2":{"name":"Obs5","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/f95c5eb3-8a82-426a-aa9c-38a230c42dc2.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"ODjekpX4tTIl22oz5VKAIdR.J9A1LtRP","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/f95c5eb3-8a82-426a-aa9c-38a230c42dc2.png"},"fdf3142b-c74a-4086-a700-7206e3492989":{"name":"Obs6","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/fdf3142b-c74a-4086-a700-7206e3492989.png","frameSize":{"x":64,"y":41},"frameCount":1,"looping":true,"frameDelay":4,"version":"z1xsuG0wGnLji9985f61K_h_sv5j.3K7","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":41},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/fdf3142b-c74a-4086-a700-7206e3492989.png"},"6ea35c07-1938-49ad-86c2-a6b530da004d":{"name":"resetBt","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/6ea35c07-1938-49ad-86c2-a6b530da004d.png","frameSize":{"x":99,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"VKlTKBWOi07xOhvDTdaHBF9iVuKvcnO7","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":64},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/6ea35c07-1938-49ad-86c2-a6b530da004d.png"},"baee99ee-1a3c-497e-9316-983f2ce03088":{"name":"Trex-collide","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/baee99ee-1a3c-497e-9316-983f2ce03088.png","frameSize":{"x":64,"y":68},"frameCount":1,"looping":true,"frameDelay":4,"version":"wmFhqKMbfzF0pSTZQ8pxOKKx4bfFgSh4","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":68},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/baee99ee-1a3c-497e-9316-983f2ce03088.png"},"3824715b-949c-472c-b8f7-99b7a0e32343":{"name":"Trex-rest.png","sourceUrl":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/3824715b-949c-472c-b8f7-99b7a0e32343.png","frameSize":{"x":64,"y":67},"frameCount":1,"looping":true,"frameDelay":4,"version":"yrYADEpyBe1xVprk52nA5o1vn8Z1Qluh","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":67},"rootRelativePath":"assets/v3/animations/nIsSq9k6Xwvgq3P37s0rdsNpDB99ovZHeBOYbQh9aQg/3824715b-949c-472c-b8f7-99b7a0e32343.png"},"125972ab-f705-43c1-825d-dfe7b4bddee6":{"name":"Trex-run.png","sourceUrl":null,"frameSize":{"x":99,"y":106},"frameCount":3,"looping":true,"frameDelay":4,"version":"eIwQEPcXLe.KsH5duR8GFCNp.pJ2c2wK","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":212},"rootRelativePath":"assets/125972ab-f705-43c1-825d-dfe7b4bddee6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

   var trex = createSprite(50,350,20,30);

//Creating Ground
var ground = createSprite(200,375,400,30);
ground.setAnimation("Ground.png")
ground.depth = -1;

//Creating Invisible Ground
var invisible_ground = createSprite(200,400,400,40);
invisible_ground.visible=false;

var gameState = "start";

var cactusGrp = createGroup();
var cloudGrp = createGroup();

var gaov = createSprite(200,150);
gaov.setAnimation("GameOver");
gaov.scale = 4;
gaov.visible = false;

var resetBt = createSprite(200,250);
resetBt.setAnimation("resetBt");
resetBt.scale = 0.8;
resetBt.visible = false;

var score = 0;

function draw() {
  
  //Giving background color
  background("white");
  
  //Making trex collide with invisible ground
  trex.collide(invisible_ground);
  
  
  if(gameState=="start"){
    
    fill("grey");
    textSize(25);
    text("Press space to start the game",30,200);
    
    trex.setAnimation("Trex-rest.png");
    
    
    gaov.visible = false;
    resetBt.visible = false;
  }
  
  if(keyDown("space")&& gameState=="start"){
    
    gameState="play";
    
   playSound("assets/category_accent/puzzle_game_accent_small_b_01.mp3")
   
  }
  
  if(gameState=="play"){
    
    trex.setAnimation("Trex-run.png");
    trex.scale = 0.60;
    
    score = score+Math.round(World.frameRate/60);
    
    if(trex.collide(cactusGrp)&&gameState=="play"){
      
      gameState="over"
      
    }
   
    
   Gravity();
   Ground_Move();
   Jump();
   Clouds();
   Cactus();

  }
  
 Over();
  
  drawSprites();
  
  
  fill("gray");
  textSize(20);
  text("Score: "+score,290,25)
  
  
 console.log(gameState)
  
  
   
}

function Gravity(){
  
  var grav = 0.50;
  trex.velocityY=trex.velocityY+grav;
}


function Ground_Move(){
  
  ground.velocityX = -5;
  
  if(ground.x<0){
    
    ground.x = ground.width/2;
  }
}

function Jump(){
  
  if(keyDown("space")&&trex.isTouching(ground)&&gameState=="play"){
    
    trex.velocityY = -10
  }
}

function Clouds(){
  
  if(frameCount%40==0){
    
    var cloud = createSprite(410,random(100,200),10,10);
    cloud.setAnimation("Clouds.png");
    cloud.velocityX = -5;
    cloud.lifetime = 100;
    cloudGrp.add(cloud);
  }
}

function Cactus(){
  
  if(frameCount%80==0){
    
    var rand = randomNumber(1,6)
    
    var cactus = createSprite(410,370,10,50);
    cactus.setAnimation("Obs"+rand)
    cactus.scale=0.7;
    cactus.velocityX = -5;
    cactus.lifetime=100;
    cactusGrp.add(cactus)
    
  }
}

function Over(){
  
   if(gameState=="over"){
    
    trex.setAnimation("Trex-collide")
    trex.velocityX = 0;
    trex.scale = 0.95
    
    cactusGrp.setVelocityXEach(0);
    cloudGrp.setVelocityXEach(0);
    
    cloudGrp.setLifetimeEach(-1);
    cactusGrp.setLifetimeEach(-1);
  
    gaov.visible = true;
    resetBt.visible = true;
    
    ground.velocityX = 0;
    
    if(mousePressedOver(resetBt)&&gameState=="over"){
      
      gameState = "start";
      
      cactusGrp.destroyEach();
      cloudGrp.destroyEach();
      
      score = 0;
    }
   
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
