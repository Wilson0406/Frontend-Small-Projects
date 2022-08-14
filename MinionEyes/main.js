// Select the eye

let eye_ref = document.querySelectorAll(".eye");

// mousemove for laptops/pcs and touchmove for tablets/smartphones

let events = ["mousemove", "touchmove"];

// check for touchscreen
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}


// Same function for both the events
events.forEach((eventType) => {
    document.body.addEventListener(eventType,
        (event) => {
            eye_ref.forEach((eye) => {
                
                //getBoundingClientRect() method return the position relative to the viewport
                
               let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
               let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
                // console.log(eyeX, eyeY);

                /* ClientX and ClientY return the position of clients cursor from top left of the screen*/
                var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
                var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
                // console.log(x, y);

                // Subtract x positon of mouse from x position of eye and y position of mouse from y position of eye
                // use atan2(returns angle in radians)

                let radian = Math.atan2(x - eyeX, y - eyeY);
                // Convert radians to degrees
                let degrees = radian * (180 / Math.PI) * -1 + 180;
                console.log(degrees);

                // Rotate the eye
                eye.style.transform = "rotate(" + degrees + "deg)";

            });
        });
});
