const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const objArray = [];

class Country {
    constructor(id, image, title, text) {
        this.id = id,
        this.image = image,
        this.title = title,
        this.text = text
    }
}

for (let i = 0; i < images.length; i++) {
    objArray.push(new Country(i, images[i], title[i], text[i]));
}

console.log(objArray);

const app = new Vue(
    {
        el: '#root',
        data: {
            mainData: objArray,
            currentSlide: 0,
            timer: 0,
        },
        methods: {
            onHover: function() {
                clearInterval(this.timer);
            },
            autoplay: function() {
                this.timer = setInterval(this.nextSlide, 3000);
            },
            prevSlide: function() {
                if (this.currentSlide == 0) {
                    this.currentSlide = this.mainData.length - 1;
                } else {
                    this.currentSlide--;
                }
                console.log(this.currentSlide);
            },
            nextSlide: function() {
                if (this.currentSlide == this.mainData.length - 1) {
                    this.currentSlide = 0;
                } else {
                    this.currentSlide++;
                }
                console.log(this.currentSlide);
            }
        }
    }
)