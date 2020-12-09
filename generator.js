function random(min, max) {
  return min + Math.random() * (max - min);
}

function sum(l) {
  return l.reduce((a, b) => a + b);
}

let mouseMoveHandler;
let mouseUpHandler;

const App = {
  data() {
    return {
      currentLetter: "A",
      columnWidths: [85, 85, 85, 85, 85],
      rowHeights: [16, 16, 16, 16, 16],
    };
  },
  computed: {
    rows() {
      return this.glyphRows(this.currentLetter);
    },
  },
  methods: {
    glyphRows(letter) {
      const rows = font[letter].split("\n").slice(1);
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        while (row.length < 5) {
          row += " ";
        }
        rows[i] = row;
      }

      return rows;
    },
    randomizeEverything() {
      for (let i = 0; i < this.columnWidths.length; i++) {
        this.columnWidths[i] = random(5, 70);
      }
      for (let i = 0; i < this.rowHeights.length; i++) {
        this.rowHeights[i] = random(5, 70);
      }
    },

    randomizeColumnWidth(columnIndex) {
      this.columnWidths[columnIndex] = random(5, 70);
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

    exportFont() {
      const totalRowHeight = sum(this.rowHeights);
      const totalColumnWidth = sum(this.columnWidths);
      const scale = Math.round(800 / totalRowHeight);
      const advanceWidth = Math.round((totalColumnWidth + 50) * scale);

      const glyphs = [];

      const notdefGlyph = new opentype.Glyph({
        name: ".notdef",
        unicode: 0,
        advanceWidth,
        path: new opentype.Path(),
      });
      glyphs.push(notdefGlyph);

      const space = new opentype.Glyph({
        name: "space",
        unicode: 32,
        advanceWidth: (totalColumnWidth + 50) * scale,
        path: new opentype.Path(),
      });
      glyphs.push(space);

      for (const character in fontMap) {
        const unicode = character.charCodeAt(0);
        const glyphInfo = fontMap[character];
        const name = glyphInfo.name;

        const rows = this.glyphRows(glyphInfo.shape);
        const path = new opentype.Path();

        let y = 0;
        for (let rowIndex = 4; rowIndex >= 0; rowIndex--) {
          const row = rows[rowIndex];
          const rowHeight = this.rowHeights[rowIndex];
          let x = 0;
          for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
            const cell = row[columnIndex];
            const columnWidth = this.columnWidths[columnIndex];
            if (cell === "#") {
              // console.log(x * columnWidth, y * rowHeight);
              path.moveTo(x * scale, y * scale);
              path.lineTo((x + columnWidth) * scale, y * scale);
              path.lineTo((x + columnWidth) * scale, (y + rowHeight) * scale);
              path.lineTo(x * scale, (y + rowHeight) * scale);
              path.close();
            }
            x += columnWidth;
          }

          y += rowHeight;
        }

        const letterGlyph = new opentype.Glyph({
          name,
          unicode,
          advanceWidth,
          path,
        });
        glyphs.push(letterGlyph);
      }

      const exportFont = new opentype.Font({
        familyName: "Cellfont",
        styleName: "Regular",
        unitsPerEm: 1000,
        ascender: 800,
        descender: -200,
        glyphs,
      });
      exportFont.download();
    },
  },
};

Vue.createApp(App).mount("#app");
