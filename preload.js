class ImagePreloader {
    constructor(maxIndex) {
        this.maxIndex = maxIndex;
        this.imgLoaded = 0;
        this.images = [];
    }

    preload(callback) {
        for (let i = 1; i <= this.maxIndex; i++) {
            const imgUrl = `img/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
            const img = new Image();
            img.src = imgUrl;
            img.onload = () => {
                this.imgLoaded++;
                if (this.imgLoaded === this.maxIndex) {
                    if (callback) callback(this.images);
                }
            };
            this.images.push(img);
        }
    }
}

module.exports = ImagePreloader; // Export the class
