/**
 * Created by Jzj on 2018/2/10.
 */

class Heart extends AnimationObj {
    setPos(startPosX, startPosY) {
        this.startPosX = startPosX;
        this.startPosY = startPosY;
    }

    getFrameData() {
        var data = Object();
        var images = new Array();
        images.push({"x": 300, "y": 0, "w": 50, "h": 50});
        images.push({"x": 200, "y": 0, "w": 100, "h": 100});
        images.push({"x": 0, "y": 0, "w": 200, "h": 200});

        data["frames"] = [
            {
                "filename": "run0",
                "sourceSize": {"w": 50, "h": 50},
                "trimmed": true,
                "frame": images[0],
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 50,
                    "h": 50,
                }
            },
            {
                "filename": "run1",
                "sourceSize": {"w": 100, "h": 100},
                "trimmed": true,
                "frame": images[1],
                "spriteSourceSize": {
                    "x": -25,
                    "y": -100,
                    "w": 100,
                    "h": 100,
                }
            },
            {
                "filename": "run2",
                "sourceSize": {"w": 200, "h": 200},
                "trimmed": true,
                "frame": images[2],
                "spriteSourceSize": {
                    "x": -75,
                    "y": -250,
                    "w": 200,
                    "h": 200,
                }
            }
        ]
        return data;
    }

    prepare() {
        super.prepare();
        this.speed = 2;
        this.name = 'heart'
        this.scale = 0.5;
        this.srcImage = 'assets/images/heart.png';
        this.frameData = this.getFrameData();
        game.load.atlas(this.name, this.srcImage, null, this.frameData);
    }

}




