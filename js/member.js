Vue.component('detail', {
    data() {
        return {
            member: [],
            account: "",
            isDisabled: true,
            text: '修改',
        }
    },
    methods: {
        revise(){
            if(this.text == '修改'){
                this.text = '確認',
                this.isDisabled = false
            }else if(this.text == '確認'){
                this.text = '修改',
                this.isDisabled = true
                fetch('./php/updateMember.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.member[0].name, 
                        gender: this.member[0].gender, 
                        tel: this.member[0].tel, 
                        birthday: this.member[0].birthday,
                        email: this.member[0].email,
                        password: this.member[0].password,
                    }) 
                })
            }

        }
    },

    template: `
        <div class="member_detail" v-if="member[0]">
                <h3>會員資料</h3>
                <label class="text-label-1">
                    <input 
                        class="input-text" 
                        type="text"
                        v-model.trim="member[0].name"
                        :disabled=isDisabled>
                </label>
                <label class="text-label-2">
                    <input 
                    class="input-text" 
                    type="text"
                    v-model="member[0].gender"
                    :disabled=isDisabled>
                </label>
                <label class="text-label-3">
                    <input 
                        class="input-text" 
                        type="text"
                        v-model="member[0].tel"
                        :disabled=isDisabled>
                </label>
                <br>
                <label class="text-label-4">
                    <input 
                        class="input-text" 
                        type="date"
                        v-model="member[0].birthday"
                        :disabled=isDisabled>
                </label>
                <br>
                <label class="text-label-5">
                    <input 
                        class="input-text" 
                        type="email"
                        v-model="member[0].email"
                        :disabled=isDisabled>
                </label>
                <br>
                <label class="text-label-6">
                    <input 
                        class="input-text" 
                        type="password"
                        v-model="member[0].password"
                        :disabled=isDisabled>
                </label>
                <div class="btn">
                    <button 
                        class="btn-0"
                        @click.stop.prevent='revise'
                    >{{text}}</button>
                </div>
            </div>
        `,
        mounted() {
            let account = sessionStorage.getItem("account")
            this.account = account

            fetch('./php/searchMember.php',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    account: this.account, 
                })
            })
            .then(resp => resp.json())
            .then(resp => this.member = resp);
        },
});

Vue.component('reservation', {
    data() {
        return {
            adoption: [],
            account: "",
            hide: true,
            show: false,
        }
    },
    methods: {
        cancel(){
            confirm("確定要取消?")
            if(this.hide == true){
                this.hide = false
                this.show = true 
            }
        }
    },
    template: `
        <div class="member_reservation">
            <div v-if="hide">
                <h3>預約領養紀錄</h3>
                <table>
                    <thead>
                        <th class="person">人數</th>
                        <th>預約時間</th>
                        <th class="num">寵物編號</th>
                        <th class="situation">狀態</th>
                        <th class="cancel"></th>
                    </thead>
                    <tbody>
                        <tr v-for="info in adoption">
                            <td>{{info.people}}位</td>
                            <td>{{info.date}} {{info.time}}</td>
                            <td>PT00{{info.id}}</td>
                            <td>{{info.situation}}</td>
                            <td><button class="btn-0" @click="cancel">取消</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <div v-else-if="show" class="none-wrapper"><h3 class="none">尚無預約領養紀錄</h3></div>
            </div>
    `,
    mounted() {
        let account = sessionStorage.getItem("account")
        this.account = account

        fetch('./php/searchAdoption.php',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: this.account, 
            })
        })
        .then(resp => resp.json())
        .then(resp => this.adoption = resp);
    },
})

Vue.component('order', {
    data() {
        return {
            order: [],
            imgURL:'./images/ff/',
            account: "", 
            isShow: false,
            currentOrder: -1,
            icon: '<i class="fa-solid fa-plus"></i>',
        }
    },
    methods: {
        // i 值由 v-for 取得， isShow值為 false 預設是關閉的， currentOrder 值為 -1
        // 目前有兩筆資料所以 i 值為 0 和 1，如資料增加也一樣
        show(i){
            if(this.isShow == false || this.currentOrder != i){
                //這邊做判斷如果我的頁面是關閉 且 變數值不等於i值
                //那頁面開啟 且 變數值 = i
                this.isShow = true
                this.currentOrder = i
                this.icon = '<i class="fa-solid fa-minus"></i>'
            }else if(this.isShow == true || this.currentOrder != -1){
                //如果頁面是開啟 且 變數值不等於 變數值預設數字
                //頁面關閉 且 變數值恢復預設
                this.currentOrder = -1
                this.isShow = false
                this.icon = '<i class="fa-solid fa-plus"></i>'
            }
            //以上因為show是綁定每一次的click 
        }
    },
    template: `
    <div class="order_detail">
    <h3>訂單紀錄</h3>
    <div class="product" v-for="(info, i) in order">
    <table class="top">
            <tr v-if= "i == 0">
                <td class="num">編號</td>
                <td class="num">時間</td>
                <td class="num">方式</td>
                <td class="num">金額</td>
                <td class="num">狀態</td>
                <td class="num"></td>
            </tr>
        <tbody>
            <tr>
                <td class="orderDetail">OD00{{info.id}}</td>
                <td class="dateDetail">{{info.date}}</td>
                <td class="paymentDetail">{{info.payment}}</td>
                <td class="totalDetail">{{info.total}}</td>
                <td class="priceDetail">{{info.situation}}</td>
                <td @click="show(i)" class="situationDetail" v-html="icon"></td>
            </tr>
        </tbody>
    </table>
    <transition name="fade" mode="in-out">
    <div v-if="i == currentOrder">
    <h3 class="detail-title">訂單明細</h3>
    <table class="bottom">
            <tr>
                <td class="num"></td>
                <td class="num">商品</td>
                <td class="num">價格</td>
                <td class="num">數量</td>
                <td class="num">小計</td>
            </tr>
        <tbody>
            <tr v-for="detail in info.list">
                <td class="num-detail"><img class="pd" :src="imgURL+detail.image" alt=""></td>
                <td class="num-detail">{{detail.name}}</td>
                <td class="num-detail">{{detail.price}}</td>
                <td class="num-detail">{{detail.quantity}}</td>
                <td class="num-detail">{{detail.price * detail.quantity}}</td>
            </tr>
            <tr>
                <td class="detail-bottom"></td>
                <td class="detail-bottom"></td>
                <td class="detail-bottom">合計:</td>
                <td class="detail-bottom"></td>
                <td v-if="order[0]" class="detail-bottom">{{order[0].total}}</td>
            </tr>
        </tbody>
    </table>
                </div>
                </transition>
            </div>
        </div>
    </div>
    `,
    mounted() {
        let account = sessionStorage.getItem("account")
        this.account = account

        fetch('../php/searchOrder.php',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: this.account, 
            })
        })
        .then(resp => resp.json())
        .then(resp => {
            resp.forEach((pd)=>{
                pd.list = JSON.parse(pd.list);
            });
            this.order = resp})
    },
})

Vue.component('sponsor', {
    data() {
        return {
            donor: [],
            account: "",
            isDisabled: true,
            revise: "修改",
            hide: true,
            classObj1:{
                "btn1": false
            },
            classObj2:{
                "btn1": true
            },
            classObj3:{
                "btn1": true
            },
            currentSponsor: -1,
            icon: '<i class="fa-solid fa-plus"></i>',
        }
    },
    methods: {
        changPlan(){
            if(this.isDisabled == true){
                this.isDisabled = false
                this.revise = "確認"
            }else if(this.isDisabled == false){
                this.isDisabled = true
                this.revise = "修改"
            }
        },
        
        cancel(){
            alert("確定取消贊助?")
            this.hide = false
        },

        planChange(val){
            if(val == 1){
                confirm("確認要修改為方案一?")
                this.classObj1.btn1 = false
                this.classObj2.btn1 = true
                this.classObj3.btn1 = true
                fetch('./php/updatePlan1.php',{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        account: this.account, 
                    })
                })
            }else if(val == 2){
                confirm("確認要修改為方案二?")
                this.classObj1.btn1 = true
                this.classObj2.btn1 = false
                this.classObj3.btn1 = true
                fetch('./php/updatePlan2.php',{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        account: this.account, 
                    })
                })
            }else if(val == 3){
                confirm("確認要修改為方案三?")
                this.classObj1.btn1 = true
                this.classObj2.btn1 = true
                this.classObj3.btn1 = false
                fetch('./php/updatePlan3.php',{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        account: this.account, 
                    })
                })
            }
        },
        show(i){
            if(this.isShow == false || this.currentSponsor != i){
                //這邊做判斷如果我的頁面是關閉 且 變數值不等於i值
                //那頁面開啟 且 變數值 = i
                this.isShow = true
                this.currentSponsor = i
                this.icon = '<i class="fa-solid fa-minus"></i>'
            }else if(this.isShow == true || this.currentSponsor != -1){
                //如果頁面是開啟 且 變數值不等於 變數值預設數字
                //頁面關閉 且 變數值恢復預設
                this.currentSponsor = -1
                this.isShow = false
                this.icon = '<i class="fa-solid fa-plus"></i>'
            }
            //以上因為show是綁定每一次的click 
        }
    },
    template: `
    <div class="donation_record">
    <h3>贊助紀錄</h3>
        <div v-if="donor[0]" v-for= "(info, i) in donor">
            <table class="sponsor">
                <tr v-if="i == 0">
                    <td class="num">編號</td>
                    <td class="num">時間</td>
                    <td class="num">方式</td>
                    <td class="num">金額</td>
                    <td class="num">狀態</td>
                    <td class="num"></td>
                </tr>
                <tbody>
                    <tr>
                        <td class="id-detail">OD{{info.id}}</td>
                        <td class="date-detail">{{info.date}}</td>
                        <td class="method-detail">{{info.method}}</td>
                        <td class="amount-detail">{{info.amount}}</td>
                        <td class="situation-detail">{{info.situation}}</td>
                        <td @click="show(i)" class="num-detail" v-html="icon"></td>    
                    </tr>
                </tbody>
            </table>
            <transition name="fade" mode="in-out">
                <div v-if="i == currentSponsor">
                    <h4>贊助專案：{{donor[i].fundName}}</h4>
                    <div class="button">
                        <button  @click="planChange(1)" class="btn0" :class="classObj1">方案一：每月NT$300</button>
                        <button  @click="planChange(2)" class="btn0" :class="classObj2">方案二：每月NT$500</button>
                        <button  @click="planChange(3)" class="btn0" :class="classObj3">方案三：每月NT$1000</button>
                    </div>
                    <div class="btn">
                        <button v-if="info.situation == '定期'" @click="cancel" class="btn-0">取消贊助</button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
    `,
    mounted() {
        let account = sessionStorage.getItem("account")
        this.account = account

        fetch('../php/searchDonation.php',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account: this.account, 
            })
        })
        .then(resp => resp.json())
        .then(resp => this.donor = resp);
    },
})

new Vue({
    el: '#memberCenterApp',
    data: {
        content: 'sponsor',
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