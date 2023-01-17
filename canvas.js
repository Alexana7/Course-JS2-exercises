let canvas = document.getElementById('canvas');
console.log(canvas)
let ctx = canvas.getContext('2d');

//Rectangles

// ctx.fillRect(5, 5, 50, 50);
// ctx.fillRect(250, 250, 50,50);
// ctx.rect(100, 100, 50, 50);
// ctx.fill()
// ctx.clearRect(120, 120, canvas.width, canvas.height);

//triangle

// ctx.beginPath();
// ctx.moveTo(5, 5);
// ctx.lineTo(50, 50);
// ctx.lineTo(50, 15);
// ctx.closePath();
// ctx.fill()

// circles and  arcs

// ctx.arc(25,25,20,0, 2 * Math.PI) //circle
// ctx.arc(70, 25, 20, 0, Math.PI) //semi-circle
// ctx.fill()

// ctx.beginPath();
// ctx.moveTo(5, 5);
// ctx.arcTo(55, 5, 55, 55, 50);
// ctx.stroke()

// Style
//цвет заливки
// ctx.beginPath()
// ctx.arc(25, 25, 20, 0, 2 * Math.PI);
// ctx.fillStyle = '#fbbb48';
// ctx.fill();
// ctx.beginPath();
// ctx.fillStyle = 'rgba(0,0,255,0.5)';
// ctx.fillRect(5, 5, 50, 50);
// ctx.fillStyle = 'rgba(230,226,33,0.5)';
// ctx.fillRect(25, 25, 50, 50);

// //цвет контура

// ctx.beginPath();
// ctx.strokeStyle = 'rgb(0,0,255)';
// ctx.strokeRect(5, 5, 50, 50);
// ctx.strokeStyle = 'rgb(230,226,33)';
// ctx.strokeRect(25, 25, 50, 50);

// //Стидлизация линий

// // Линия с концами типа butt
// ctx.moveTo(15,25);
// ctx.lineTo(100,25);
// ctx.stroke();

// // Линия с концами типа round
// ctx.beginPath();
// ctx.moveTo(15,50);
// ctx.lineTo(100,50);
// ctx.lineCap = "round";
// ctx.stroke();

// // Линия с концами типа square
// ctx.beginPath();
// ctx.moveTo(15,75);
// ctx.lineTo(100,75);
// ctx.lineCap = "square";
// ctx.stroke();


//ex.6.3 Отрисуйте в canvas три отрезка разных цветов. Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета.
// ctx.beginPath()
// ctx.strokeStyle = '#e74c3c'
// ctx.moveTo(10, 10)
// ctx.lineTo(100, 10)
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.strokeStyle = '#16a085'
// ctx.moveTo(10, 50 )
// ctx.lineTo(100, 50)
// ctx.stroke()
// ctx.closePath()

// ctx.beginPath()
// ctx.strokeStyle = '#2980b9'
// ctx.moveTo(10, 100)
// ctx.lineTo(100, 100)
// ctx.stroke()
// ctx.closePath()


//ex.6.4 В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas четыре квадрата fillRect разных цветов с указанными на картинке размерами и отступами.
// ctx.beginPath();
// ctx.fillStyle = '#ff3d00';
// ctx.fillRect(10, 10, 100, 100);
// ctx.fillStyle = '#0bdd38';
// ctx.fillRect(120, 10, 100, 100);
// ctx.fillStyle = '#2e77da';
// ctx.fillRect(10, 120, 100, 100);
// ctx.fillStyle = '#ffd200';
// ctx.fillRect(120, 120, 100, 100);


// ex.6.5 В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas 50 окружностей c центром в точке 150:150 и радиусом от 2 до 100. Для решения данной задачи воспользуйтесь циклом.
const drawArc = (c, x, y, r, color = 'black', fill = false) => {
    c.beginPath()
    fill ? c.fillStyle = color : c.strokeStyle = color;
    c.arc(x, y, r ,0, Math.PI * 2);
    fill ? c.fill() : c.stroke();
    c.closePath() 
}

let cnt = 50, r = 2;

while (cnt--) {
    drawArc(ctx, 150 ,150 , r, 'red')   
    r += 2;    
}

// ex.6.6 рограмме задана переменная ctx, которая содержит контекст canvas элемента. Напишите программу, которая отрисовывает круги при движении мышью по canvas (для получения координат мыши используйте offsetX и offsetY). Для решения задачи воспользуйтесь методом addEventListener у объекта document.


ctx.clearRect(0, 0, 300, 300);
document.addEventListener('mousemove', function(e) {
    let x = e.offsetX, y = e.offsetY;
    drawArc(ctx, x, y, 10, "red", true);
})