// $(".twzipcode").twzipcode();

new Vue({
  el: "#shoppingCartApp",
  data: {
    cartTitle: [
      { id: 1, name: "購物車" },
      { id: 2, name: "結帳頁面" },
      { id: 3, name: "完成訂單" },
    ],
    cartList: [
      {
        img: "./images/ff/pd-001.jpg",
        title: "貓貓罐罐",
        price: "NT$300",
        sum: 300,
      },
      {
        img: "./images/ff/pd-002.png",
        title: "狗狗罐罐",
        price: "NT$400",
        sum: 400,
      },
    ],
    counter: 1,
    currentPage: 1
  },
  methods: {
    changeCounter(num) {
      this.counter += +num;
      this.counter > 1 ? this.counter : (this.counter = 1);
    },
  },
  mounted() {
    this.currentPage = 1;
  },
  updated() {
    $(".twzipcode").twzipcode();
  },
});
