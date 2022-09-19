// const router = new VueRouter({
//   mode: 'history',    // hash by default
//   routes: [
//       {path: '/member_detail.html'},
//   ],
// })

new Vue({
  // router,
  el: "#loginPageApp",
  data: {
    selected: 2,
    emailWarningContent: '',
    loginForm: {
      account: null,
      password: null
    },
    loginErrors: {
      account: false,
      password: false
    },
    registerForm: {
      name: null,
      email: null,
      password: null,
      check: null,
      gender: null,
      birth: null   
    },
    registerErrors: {
      name: false,
      email: false,
      password: false,
      check: false,
      gender: false,
      birth: false
    }
  },
  methods: {
    userLogin() {
      if (!this.loginForm.account && !this.loginForm.password) {
        this.loginErrors.account = true;
        this.loginErrors.password = true;
        return false;
      }else if (!this.loginForm.account) {
        this.loginErrors.account = true;
        this.loginErrors.password = false;
        return false;
      } else if (!this.loginForm.password) {
        this.loginErrors.account = false;
        this.loginErrors.password = true;
        return false;
      }

      alert('登入成功');
      window.location.href = "./member_detail.html";
    },
    userRegister() {
      const self = this;

      for (let key in this.registerErrors) {
        this.registerErrors[key] = false;
      }

      (function(){
        if (!self.registerForm.name) {
          this.registerErrors.name = true;
        }

        if (!self.registerForm.email) {
          this.registerErrors.email = true;
        }

        if (!self.registerForm.password) {
          this.registerErrors.password= true;
        }

        if (!self.registerForm.check) {
          this.registerErrors.check= true;
        }

        if (!self.registerForm.gender) {
          this.registerErrors.gender= true;
        }

        if (!self.registerForm.birth) {
          this.registerErrors.birth= true;
        }

        

      })();
        

   
      for (let key in this.registerErrors) {
        if (this.registerErrors[key] === true) {
          alert('註冊失敗');
          return false;
        }
        
      }

      alert('註冊成功');
    },
    // emailCheck() {
    //   this.emailWarningContent = '請輸入'
    //   console.log(this.emailWarningContent);
    // }
    // emailWarning() {
    //   // this.emailWarningContent = text
    //   this.emailWarningContent = '請輸入';
    //   // return this.emailWarningContent  
    // }

  },
  computed: {
    // emailWarning: { 
    //   get() {
    //     return emailWarningContent
    //   },
    //   set(){
    //     return emailWarningContent
    //   }
    // }

    // emailWarning(){
    //   // this.emailWarning = true;
    //   // console.log(1);
    //   // return this.emailWarningContent;
    //   // emailWarningContent = '請輸入';
   
    //   return emailWarningContent
    // }
  },
  watch: {
    registerForm: {
      
      handler: (newVal) => { 
        // console.log(newVal.email);


        // let emailWarn = document.querySelector('.registerEmailLabel').dataset.content
        // console.log(emailWarn );
        let pattern = /^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i;
        if (!pattern.test(newVal.email)) {
          // return emailWarningContent = 'xx';
          // console.log(this.emailWarningContent);
          // emailWarn = '請輸入';
          // console.log(emailWarn);
          // emailWarning();
          emailWarningContent = '請輸入正確e-mail';
          console.log(emailWarningContent);
          // emailWarning();
        } else {
          emailWarningContent = '';
          console.log(emailWarningContent);
          // emailWarning();
        }
      },
      deep: true,
      immediate: true,

      // email: {
      //   handler: (newVal) => {
      //     // if (newVal) {
      //     //   emailWarningContent = '請輸入';
      //     //   return emailWarningContent
      //     // }
      //     // let emailWarn = document.getAttribute('data-content')
      //     // console.log(emailWarn);

      //     // console.log(registerForm);
      //     // console.log(registerForm.email);

      //     // let pattern = /^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i;
      //     // if (!pattern.test(newVal)) {
      //     //   // emailWarningContent = '';
      //     //   console.log(registerForm.email);
      //     //   console.log(1);
      //     //   // emailWarningContent = 'data-content="請輸入"';
      //     //   // console.log(emailWarningContent);
      //     //   // return emailWarningContent
      //     //   // console.log(newval);
      //     //   // return emailWarningContent
      //     //   // emailWarning();
      //     //   // console.log('驗證成功');
      //     //   // console.log(emailWarningContent);
      //     // }
      //     // this.emailWarningContent = '請輸入';
       
      //     // emailWarningContent = '請輸入';
      //     // console.log(emailWarningContent);
      //   },
      //   deep: true,
      //   immediate: true
      // }
      }
  },
});

/*
// 舊 component 寫法

const loginContent ={
    template:`
    <section>
    <span>
      <button>使用 LINE 登入</button>
      <button>使用 FB 登入</button>
    </span>
      <hr class="mainLine">
      <div>
        <h3>請輸入您的登入資訊</h3>

        <label class="loginAccountLabel" name="loginAccount">
          <input class="input-textLabel" type="text" placeholder="請輸入您的註冊e-mail" name="loginAccount">
      </label>

        <label class="loginPasswordLabel" name="loginPassword">
          <input class="input-textLabel" type="text" placeholder="請輸入您的密碼" name="loginPassword">
      </label>

    </div>
    <div>
    <a href="./member_detail.html" class="btn-0">登入會員</a>
      <button class="btn-1">忘記密碼</button>
    </div>
  </section>
    `
};
  
const registerContent ={
    template:`
    <section>
          <span>
            <button>使用 LINE 註冊</button>
            <button>使用 FB 註冊</button>
          </span>
            <hr class="mainLine">
            <div>
              <h3>請輸入註冊會員資訊</h3>


              <label class="
              registerNameLabel" name="
              registerName">
                <input class="input-textLabel" type="text" placeholder="請輸入您的姓名" name="
              registerName">
              </label>

              <label class="
              registerEmailLabel" name="
              registerEmail">
                <input class="input-textLabel" type="text" placeholder="請輸入您的E-MAIL註冊帳號" name="
              registerEmail">
              </label>

              <label class="
              registerPasswordLabel" name="
              registerPassword">
                <input class="input-textLabel" type="text" placeholder="請輸入您的密碼(至少8個字元)" name="
              registerPassword">
              </label>

              <label class="
              checkPasswordLabel" name="
              checkPassword">
                <input class="input-textLabel" type="text" placeholder="請再次輸入您的密碼" name="
              checkPassword">
              </label>

              <span>
                <select name="gender">
                  <option hidden>性別</option>
                  <option value="men">男</option>
                  <option value="women">女</option>
                </select>
                <input type="date">
              </span>

            </div>
            <hr class="mainLine">
            
            <div>
              <div>
                <input type="checkbox">我同意 網站服務條款及隱私政策
              </div>
              <button class="btn-0">加入浪途之家吧!</button>
            </div>

        </section>
    `
  };


new Vue({
    el: '#loginPageApp',
    data: {
        content:'loginContent',
        selected: 1
    },
    components:{
        'loginContent': loginContent,
        'registerContent': registerContent
  }
})
*/
