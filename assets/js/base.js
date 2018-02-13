/**
 * Created by Jzj on 2018/2/10.
 */

class AnimationObj {
    init() {}
    getFrameData(images, direction='toRight') {
        var data = Object();
        data["frames"] = new Array();
        var w = 0;
        var index = 0;
        var x = 0;
        while(w < this.endPos) {
            if(direction == "toRight") {
                x = w;
            } else {
                x = 0 - w;
            }

            var item = new Object();
            item["filename"] = "ani-" + index;
            item["rotated"] = false;
            item["trimmed"] = true;
            item["sourceSize"] = {"w": this.width, "h": this.height};
            item["frame"] = images[index%images.length];
            item["spriteSourceSize"] = {
                "x" : x,
                "y": 0,
                "w": this.width,
                "h": this.height
            };
            index ++;
            w += this.step;
            data["frames"].push(item);
        }
        return data;
    }
    prepare() {
        this.scale = 2;
        this.speed = 5;
        this.step = 8;
        this.width = 32;
        this.height = 48;
    }
    show(startPosX, startPosY) {
        this.obj = game.add.sprite(startPosX, startPosY, this.name);
        this.obj.scale.set(this.scale);
        this.anim = this.obj.animations.add('action', false);
    }
    action(loop=false) {
        this.obj.animations.play('action', this.speed, loop);
    }
}



