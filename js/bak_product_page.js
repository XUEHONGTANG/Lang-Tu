new Vue({
  el: "#bakProductApp",
  data: {
    picText: "",
    currentSrc: 0,
    imgList: [],
    dataList: [],
    images: [],
    pdId: "",
    name: "",
    info: "",
    price: null,
    cost: null,
    inventory: null,
  },
  methods: {
    readFile(files) {
      let vm = this;
      for (let i = 0; i < files.length; i++) {
        let file = "";

        let reader = new FileReader();

        reader.onload = function (event) {
          file = event.target.result;
          vm.images.push(file);
        };
        reader.readAsDataURL(files[i]);
      }
    },
    // 拖拉圖片,操控input[type=file]失敗放棄
    // drop(e) {
    //   let datas = e.target.files || e.dataTransfer.files;

    //   let i;
    //   for (i = 0; i < datas.length; i++) {
    //     this.dataList.push(datas[i]);
    //     this.imgList.push(datas[i].name);
    //   }

    //   this.readFile(datas);

    //   e.stopPropagation();
    //   e.preventDefault();

    //   this.picText = "上載完成,請傳新圖片";
    // },
    onChange(e) {
      this.dataList = [];
      this.imgList = [];
      this.images = [];

      let datas = e.target.files;

      let i;
      for (i = 0; i < datas.length; i++) {
        this.dataList.push(datas[i]);
        this.imgList.push(datas[i].name);
        }

      this.readFile(datas);
      this.picText = "預覽成功";
    },
    // 刪除圖片,操控input[type=file]失敗放棄
    // deleteImage() {
    //   this.images.splice(0, 1);
    //   this.imgList.splice(0, 1);
    //   this.dataList.splice(0, 1);

    //   //   this.$refs.myFiles.files = {};
    //   console.log(this.$refs.myFiles.files);

    //   if (this.images.length === 0) {
    //     this.text = "Pls put image...";
    //   }
    // },
    saveProduct() {
      fetch("./php/insertProduct.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdId: this.pdId,
          name: this.name,
          cost: this.cost,
          price: this.price,
          inventory: this.inventory,
          sales: 0,
          info: this.info,
          state: true,
          images: `${this.imgList}`,
        }),
      });
        
    
        
    // fetch("./php/insert_images.php", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     body: this.dataList
    //   });
    // this.$refs.form.$el.submit()

      alert("儲存成功");
    },
  },
  mounted() {
    // const swiper_element = this.$el.querySelector(".mySwiper");
    // const swiper = new Swiper(swiper_element, {
    //   slidesPerView: "auto",
    //   spaceBetween: 16,
    //   loop: false,
    //   loopFillGroupWithBlank: false,
    // });

    this.picText = "請選擇圖片";
  },
  updated() {
    const swiper_element = this.$el.querySelector(".mySwiper");
    const swiper = new Swiper(swiper_element, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      loopFillGroupWithBlank: false,
    });
  },
});
