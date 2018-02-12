/**
 * Created by Jzj on 2018/2/10.
 */




class Person {
    initData() { }
    prepare() { }
    show() { }
    walk() { }
}


class Boy extends Person{
    initData() {
        var data = Object();
        data["frames"] = new Array();
        var images = new Array();
        images.push({"x": 0, "y": 96, "w": 32, "h": 48});
        images.push({"x": 32, "y": 96, "w": 32, "h": 48});
        images.push({"x": 64, "y": 96, "w": 32, "h": 48});
        images.push({"x": 96, "y": 96, "w": 32, "h": 48});

        var w = 0;
        var step = 8;
        var index = 0;
        while(w < game.world.width/2/scale-32-16) {
            var item = new Object();
            item["filename"] = "run" + index;
            item["rotated"] = false;
            item["trimmed"] = true;
            item["sourceSize"] = {"w": 32, "h": 48};
            item["frame"] = images[index%images.length];
            item["spriteSourceSize"] = {
                "x" : w,
                "y": 0,
                "w": 32,
                "h": 48
            };
            index ++;
            w += step;
            data["frames"].push(item);
        }
        return data;
    }

    prepare() {
        game.load.atlas('boy', 'assets/images/boy.png', null, this.initData());
    }

    show() {
        this.person = game.add.sprite(50, game.world.height - 100, 'boy');
        this.person.scale.set(scale);
        this.anim = this.person.animations.add('walk', false);
    }
    walk() {
        this.person.animations.play('walk', 5, false);
    }
}


class Girl extends Person{
    initData() {
        var data = Object();
        data["frames"] = new Array();
        var images = new Array();
        images.push({"x": 0, "y": 48, "w": 32, "h": 48});
        images.push({"x": 32, "y": 48, "w": 32, "h": 48});
        images.push({"x": 64, "y": 48, "w": 32, "h": 48});
        images.push({"x": 96, "y": 48, "w": 32, "h": 48});

        var w = 0;
        console.log(w);
        var step = 8;
        var index = 0;
        while(w < game.world.width/2/scale-32) {
            var item = new Object();
            item["filename"] = "run" + index;
            item["rotated"] = false;
            item["trimmed"] = true;
            item["sourceSize"] = {"w": 32, "h": 48};
            item["frame"] = images[index%images.length];
            item["spriteSourceSize"] = {
                "x" : -w,
                "y": 0,
                "w": 32,
                "h": 48
            };
            index ++;
            w += step;
            data["frames"].push(item);
        }
        return data;
    }

    prepare() {
        game.load.atlas('girl', 'assets/images/girl.png', null, this.initData());
    }

    show() {
        this.person = game.add.sprite(game.world.width-32*scale-50, game.world.height - 100, 'girl');
        this.person.scale.set(scale);
        this.anim = this.person.animations.add('walk', false);
    }
    walk() {
        this.person.animations.play('walk', 5, false);
    }
}

