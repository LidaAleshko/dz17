//Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл. двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад (ввод информации о скорости движения), расчет пройденных километров.


console.log('CAR');

let Broadcast = function () {
    
     
    this.get = function () {
        this.name = prompt('Введите название автомобиля')
        if (this.car === ' ') {
            confirm(`ERORR?`);
        } else {
            console.log(this.name)
        };
        this.age = +prompt('Введите год выпуска автомобиля');
       if(confirm('Завести машину?')){
            console.log(this.age)}else {console.log('Чего стоим?')
            };
        this.broadcast1 = 10;
        this.broadcast2 = 40;
        this.broadcast3 = 60;
        if (confirm('Включить передачу "1')) {
            this.workTime1 = +prompt('Сколько времени работает ч');
        } else {confirm('Заглушить машину?')
            this.workTime1 = 0;
        }
        ; 
       
        this.operation1();

        if (confirm('Включить передачу "2')) {
            this.workTime2 = +prompt('Сколько времени работает ч');
        } else {
            this.workTime2 = 0;
        };
        this.operation2();

        if (confirm('Включить передачу "3')) {
            this.workTime3 = +prompt('Сколько времени работает ч');
        } else {
            this.workTime3 = 0;
        };
        this.operation3(); 
        if(
        this.stop = confirm('Заглушить машину?'))
        { console.log("Приехали!")}
        else{
            console.log("О нет! Самолеты задом не летают");
        };
     
    };
 
    this.operation1 = function (result1) {
        this.result1 = this.broadcast1 * this.workTime1;
        console.log( this.result1);
        this.show1();

    };
 
    this.show1 = function () {
 
        if (this.workTime1 == 0 || this.workTime1 == undefined) {
            console.log('Передача "1"  не включена');
        } else {
            console.log('Передача "1" проработала - ' + this.workTime1 + 'ч, и расстояние составляет = ' + this.result1 + 'км');
        }
    };

    this.operation2 = function (result2) {
        this.result2 = this.broadcast2 * this.workTime2;
        console.log(this.result2);
        this.show2();}

    this.show2 = function () {
 
        if (this.workTime2 == 0 || this.workTime2 == undefined) {
            console.log('Передача "1"' + '" не включена');
        } else {
            console.log('Передача "2" проработала - ' + this.workTime2 + 'ч, и расстояние составляет = ' + this.result2 + 'км');
        }
    };

    this.operation3 = function (result3) {
        this.result3 = this.broadcast3 * this.workTime3;
        console.log(this.result3);
        this.show3();}

    this.show3 = function () {
 
        if (this.workTime3 == 0 || this.workTime3 == undefined) {
            console.log('Передача "1"' + '" не включена');
        } else {
            console.log('Передача "3" проработала - ' + this.workTime3 + 'ч, и расстояние составляет = ' + this.result3 + 'км');
        }
    };
    letdistance = function () {
    this.result1 + this.result2 + this.result3};
  console.log(this.distance)
    
}


let Broadcast1 = new Broadcast('Передача 1');
Broadcast1.get();
let Broadcast2 = new Broadcast('Передача 2');
Broadcast2.get();
let Broadcast3 = new Broadcast('Передача 3');
Broadcast3.get();


console.log('Всего расстояние составляет - ' + distance + 'км');