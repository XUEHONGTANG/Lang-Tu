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
                fetch('../php/updateMember.php', {
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
        <div class="member_detail">
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

            fetch('../php/searchMember.php',{
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
        }
    },
    template: `
        <div class="member_reservation">
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
                            <td><button class="btn-0">取消</button></td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
    `,
    mounted() {
        let account = sessionStorage.getItem("account")
        this.account = account

        fetch('../php/searchAdoption.php',{
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
        }
    },
    methods: {
        show(){
            if(this.isShow == false){
                this.isShow = true
            }else if(this.isShow == true){
                this.isShow = false
            }
        }
    },
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
                        <tr v-for='(info, i) in order'>
                            <td>OD00{{info.id}}</td>
                            <td>{{info.date}}</td>
                            <td>{{info.payment}}</td>
                            <td>{{info.total}}</td>
                            <td>{{info.situation}}</td>
                            <td @click="show"><i class="fa-solid fa-plus"></i></td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="isShow">
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
                        <tr v-for='(info, i) in order'>
                            <td><img class="pd" :src="imgURL+info.list[i].image" alt=""></td>
                            <td>{{info.list[i].name}}</td>
                            <td>{{info.list[i].price}}</td>
                            <td>{{info.list[i].quantity}}</td>
                            <td>{{info.list[i].price * info.list[i].quantity}}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>合計:</td>
                            <td></td>
                            <td>{{order[0].total}}</td>
                        </tr>
                    </tfoot>
                </table>
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
        }
    },
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
                    <tr v-for= "info in donor">
                        <td>OD00{{info.id}}</td>
                        <td>{{info.date}}</td>
                        <td>{{info.method}}</td>
                        <td>NT $ {{info.amount}}</td>
                        <td>{{info.situation}}</td>
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