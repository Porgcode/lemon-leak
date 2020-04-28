sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.startEffect(effects.halo, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . c c c c c . . . . 
. . . . . . c d d d d d c . . . 
. . . . . . c c c c c d c . . . 
. . . . . c 4 4 4 4 d c c . . . 
. . . . c d 4 4 4 4 4 1 c . . . 
. . . c 4 4 1 4 4 4 4 4 1 c . . 
. . c 4 4 4 4 1 4 4 4 4 1 c c c 
. c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
. c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
. f 4 4 4 4 1 4 4 4 4 c b c f f 
. . f f f d 4 4 4 4 c d d c . . 
. . . . . f f f f f c c c . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . f f f f f f . . . . . 
. . . . f e e e e e e f . . . . 
. . . f e e e e e e e e f . . . 
. . f 4 4 4 4 e e 4 4 4 4 f . . 
. . f e d d d 4 4 d d d e f . . 
. f e d f f d d d d f f d e f . 
. f d f f 1 f d d f 1 f f d f . 
. f 4 d f f d d d d f f d 4 f . 
. f 4 4 d d f d d f d d 4 4 f . 
. f e 4 4 4 d d d d 4 4 4 e f . 
. f e e e d d f f d d e e e f . 
. f e e d d f 3 3 f d d e e f . 
. . f e d f 1 3 3 1 f d e f . . 
. . f e d d f f f f d d e f . . 
. . . f e e d d d d e e f . . . 
. . . . f f f f f f f f . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
})
