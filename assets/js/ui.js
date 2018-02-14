

class UIManager {


    initUI(callBack) {

        var style = { font: "60px Arial", fill: "#000000", align:"center"};
        this.title = game.add.text(game.world.centerX+30, game.world.centerY-120, "宝宝，你喜欢我吗？", style);
        this.title.anchor.x = .5;
        this.title.anchor.y = .5;


        this.buttonA = game.add.button(
            game.world.centerX-100,
            game.world.centerY,
            'buttonA',
            function() {
                callBack("A");
            },
            this);
        this.buttonA.anchor.x = .5;
        this.buttonA.anchor.y = .5;
        this.buttonA.input.useHandCursor = true;

        var style = { font: "30px Arial", fill: "#000000", align:"center"};
        this.textA = game.add.text(this.buttonA.x-30, this.buttonA.y-18, "喜欢", style);

        this.buttonB = game.add.button(
            game.world.centerX,
            game.world.centerY,
            'buttonB',
            function() {
                callBack("B");
            },
            this);
        this.buttonB.anchor.x = .5;
        this.buttonB.anchor.y = .5;
        this.buttonB.input.useHandCursor = true;

        var style = { font: "30px Arial", fill: "#000000", align:"center"};
        this.textB = game.add.text(this.buttonB.x-30, this.buttonB.y-18, "嘿嘿", style);

        this.buttonC = game.add.button(
            game.world.centerX+100,
            game.world.centerY,
            'buttonC',
            function() {
                callBack("C");
            },
            this);
        this.buttonC.anchor.x = .5;
        this.buttonC.anchor.y = .5;
        this.buttonC.input.useHandCursor = true;

        var style = { font: "30px Arial", fill: "#000000", align:"center"};
        this.textC = game.add.text(this.buttonC.x-30, this.buttonC.y-18, "不不", style);

    }

    hideButton() {
        this.buttonA.destroy();
        this.buttonB.destroy();
        this.buttonC.destroy();
        this.textA.text = "";
        this.textB.text = "";
        this.textC.text = "";

        this.title.style.fill = "#FF0000";
        this.title.text = "2018情人节快乐！";
    }



}


