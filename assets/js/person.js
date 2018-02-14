/**
 * Created by Jzj on 2018/2/10.
 */

class NormalBoy extends AnimationObj{

    prepare() {
        super.prepare();
        this.endPos = game.world.width/2/this.scale-32-16;
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

class NormalGirl extends AnimationObj{

    prepare() {
        super.prepare();
        this.endPos =  game.world.width/2/this.scale-32;
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

class FastBoy extends AnimationObj{

    prepare() {
        super.prepare();
        this.speed = 10;
        this.endPos = game.world.width*3/4/this.scale-32-16;
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

class SlowGirl extends AnimationObj{

    prepare() {
        super.prepare();
        this.speed = 2;
        this.endPos = game.world.width*1/4/this.scale-40;
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

class FlyingBoy extends AnimationObj{

    prepare() {
        super.prepare();
        this.speed = 20;
        this.endPos = game.world.width/this.scale-90;
        console.log(this.endPos);
        this.name = 'flyingBoy'
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




