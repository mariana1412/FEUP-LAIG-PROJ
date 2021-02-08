/**
 * MySpriteText
 * @constructor
 * @param scene - reference to MyScene object
 * @param text - the text to be displayed
 */
class MySpriteText {
    constructor(scene, text) {
        this.scene = scene;
        this.text = text;

        this.geometry = new MyRectangle(scene, 0, 0, 0.5, 0.5);
        this.texture = new CGFtexture(scene, "./resources/font3.png");
        //Declarar no SceneGraph 
        this.spritesheet = new MySpritesheet(this.scene, this.texture, 14, 5);

        this.characterMap = {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '!': 10,
            '?': 11,
            ':': 12,
            ' ': 13,
            'A': 14,
            'B': 15,
            'C': 16,
            'D': 17,
            'E': 18,
            'F': 19,
            'G': 20,
            'H': 21,
            'I': 22,
            'J': 23,
            'K': 24,
            'L': 25,
            'M': 26,
            'N': 27,
            'O': 28,
            'P': 29,
            'Q': 30,
            'R': 31,
            'S': 32,
            'T': 33,
            'U': 34,
            'V': 35,
            'W': 36,
            'X': 37,
            'Y': 38,
            'Z': 39,
            'a': 40,
            'b': 41,
            'c': 42,
            'd': 43,
            'e': 44,
            'f': 45,
            'g': 46,
            'h': 47,
            'i': 48,
            'j': 49,
            'k': 50,
            'l': 51,
            'm': 52,
            'n': 53,
            'o': 54,
            'p': 55,
            'q': 56,
            'r': 57,
            's': 58,
            't': 59,
            'u': 60,
            'v': 61,
            'w': 62,
            'x': 63,
            'y': 64,
            'z': 65
        };
    }

    getCharacterPosition(character) {
        let pos = this.characterMap[character];
        if (pos == null) return 78;
        return pos;
    }

    setText(text) {
        this.text = text;
    }

    display() {

        //activate shader
        this.scene.setActiveShaderSimple(this.spritesheet.shader);
        this.spritesheet.texture.bind(0); //activate the texture shader

        this.scene.pushMatrix();
        for (let character of this.text) {
            let pos = this.getCharacterPosition(character);
            this.spritesheet.activateCellP(pos);
            this.geometry.display();
            this.scene.translate(0.5, 0, 0);
        }
        this.scene.popMatrix();

        //resume default shader
        this.spritesheet.reset();
    }
}