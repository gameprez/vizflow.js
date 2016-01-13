function trump_level_four () {

  var viz = setup_viz({backgroundImageUrl: 'trump_bg4.png'}) ;
  viz.ui  = ui_setup(viz) ;
  var frameDuration = viz.dur ;
    
  viz.image_transition       = step_transition_func('image', viz.dur) ;
  var blinkDur                   = 3 * viz.dur ;
  var blink_transition           = step_transition_func('image', blinkDur) ;
  var collision_image_transition = step_transition_func('collisionImage', viz.dur) ;
  
  var playerConfig = { 
    sprite_loader: samus_sprite, 
    orientation: 'r',
    frameDuration: frameDuration,
    callback: update_player,
    y: 225,
  } ;
  viz.player          = setup_element(viz, playerConfig) ;
  viz.player.transitionSet.x = $Z.transition.rounded_linear_transition_func ( 'x', frameDuration ) ; // function accepting an x end-value and returning a transition object
  viz.player.xMove        = 10 ;

  var bulletShiftX      = 20 ;
  var bulletShiftY      = 8 ;
  var bulletImageUrl    = 'bullet.png' ;
  var bulletImage       = image2canvas (bulletImageUrl) ;  
  var bulletDur         = 17 * 20 ;
  var bullet_transition = $Z.transition.rounded_linear_transition_func ( 'x', bulletDur ) ; // function accepting an x end-value and returning a transition object
  var bulletMove        = 150 ;

  var bulletConfig   = {
    move: bulletMove,
    shiftX: bulletShiftX, 
    shiftY: bulletShiftY,
    image: bulletImage,
    transition: bullet_transition,
  }
  viz.player.bullet = setup_bullet (viz, viz.player, bulletConfig) ;  
  viz.player.bulletList = [] ;

  var enemyConfig = {
    sprite_loader: trump_sprite,
    frameDuration: frameDuration,
    collisionImage: 'rest', 
    x: 80,    
    y: 220,
  } ;
  var enemy = setup_element(viz, enemyConfig) ;
  //console.log ('enemy', enemy) ;

  var health_transition = $Z.transition.linear_transition_func ( 'width', viz.dur * 4 ) ; 
  var healthDrop = 1 ;
  var enemyHealthbar = setup_healthbar (viz, enemyHealth, healthBarHeight) ;

  function blink_reset () {
    //console.log ('blink_reset');
    enemy.reacting = false ;
  }

  enemy.hit = {
    action: action.perform,
    healthbar: enemyHealthbar,
    healthDrop: healthDrop,
    transition: animate ([enemy.sprite.blink[0]], blink_transition, blink_reset),
    health_transition: health_transition,
    element: enemy,
  } ;

  // element.react = action.set ('hit') ;

  var enemyHealth     = 100 ;
  var healthBarHeight = 5 ;

  //console.log ('enemyHealthbar.item', enemyHealthbar.item)

  //console.log ('viz.player.bullet', viz.player.bullet) ;
  var item = [ 
    enemy.item,
    viz.player.item,
    viz.ui.button.walkLeft,
    viz.ui.button.walkRight,
    viz.ui.button.attack,
    viz.ui.button.jump,
    enemyHealthbar.item,
  ] ;

  function detect_attack() {
    //console.log ('viz.player.bulletList.concat(enemy.item)', viz.player.bulletList.concat(enemy.item))
    var collision = collision_detect(viz.player.bulletList.concat(enemy.item), viz.width, viz.height) ;
   //console.log ('detect_attack: collision', collision, 'enemy', enemy, 'viz.player.bulletList', viz.player.bulletList) ;
    if (collision.list.length > 0) { // a collision between viz.player.item and enemy.item occurred
     // console.log ('detect_attack: collision', collision) ;
     // set_attack_action() ;
     action.set (enemy.hit) ;
    }
  }

  function set_attack_detect() {
    // console.log ('set_attack_detect') ;
    $Z.detect([detect_attack]) ;    
  }
  viz.player.detect = set_attack_detect ;

  // function set_attack_action() {
  //  // console.log ('set_attack_action', attackConfig) ;
  //   $Z.action([attackConfig]) ;    
  // }

  $Z.item(item)   ;     // load the user data into the visualization engine to initialize the time equals zero (t = 0) state
	$Z.prep([viz]) ; // sets the preprocessing to perform on each frame of the animation (prior to updating and rendering the elements)
	$Z.run()        ;     // run the interactive visualization (infinite loop by default)

  function keydown (e) {

    document.onkeydown = null ;
    var transition     = [] ;
    var state ;

    switch (e.keyCode) {

      case 37: // left
        state = 'l' ;
        break;
      case 38: // up
        state = 'j' ;
        break;
      case 39: // right
        state = 'r' ;
        break;
      case 40: // down
        state = 'a' ;
        break;

    }

    viz.player.callback(state) ;

  }

  document.viz = viz ;
   
  document.addEventListener('mousedown', mouse.down) ;
  document.addEventListener('mouseup', mouse.up) ;

  // function set_keydown () {
  //   document.onkeydown = keydown ;
  //   viz.canvas.addEventListener('click', click, false) ;
  //   // console.log('set_keydown')
  // }

  // set_keydown() ;

}