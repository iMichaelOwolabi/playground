const event = {
  name: 'Birthday Party!',
  guestList: ['Michael', 'Seun', 'Oyin'],
  printGuestList() {
    console.log(this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' is going to ' + this.name)
    })
  }
}

event.printGuestList();