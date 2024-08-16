function timer() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
  
    const meridian = hours >= 12 ? "PM" : "AM";
    let temp = hours % 12;
    if (temp == 0) {
      temp = 12;
    }
  
    console.clear();
  
    console.log(`${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`);
    console.log(
      `${temp.toString().padStart(2, "0")}:${minutes}:${seconds} ${meridian}`,
    );
  }
  
  setInterval(timer, 1000);
  