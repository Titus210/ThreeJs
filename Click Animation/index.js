const canvas = document.getElementsByClassName('canvas');
const ctx = canvas.getcontext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let atoms = [];

canvas.addEventListener('click',function(e){
    for(let i = 0; i <20; i++){
        atoms.push(new atom(e.x, e.y));
    }
})

const animation = () =>{
    atoms.forEach(atom =>{
        atom.update();
        atom.draw();
    })
    removeEventListener(animation);
}
animation();


class atom{
    constructor(y,x){
        this.x =x;
        this.y = y;
        this.radius = Math.random() * 2;
        this.speed_x = Math.random() * 4 -2;
        this.speed_y = Math.random() * 4 -2;
    }
    update(){
        this.x += this.speed_x;
        this.y += this.speed_y;
    }
    draw(){
        ctx.beginpath();
        ctx.arc(this.x, this.y, this.radius,0, Math.PI * 2);
        ctx.fill()
    }
}