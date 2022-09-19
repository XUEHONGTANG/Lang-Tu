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
    emailWarningText: "",
    passwordWarningText: "",
    loginForm: {
      account: null,
      password: null,
    },
    loginErrors: {
      account: false,
      password: false,
    },
    registerForm: {
      name: null,
      email: null,
      password: null,
      check: null,
      gender: null,
      birth: null,
    },
    registerErrors: {
      name: false,
      email: false,
      password: false,
      check: false,
      gender: false,
      birth: false,
      agree: false
    },
  },
  methods: {
    userLogin() {
      if (!this.loginForm.account && !this.loginForm.password) {
        this.loginErrors.account = true;
        this.loginErrors.password = true;
        return false;
      } else if (!this.loginForm.account) {
        this.loginErrors.account = true;
        this.loginErrors.password = false;
        return false;
      } else if (!this.loginForm.password) {
        this.loginErrors.account = false;
        this.loginErrors.password = true;
        return false;
      }

      alert("登入成功");
      window.location.href = "./member_detail.html";
    },
    userRegister() {
      // const self = this;

      for (let key in this.registerErrors) {
        this.registerErrors[key] = false;
      }

      (() => {
        if (!this.registerForm.name) {
          this.registerErrors.name = true;
        }

        if (!this.registerForm.email || !/^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i.test(this.registerForm.email)) {
          this.registerErrors.email = true;
        }

        if (!this.registerForm.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9_\W]).+$/.test(this.registerForm.password)) {
          this.registerErrors.password = true;
        }

        if (!this.registerForm.check || (this.registerForm.password != this.registerForm.check)) {
          this.registerErrors.check = true;
        }

        if (!this.registerForm.gender) {
          this.registerErrors.gender = true;
        }

        if (!this.registerForm.birth) {
          this.registerErrors.birth = true;
        }

        if (!this.registerForm.agree) {
          this.registerErrors.agree = true;
        }
      })();

      for (let key in this.registerErrors) {
        if (this.registerErrors[key] === true) {
          alert("註冊失敗");
          return false;
        }
      }

      alert("註冊成功");
    },
  },
  computed: {
    emailWarning() {
      return this.emailWarningText;
      // return this.registerForm.email
    },
    passwordWarning() {
      return this.passwordWarningText;
      // return this.registerForm.email
    },
  },
  watch: {
    registerForm: {
      handler(newVal) {

        // mail
        if (newVal.email) {
          let pattern = /^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i;
          if (newVal.email && !pattern.test(newVal.email)) {
            this.emailWarningText = "請輸入正確的e-mail格式";
          } else if (newVal.email && pattern.test(newVal.email)) {
            this.emailWarningText = "";
          }
        }

        // password
        if (newVal.password) {
          // (() => {
          let patternLower = /^(?=.*[a-z]).+$/;
          let patternUpper = /^(?=.*[A-Z]).+$/;
          let pattern = /^(?=.*[0-9_\W]).+$/;

          if (newVal.password && newVal.password.length < 8) {
            this.passwordWarningText = "密碼需8個字元以上";
          } else if (newVal.password && !patternLower.test(newVal.password)) {
            this.passwordWarningText = "密碼必須含有小寫英文";
          } else if (newVal.password && !patternUpper.test(newVal.password)) {
            this.passwordWarningText = "密碼必須含有大寫英文";
          } else if (newVal.password && !pattern.test(newVal.password)) {
            this.passwordWarningText = "密碼必須含有1個數字或1個特殊符號";
          } else {
            this.passwordWarningText = "";
          }
        }
      },
      deep: true,
      // immediate: true,
    },
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
