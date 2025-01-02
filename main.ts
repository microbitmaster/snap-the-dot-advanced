input.onButtonPressed(Button.A, function () {
    if (sprite_2.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (sprite_3.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite_3: game.LedSprite = null
let sprite: game.LedSprite = null
let sprite_2: game.LedSprite = null
sprite_2 = game.createSprite(2, 2)
sprite = game.createSprite(2, 3)
sprite_3 = game.createSprite(2, 1)
basic.forever(function () {
    basic.pause(randint(0, 1000))
    sprite_3.move(1)
})
basic.forever(function () {
    basic.pause(randint(0, 1000))
    sprite_2.move(1)
})
basic.forever(function () {
    sprite_2.ifOnEdgeBounce()
})
basic.forever(function () {
    sprite_3.ifOnEdgeBounce()
})
basic.forever(function () {
    sprite.ifOnEdgeBounce()
})
basic.forever(function () {
    basic.pause(randint(0, 1000))
    sprite.move(1)
})
