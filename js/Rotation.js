
AFRAME.registerComponent("driver-rotation-reader", {
  init: function() {
    console.log("Welcome to Virtual Scuba Diving !!!");
  },
  tick: function() {
    this.setVelocity(this.el.body);
  },
  update: function() {
    // Key Down Event
    window.addEventListener("keydown", e => {
      const driverElementRotation = this.el.getAttribute("rotation");
      console.log(this.el.body);
      const body = this.el.body;
      const driverRotation = body.angularVelocity;
      const driverPosition = body.position;

      if (e.key === "ArrowRight") {
        if (driverElementRotation.x >= -35 && driverElementRotation.x <= 30) {
          body.angularVelocity.set(0, 0, -0.2);
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
      if (e.key === "ArrowLeft") {
        if (driverElementRotation.x <= 35 && driverElementRotation.x >= -30) {
          body.angularVelocity.set(0, 0, 0.2);
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
      if (e.key === "ArrowUp") {
        if (driverElementRotation.z > -50 && driverElementRotation.z <= -10) {
          body.angularVelocity.set(0.2, 0, 0);
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
      if (e.key === "ArrowDown") {
        if (driverElementRotation.z <= -10 && driverElementRotation.z >= -50) {
          body.angularVelocity.set(-0.2, 0, 0);
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
    });

    // Key Up Event
    window.addEventListener("keyup", e => {
      const body = this.el.body;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        body.angularVelocity.set(0, 0, 0);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        body.angularVelocity.set(0, 0, 0);
      }
    });
  },
  setVelocity: function(body) {
    if (body !== undefined) {
      // Set velocity to 0.1 to float in the air
      body.velocity.set(0.1, 0.1, 0.1);
      // Initial position of driver
      const initPosition = body.initPosition;
      body.position.set(initPosition.x, initPosition.y, initPosition.z);
    }
  }
});
