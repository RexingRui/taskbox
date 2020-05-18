<template>
  <div class="draw-grid">
    <table
      :style="tableStyleObject"
      class="table"
      @mouseleave="handleMouseLeaveTable"
    >
      <tr v-for="row in gridRowsArr" :key="row" class="table-tr">
        <td
          v-for="column in gridColumnsArr"
          :class="{
            selectedColor:
              row <= selectedIndexRow && column <= selectedIndexColumn
          }"
          :key="column"
          :style="gridStyleObject"
          class="table-td"
          @mouseenter="handleMouseEnter(row, column)"
          @click="handleMouseClickTable(row, column)"
        />
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "DrawGrid",
  props: {
    gridConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selectedTableArea: [],
      selectedIndexRow: -1,
      selectedIndexColumn: -1,
      gridStyleObject: {},
      tableStyleObject: {},
      gridRowsArr: [],
      gridColumnsArr: []
    };
  },
  watch: {
    gridConfig() {
      this.updateUI();
    }
  },
  created() {
    this.updateUI();
  },
  methods: {
    updateUI() {
      this.gridRowsArr = [];
      this.gridColumnsArr = [];
      this.gridStyleObject.width =
        this.gridConfig.width / this.gridConfig.columns + "px";
      this.gridStyleObject.height =
        this.gridConfig.height / this.gridConfig.rows + "px";

      for (let i = 0; i < this.gridConfig.rows; i++) {
        this.gridRowsArr.push(i);
      }

      for (let i = 0; i < this.gridConfig.columns; i++) {
        this.gridColumnsArr.push(i);
      }
    },
    handleMouseEnter(row, column) {
      this.selectedIndexRow = row;
      this.selectedIndexColumn = column;
    },
    handleMouseLeaveTable() {
      this.selectedIndexRow = -1;
      this.selectedIndexColumn = -1;
    },
    handleMouseClickTable(rows, columns) {
      this.$emit("sendGrids", { rows: rows + 1, columns: columns + 1 });
    }
  }
};
</script>
<style scoped>
.table {
  border-collapse: collapse;
}
.table-td {
  border: 1px solid #585858;
}
.selectedColor {
  background: rgba(6, 135, 179, 0.7);
}
</style>
