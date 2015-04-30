
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.setPosition(size.width /2 , size.height /2 );
        this.addChild(this.sprite);

        //Filter.grayScale(this.sprite);

         graySprite(this.sprite);
        //Filter.sepia(this.sprite,0.3);
    }
});
function graySprite(sprite)
{
    if(sprite)
    {

        var shader = new cc.GLProgram();//cc.GLProgram.create("gray.vsh", "gray.fsh");
        shader.retain();
        //shader.initWithByteArrays("res/gray.vsh", "res/gray.fsh");
        //shader.initWithString("res/gray.vsh", "res/gray.fsh");
        shader.initWithString(res.Gray_vsh,res.Gray_fsh);
        shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
        shader.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
        shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);

        shader.link();
        shader.updateUniforms();
        sprite.setShaderProgram(shader);
    }
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

