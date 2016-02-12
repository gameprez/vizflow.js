function setup_bullet (viz, player, bulletConfig) {

  var bullet = {
    viz: viz, 
    config: bulletConfig,
    x: player.item.x + bulletConfig.shiftXr,
    y: player.item.y + bulletConfig.shiftY,
    image: bulletConfig.image,
    transition: bulletConfig.transition,
    animation: bulletConfig.animation,
    render: drawHelper.image,
    inert: false,
    type: 'player',
    singleSwitch: true,
    collision_image: actionHelper.collision_image,
  } ;

  return bullet ;

}