input.onButtonPressed(Button.A, function () {
    if (sprite_2.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite_2: game.LedSprite = null
sprite_2 = game.createSprite(2, 2)
basic.forever(function () {
    sprite_2.ifOnEdgeBounce()
})
basic.forever(function () {
    basic.pause(randint(0, 1000))
    sprite_2.move(1)
})
