function random(min, max) {
  return min + Math.random() * (max - min);
}

let mouseMoveHandler;
let mouseUpHandler;

const App = {
  data() {
    return {
      currentLetter: "A",
      columnWidths: [65, 65, 65, 65, 65],
      rowHeights: [16, 16, 16, 16, 16],
    };
  },
  computed: {
    rows() {
      const rows = font[this.currentLetter].split("\n").slice(1);
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        while (row.length < 5) {
          row += " ";
        }
        rows[i] = row;
      }

      return rows;
    },
  },
  methods: {
    randomizeEverything() {
      for (let i = 0; i < this.columnWidths.length; i++) {
        this.columnWidths[i] = random(10, 100);
      }
      for (let i = 0; i < this.rowHeights.length; i++) {
        this.rowHeights[i] = random(10, 100);
      }
    },

    randomizeColumnWidth(columnIndex) {
      this.columnWidths[columnIndex] = random(10, 100);
    },
    startDraggingColumn(columnIndex) {
      console.log("start");
      mouseMoveHandler = (e) => this.dragColumn(e, columnIndex);
      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", this.stopDraggingColumn);
    },
    dragColumn(e, columnIndex) {
      // console.log(e);
      this.columnWidths[columnIndex] += e.movementX;
    },
    stopDraggingColumn() {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", this.stopDraggingColumn);
    },

    startDraggingRow(rowIndex) {
      console.log("start");
      mouseMoveHandler = (e) => this.dragRow(e, rowIndex);
      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", this.stopDraggingRow);
    },
    dragRow(e, rowIndex) {
      // console.log(e);
      this.rowHeights[rowIndex] += e.movementY;
    },
    stopDraggingRow() {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", this.stopDraggingRow);
    },
  },
};

Vue.createApp(App).mount("#app");
