const store = new Vuex.Store({
// data
  // 儲存狀態
  // 響應式的資料狀態儲存, 資料狀態變化時，有用到的 component 都會即時更新
    state: {
    // products:[],
        cart: []

  },
  // computed
  // 取得狀態
  // 加工資料呈現
  // 同 computed 一樣會被緩存、依賴值變更了才會重新計算
  getters: {

  },
  // 變更狀態
  // 改變state
  // 只處理同步函數：不要在這進行非同步的動作（例如 setTimeout / 打 API 取遠端資料...等）
    mutations: {
        // SET_PRODUCTS(state, products){
        //     state.products = products;
        // }
        ADD_TO_CART(state, product) {
            

            // 如果相同產品相加 
            let productInCart = state.cart.find(item => {
                return item.pdId === product.pdId;
            });


            if (productInCart) {
                // console.log(productInCart);
                
                productInCart.quantity += product.quantity;
                productInCart.quantity >= product.inventory ? productInCart.quantity = product.inventory : productInCart.quantity;
                return;
            } else {
                //  不同產品新增
                state.cart.push(product)
            }

        },
        DELETE_TO_CART(state, product) { 
            // let index = state.cart.indexOf(product);
            //  state.cart.splice(index, 1);


            state.cart = state.cart.filter(item => {
                return item.pdId !== product.pdId;
            })

            sessionStorage.setItem("store", JSON.stringify(store.state))
        },
        CLEAR_CART(state) {
            state.cart.length = 0;
            sessionStorage.setItem("store", JSON.stringify(store.state))
        }
  },
  // methods
  // 發出指令
  // 操作同步或異步事件的處理但不直接修改資料（state）
  // 是透過commit → 呼叫 mutation 改變 state
    actions: {
        // getProducts({ commit }) {
        //     fetch('../php/loading_products.php')
        //         .then(response => response.json())
        //         .then(response => {
        //             response.forEach((pd, i) => {
        //                 response[i].imgList = response[i].imgList.split(',');
        //             });
        //             commit('SET_PRODUCTS', response);
        //         });    
        // },
        addProductToCart({ commit },product) { 
            commit("ADD_TO_CART", product);
        },
        deleteProductToCart({ commit },product) { 
            commit("DELETE_TO_CART", product);
        },
        clearCart({ commit }) { 
            commit("CLEAR_CART");
        },
    }

});
  export default store;