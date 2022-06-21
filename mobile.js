let mobile=function (battery,memory1,memory2,memory3) {
    this.battery = battery;
    this.memory1 = memory1;
    this.memory2 = memory2;
    this.memory3 = memory3;

    this.turnon = function () {
        if (this.battery > 0) {
            alert('Điện thoại đang bật');
        } else {
            alert('Hãy sạc điện thoại');
        }
    }
    this.turnoff = function () {
        if (this.battery > 0) {
            alert('Điện thoại đang tắt');
        } else {
            alert('Hãy sạc điện thoại');
        }
    }
    this.chargeBattery = function () {
        alert('Xạc pin ' + this.battery++);
    }
    this.messenger = function () {
        if (this.battery > 0) {
           let a = prompt('Write a messenger' + this.battery--);
            this.memory1+= a;
        } else {
            alert('Hãy sạc điện thoại');
        }
    }
    this.send = function () {
        if (this.battery > 0) {
            alert('Tin đã gửi là ' + a + this.battery--);
        } else {
            alert('Hãy sạc điện thoại');
        }
    }
    this.use = function () {
        if (this.battery > 0) {
            alert('Đã sử dung 1 chức năng ' + this.battery--);
        } else {
            alert('Hãy sạc điện thoại');
        }
    }
}
let Mobile=new mobile(2,100,100,100);

function turnon(){
    Mobile.turnon();
}
function turnoff(){
    Mobile.turnoff();
}
function chargeBattery(){
    Mobile.chargeBattery();
}
function messenger(){
    Mobile.messenger();
}
function send(){
    Mobile.send();
}
function use(){
    Mobile.use();
}