var NameSpace = Space({
  setup: function(options) {
    // Your space code goes here
  }
});

var NameShift = Shift({
  setup: function(json) {
    this.setPosition(json.position);
    this.makeDraggable();
  }
});