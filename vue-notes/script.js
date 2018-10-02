
var card = new Vue({
  el: "#card",

  data: {
    title: "Trees!",
    btn_text: "Add tree",
    input: '',

    trees: [
      {
        name: "Elm",
        qty: 1
      },
      {
        name: "Birch",
        qty: 2
      },
      {
        name: "Fir",
        qty: 507
      }
    ],
    content:
      "<strong>Dinosaurs</strong> are a diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period."
  },

  methods: {
    addTree: function() {
      var input = document.getElementById("tree-in");

      if (input.value) {
        this.trees.push({
          name: input.value,
          qty: 1
        });
        input.value = '';
      }
    },
    delTree: function(id) {
      this.trees.splice(id, 1);
    },
    increment: function(i) {
      this.trees[i].qty ++;
    },
    decrement: function(i) {
      this.trees[i].qty --;
    }

  },

  filters: {
    speak: function(val) {
      if (!val) return '';
      val = val.toString();
      return val + ' is a tree!';
    }
  },

  computed: {
    totalTrees: function() {
      var sum = 0;
      var trees = this.trees;

      for (var i in trees) {
        sum += trees[i].qty;
      }
      return sum;
    },
    // In this case we could just write {{ trees.length }} instead of {{ totalTypes }} in the HTML:
    totalTypes: function() {
      return this.trees.length;
    }
  },

  watch: {
    // we add 'input' to our data:
    input: _.debounce(function() {
      this.btn_text = this.input !== '' ? "Add " + this.input : "Add tree";
    }, 250)
  }
});
