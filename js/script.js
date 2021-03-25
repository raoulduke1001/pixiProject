const ease = new Ease.Ease()

let loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite


let app = new PIXI.Application({
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
});

loader
    .add("img/img.json")
    .load(setup)


const backSize = {
    width: 0,
    height: 0
}

const staticObjects = {
    background: {
        x: 0,
        y: 0,
        zIndex: 0,
        name: "back.png",
        sprite: null,
        callback: function () {
            backSize.width = this.sprite.width
            backSize.height = this.sprite.height
            app.renderer.resize(this.sprite.width, this.sprite.height);
            resizeCanvas()
        }
    },
    table: {
        x: 202,
        y: 196,
        zIndex: 1,
        sprite: null,
        name: "table.png"
    },
    sofa: {
        x: 127,
        y: 324,
        zIndex: 1,
        sprite: null,
        name: "sofa.png"
    },
    firstPlant: {
        x: 456,
        y: -12,
        zIndex: 1,
        sprite: null,
        name: "plant.png"
    },
    secondPlant: {
        x: 1135,
        y: 164,
        zIndex: 1,
        sprite: null,
        name: "plant2.png"
    },
    thirdPlant: {
        x: 1122,
        y: 438,
        zIndex: 3,
        sprite: null,
        name: "plant_3.png"
    },
    globe: {
        x: 87,
        y: 109,
        zIndex: 1,
        sprite: null,
        name: "globe.png"
    },
    bookstand: {
        x: 834,
        y: -8,
        zIndex: 1,
        sprite: null,
        name: "book_stand.png"
    },
    austinFigure: {
        x: 696,
        y: 113,
        zIndex: 1,
        sprite: null,
        name: "Austin.png"
    },
    continueButton: {
        x: 502,
        y: 499,
        zIndex: 12,
        sprite: null,
        name: "btn.png",
        callback: function () {
            startEasesShake(this.sprite)
        }
    },
    oldStair: {
        x: 833,
        y: 54,
        zIndex: 2,
        sprite: null,
        name: "old_stair.png"
    },
    homescapesLogo: {
        x: -300,
        y: 5,
        zIndex: 5,
        sprite: null,
        name: "homescapes.png",
        callback: function () {
            startEasesPosition(this.sprite, 32, 5)

        }
    },

    hammer: {
        x: 1500,
        y: 358,
        zIndex: 10,
        sprite: null,
        name: "icon_hammer.png",
        callback: function () {
            startEasesPosition(this.sprite, 1087, 358)
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on('pointerdown', onClickHammer)
        }
    },
    final: {
        x: 0,
        y: 0,
        zIndex: -5,
        sprite: null,
        name: "final.png",
    }
}

const dynamicObjects = {
    iconBack1: {
        x: 940,
        y: 100,
        zIndex: 5,
        sprite: null,
        name: "first_icon.png"
    },
    ok: {
        x: 940,
        y: 220,
        zIndex: -5,
        sprite: null,
        name: "ok.png",
        callback: function () {
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on('pointerdown', () => {
                staticObjects.final.sprite.zIndex = 10
                disableInteractive()
            })
        }

    },
    iconBack2: {
        x: 1070,
        y: 100,
        zIndex: 5,
        sprite: null,
        name: "first_icon.png"
    },

    iconBack3: {
        x: 1200,
        y: 100,
        zIndex: 5,
        sprite: null,
        name: "first_icon.png"
    },

    firstLadderIcon: {
        x: 965,
        y: 95,
        zIndex: 7,
        sprite: null,
        name: "01.png",
        callback: function () {
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on('pointerdown', () => {
                chooseNewStair(1)
            })
        }
    },
    secondLadderIcon: {
        x: 1097,
        y: 95,
        zIndex: 7,
        sprite: null,
        name: "02.png",
        callback: function () {
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on('pointerdown', () => {
                chooseNewStair(2)
            })

        }
    },
    thirdLadderIcon: {
        x: 1222,
        y: 98,
        zIndex: 7,
        sprite: null,
        name: "03.png",
        callback: function () {
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
            this.sprite.on('pointerdown', () => {
                chooseNewStair(3)
            })
        },
    },
    choosedIcon: {
        x: 950,
        y: 105,
        zIndex: -6,
        sprite: null,
        name: "choosed.png"
    },
    newStair1: {
        x: 910,
        y: -100,
        zIndex: -2,
        sprite: null,
        name: "new_stair_01.png",
    },
    newStair2: {
        x: 898,
        y: -100,
        zIndex: -2,
        sprite: null,
        name: "new_stair_02.png",
    },
    newStair3: {
        x: 905,
        y: -100,
        zIndex: -2,
        sprite: null,
        name: "new_stair_03.png",
    },

}
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
document.body.appendChild(app.view)
app.stage = new PIXI.display.Stage()
app.stage.group.enableSort = true
let layer = new PIXI.display.Layer()
let activeStair
let stairAnim

function renderSprites(sprites) {

    let id = resources["img/img.json"].textures

    for (let texture in sprites) {
        let drawSprite = new Sprite(id[sprites[texture].name])
        drawSprite.x = sprites[texture].x
        drawSprite.y = sprites[texture].y
        drawSprite.parentLayer = layer
        drawSprite.zIndex = sprites[texture].zIndex
        sprites[texture].sprite = drawSprite
        if (sprites[texture].callback) {
            sprites[texture].callback()
        }
        app.stage.addChild(drawSprite)
    }
}

function setup() {
    renderSprites(staticObjects)
}

function setChooseButton(iconX, okX,) {
    dynamicObjects.choosedIcon.sprite.x = iconX
    dynamicObjects.choosedIcon.sprite.zIndex = 6
    dynamicObjects.ok.sprite.x = okX
    dynamicObjects.ok.sprite.zIndex = 5
}

function resetChoice() {
    stairAnim.remove()
    dynamicObjects.choosedIcon.sprite.zIndex = -6
    activeStair.y = -150
    activeStair.zIndex = -2
}

function chooseNewStair(number) {
    staticObjects.oldStair.sprite.zIndex = -2
    if (activeStair) {resetChoice()}

    switch (number) {
        case 1:
            setChooseButton(950, 940)
            stairAnim= startEasesPosition(dynamicObjects.newStair1.sprite, 910, 33, 2)
            activeStair = dynamicObjects.newStair1.sprite
            break
        case 2:
            setChooseButton(1080, 1070)
            stairAnim=startEasesPosition(dynamicObjects.newStair2.sprite, 898, 33, 2)
            activeStair = dynamicObjects.newStair2.sprite
            break
        case 3:
            setChooseButton(1210, 1200, 2)
            stairAnim=startEasesPosition(dynamicObjects.newStair3.sprite, 905, 0, 2)
            activeStair = dynamicObjects.newStair3.sprite
            break
        default:
            console.log('error')
    }
}

function onClickHammer() {
    staticObjects.hammer.sprite.zIndex = -1
    renderSprites(dynamicObjects)
}

function disableInteractive() {
    dynamicObjects.firstLadderIcon.sprite.interactive = false
    dynamicObjects.secondLadderIcon.sprite.interactive = false
    dynamicObjects.thirdLadderIcon.sprite.interactive = false
    dynamicObjects.ok.sprite.interactive = false
}

function startEasesShake(el) {
    ease.add(el, {shake: 2}, {repeat: true})
}

function startEasesPosition(el, coordinateX, coordinateY, zIndex=5) {
    let ea =ease.add(el, {position: {x: coordinateX, y: coordinateY}}, {repeat: false, duration: 1000, reverse: false})
    el.zIndex = zIndex
    return ea
    }

function trimPx(s) {
    return Number(s.substring(0, s.indexOf("px")))
}

function resizeCanvas() {
    let origWidth = backSize.width;
    let origHeight = backSize.height;
    if (origWidth !== 0 && origHeight !== 0) {
        let canvasSW = app.view.offsetLeft * 2
        let canvasSH = app.view.offsetTop * 2

        app.renderer.view.style.width = (window.innerWidth + canvasSW) + "px";
        app.renderer.view.style.height = (window.innerHeight + canvasSH) + "px";

        let currentWidth = trimPx(app.renderer.view.style.width);
        let newSize = calculate_new_size(
            origWidth,
            origHeight,
            currentWidth,
            window.innerWidth,
            window.innerHeight,
            Math.max(canvasSW, canvasSH)
        )
        app.renderer.view.style.width = newSize.newWidth;
        app.renderer.view.style.height = newSize.newHeight;
    }
}

function calculate_new_size(origWidth, origHeight, currentWidth, currentScreenWidth, currentScreenHeight, marginSize) {
    let newWidth, newHeight;

    if (currentWidth + marginSize > currentScreenWidth) {
        newWidth = currentScreenWidth - marginSize;
        newHeight = (origHeight * newWidth) / origWidth
    }

    if (newHeight + marginSize > currentScreenHeight) {
        newHeight = currentScreenHeight - marginSize;
        newWidth = (origWidth * newHeight) / origHeight
    }

    return {
        newWidth: newWidth + "px",
        newHeight: newHeight + "px"
    };
}

window.onresize = resizeCanvas;