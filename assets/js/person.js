/**
 * Created by Jzj on 2018/2/10.
 */

class Person {
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
            item["filename"] = "run" + index;
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
    show() {
        this.person = game.add.sprite(this.startPosX, this.startPosY, this.name);
        this.person.scale.set(this.scale);
        this.anim = this.person.animations.add('walk', false);
    }
    walk() {
        this.person.animations.play('walk', this.speed, false);
    }
}

class NormalBoy extends Person{

    prepare() {
        super.prepare();

        this.endPos = game.world.width/2/this.scale-32-16;
        this.startPosX = 50;
        this.startPosY = game.world.height - 100;
        this.name = 'normalBoy'
        this.srcImage = 'assets/images/boy.png';
        this.images = new Array();
        this.images.push({"x": 0, "y": 96, "w": this.width, "h": this.height});
        this.images.push({"x": 32, "y": 96, "w": this.width, "h": this.height});
        this.images.push({"x": 64, "y": 96, "w": this.width, "h": this.height});
        this.images.push({"x": 96, "y": 96, "w": this.width, "h": this.height});
        this.frameData = this.getFrameData(this.images, 'toRight');

        game.load.atlas(this.name, this.srcImage, null, this.frameData);
    }
}

class NormalGirl extends Person{

    prepare() {
        super.prepare();

        this.endPos =  game.world.width/2/this.scale-32;
        this.startPosX = game.world.width-32*this.scale-50;
        this.startPosY = game.world.height - 100;
        this.name = 'normalGirl'
        this.srcImage = 'assets/images/girl.png';
        this.images = new Array();
        this.images.push({"x": 0, "y": 48, "w": this.width, "h": this.height});
        this.images.push({"x": 32, "y": 48, "w": this.width, "h": this.height});
        this.images.push({"x": 64, "y": 48, "w": this.width, "h": this.height});
        this.images.push({"x": 96, "y": 48, "w": this.width, "h": this.height});
        this.frameData = this.getFrameData(this.images, 'toLeft');

        game.load.atlas(this.name, this.srcImage, null, this.frameData);
    }

}

class FastBoy extends Person{

    prepare() {
        super.prepare();
        this.speed = 10;
        this.endPos = game.world.width*3/4/this.scale-32-16;
        this.startPosX = 50;
        this.startPosY = game.world.height - 100;
        this.name = 'fastBoy'
        this.srcImage = 'assets/images/boy.png';
        this.images = new Array();
        this.images.push({"x": 0, "y": 96, "w": this.width, "h": this.height});
        this.images.push({"x": 32, "y": 96, "w": this.width, "h": this.height});
        this.images.push({"x": 64, "y": 96, "w": this.width, "h": this.height});
        this.images.push({"x": 96, "y": 96, "w": this.width, "h": this.height});
        this.frameData = this.getFrameData(this.images, 'toRight');

        game.load.atlas(this.name, this.srcImage, null, this.frameData);
    }
}

class SlowGirl extends Person{

    prepare() {
        super.prepare();
        this.speed = 2;
        this.endPos = game.world.width*1/4/this.scale-40;
        this.startPosX = game.world.width-32*this.scale-50;
        this.startPosY = game.world.height - 100;
        this.name = 'slowGirl'
        this.srcImage = 'assets/images/girl.png';
        this.images = new Array();
        this.images.push({"x": 0, "y": 48, "w": this.width, "h": this.height});
        this.images.push({"x": 32, "y": 48, "w": this.width, "h": this.height});
        this.images.push({"x": 64, "y": 48, "w": this.width, "h": this.height});
        this.images.push({"x": 96, "y": 48, "w": this.width, "h": this.height});
        this.frameData = this.getFrameData(this.images, 'toLeft');

        game.load.atlas(this.name, this.srcImage, null, this.frameData);
    }
}



