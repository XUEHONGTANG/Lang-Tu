Vue.component('detail', {
    template: `
    <div class="member_detail">
            <h3>會員資料</h3>
            <label class="text-label-1">
                <input class="input-text" type="text">
            </label>
            <label class="text-label-2">
                <input class="input-text" type="text">
            </label>
            <label class="text-label-3">
                <input class="input-text" type="text">
            </label>
            <br>
            <label class="text-label-4">
                <input class="input-text" type="text">
            </label>
            <br>
            <label class="text-label-5">
                <input class="input-text" type="text">
            </label>
            <br>
            <label class="text-label-6">
                <input class="input-text" type="password">
            </label>
            <div class="btn">
                <button class="btn-0">修改會員資料</button>
            </div>
        </div>
        `
});

Vue.component('reservation', {
    template: `
    <div class="member_reservation">
            <h3>預約領養紀錄</h3>
            <table>
                <thead>
                    <th>人數</th>
                    <th>預約時間</th>
                    <th>寵物編號</th>
                    <th>狀態</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>三位</td>
                        <td>2022/9/20 13:00</td>
                        <td>pt001</td>
                        <td>已預約</td>
                        <td><button class="btn-0">取消</button></td>
                    </tr>
                    <tr>
                        <td>一位</td>
                        <td>2022/9/2 13:00</td>
                        <td>pt002</td>
                        <td>已預約</td>
                        <td><button class="btn-0">取消</button></td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    `
})

Vue.component('order', {
    template: `
    <div class="order_detail">
            <h3>訂單紀錄</h3>
            <table>
                <thead>
                        <th>編號</th>
                        <th>時間</th>
                        <th>方式</th>
                        <th>金額</th>
                        <th>狀態</th>
                        <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>OD001</td>
                        <td>111/1/1</td>
                        <td>信用卡</td>
                        <td>1200</td>
                        <td>已完成</td>
                        <td><i class="fa-solid fa-plus"></i></td>
                    </tr>
                    <tr>
                        <td>OD002</td>
                        <td>111/9/21</td>
                        <td>信用卡</td>
                        <td>1000</td>
                        <td>已完成</td>
                        <td><i class="fa-solid fa-plus"></i></td>
                    </tr>
                    <tr>
                        <td>OD002</td>
                        <td>111/9/21</td>
                        <td>信用卡</td>
                        <td>1000</td>
                        <td>已完成</td>
                        <td><i class="fa-solid fa-plus"></i></td>
                    </tr>
                    <tr>
                        <td>OD002</td>
                        <td>111/9/21</td>
                        <td>信用卡</td>
                        <td>1000</td>
                        <td>已完成</td>
                        <td><i class="fa-solid fa-plus"></i></td>
                    </tr>
                </tbody>
            </table>
            <h3 class="detail-title">訂單明細</h3>
            <table>
                <thead>
                    <th></th>
                    <th>商品</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>小計</th>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="./images/Derrick/product.jpg" alt=""></td>
                        <td>111/1/1</td>
                        <td>300</td>
                        <td>1</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td><img src="./images/Derrick/product.jpg" alt=""></td>
                        <td>111/9/21</td>
                        <td>300</td>
                        <td>2</td>
                        <td>300</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>合計:</td>
                        <td></td>
                        <td>900</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    `
})

Vue.component('sponsor', {
    template: `
    <div class="donation_record">
            <h3>贊助紀錄</h3>
            <table>
                <thead>
                    <th>贊助編號</th>
                    <th>贊助時間</th>
                    <th>方式</th>
                    <th>金額</th>
                    <th>狀態</th>
                </thead>
                <tbody>
                    <tr>
                        <td>OD001</td>
                        <td>2022/9/20</td>
                        <td>信用卡</td>
                        <td>NT 1200</td>
                        <td>已完成</td>
                    </tr>
                    <tr>
                        <td>OD002</td>
                        <td>2022/9/21</td>
                        <td>信用卡</td>
                        <td>NT 1000</td>
                        <td>已完成</td>
                    </tr>
                </tbody>
            </table>
            <h3 class="bottom">贊助捐款</h3>
            <h4>贊助專案：【I got you 浪我罩你】線上訂閱中途計畫</h4>
            <div class="button">
                <button class="btn-0">方案一：每月NT$300</button>
                <button class="btn-1">方案二：每月NT$500</button>
                <button class="btn-1">方案三：每月NT$800</button>
            </div>
            <div class="btn">
                <button class="btn-0-1">修改</button>
                <button class="btn-0-1">取消贊助</button>
            </div>
        </div>
    `
})

new Vue({
    el: '#memberCenterApp',
    data: {
        content: 'detail',
        detail: true,
        reservation: false,
        order: false,
        sponsor: false,
    },
    methods: {
        changeColor(){
            if(this.content == 'detail'){
                this.detail = true,
                this.reservation = false,
                this.order = false,
                this.sponsor = false
            }else if(this.content == 'reservation'){
                this.detail = false,
                this.reservation = true,
                this.order = false,
                this.sponsor = false
            }else if(this.content == 'order'){
                this.detail = false,
                this.reservation = false,
                this.order = true,
                this.sponsor = false
            }else if(this.content == 'sponsor'){
                this.detail = false,
                this.reservation = false,
                this.order = false,
                this.sponsor = true
            }
        }
    },
});