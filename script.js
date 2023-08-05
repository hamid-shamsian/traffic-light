// let red_time = 5000;
// let green_time = 4000;
// let yellow_time = 2000;

// function redHandler() {
//         $('#redLight').addClass('bg-red');
//         $('#yellowLight').removeClass('bg-yellow');
//         $('#counter').addClass('red');
//         $('#counter').removeClass('yellow');
//         new_counter(red_time);
// }

// function greenHandler() {
//         $('#redLight').removeClass('bg-red');
//         $('#greenLight').addClass('bg-green');
//         $('#counter').addClass('green');
//         $('#counter').removeClass('red');
//         new_counter(green_time);
// }

// function yellowHandler() {
//         $('#greenLight').removeClass('bg-green');
//         $('#yellowLight').addClass('bg-yellow');
//         $('#counter').addClass('yellow');
//         $('#counter').removeClass('green');
//         new_counter(yellow_time);
// }

// function auto() {
//         redHandler();
//         setTimeout(greenHandler, red_time);
//         setTimeout(yellowHandler, red_time + green_time);
//         setTimeout(auto, red_time + green_time + yellow_time);
// }

// function new_counter(time_in_ms) {
//         let _counter = time_in_ms / 1000;
//         (function counter() {
//                 $('#counter').text((_counter < 10)? '0' + _counter : _counter);
//                 _counter--;
//                 if (_counter > 0) setTimeout(counter, 1000);
//         })();

// }

// auto();

function TrafficLight(_red, _green, _yellow) {
   (this.red = _red),
      (this.green = _green),
      (this.yellow = _yellow),
      (this.run = async () => {
         for (_light in this) {
            if (typeof this[_light] == "number") await handler(_light);
         }
         this.run();
      });

   const handler = async _color => {
      $(".circle").attr("class", "circle");
      $(`#${_color}Light`).addClass(`bg-${_color}`);
      $("#counter").attr("class", _color);
      let counter_done = await counter(_color);
      return new Promise(resolve => {
         if (counter_done) resolve();
      });
   };

   const counter = color => {
      let _counter = this[color];
      return new Promise(resolve => {
         (function countDown() {
            $("#counter").text(_counter < 10 ? "0" + _counter : _counter);
            if (_counter > -1) setTimeout(countDown, 1000);
            else resolve(true);
            _counter--;
         })();
      });
   };
}

const myTrafficLight = new TrafficLight(12, 8, 3);
myTrafficLight.run();

console.log("traffic light is running!"); // <<< indicating that this code is completely asynchronous! :))
