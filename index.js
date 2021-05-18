class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();

      const daysRef = document.querySelector(
        `${this.selector} [data-value="days"]`,
      );
      const hoursRef = document.querySelector(
        `${this.selector} [data-value="hours"]`,
      );
      const minsRef = document.querySelector(
        `${this.selector} [data-value="mins"]`,
      );
      const secsRef = document.querySelector(
        `${this.selector} [data-value="secs"]`,
      );

      if (time < 1000) {
        clearInterval(this.intervalId);
      }

      daysRef.textContent = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      hoursRef.textContent = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      minsRef.textContent = pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      );
      secsRef.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
    }, 1000);

    function pad(value) {
      return String(value).padStart(2, '0');
    }
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 18, 2021'),
});

timer.start();
