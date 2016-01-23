function city_level () {

  // "jesus" character level

  document.nextLevel = fantasy_level ;

  var vizConfig = {
    backgroundImageUrl: './images/trump_bg1.png',
    frameDurationFactor: 5,
  } ;

  viz           = setup_viz     (vizConfig)   ; // framdeDuration computed

  var playerConfig = {
    sprite_loader: dd_sprite,
    orientation: 'r',
    frameDuration: viz.frameDuration,
    floatDuration: viz.dur * 20,
    callback: update_player,
    restoreRest: true,
    transitionSet: {
      x: $Z.transition.rounded_linear_transition_func ( 'x', viz.frameDuration ), //function accepting an x end-value and returning a transition object
      attack: step_transition_func ( 'image', viz.dur * 10 ), // transition object creation      
      y: $Z.transition.rounded_linear_transition_func ( 'y', viz.frameDuration * 3 ), // function accepting a y end-value and returning a transition object
    },
    xMove: 7,
    yMove: 50,
    y: 155,
  } ;

  var enemyConfig = {
    sprite_loader:trump_sprite,
    frameDuration: viz.frameDuration * 10,
    attackDuration: 20 * viz.frameDuration,
    collisionImage: 'rest',
    orientation: 'l',
    x: 40,
    y: 193,
  } ;

  load_characters(viz, playerConfig, enemyConfig) ;

  load_audio(viz) ;

  var enemyHitConfig = {
    healthbarY: 10, 
    color: '#900',
    audio: viz.audio.hit2,
  } ;
  
  var playerHitConfig = {
    detectList: [viz.player.item], 
    healthbarY: 19,
    color: '#009', 
    audio: viz.audio.hit2,
  } ;
  
  load_hit(viz, playerHitConfig, enemyHitConfig) ;
  
  // load_player_bullet(viz) ;
  load_enemy_bullet(viz) ;
  
  load_game(viz) ;

  // setInterval(
  //   function () {
  //     update_enemy.call(viz.enemy) ;
  //   }, 
  //   2000
  // ) ;

} 