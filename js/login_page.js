// const router = new VueRouter({
//   mode: 'history',    // hash by default
//   routes: [
//       {path: '/member_detail.html'},
//   ],
// })

const alertArea = {
  props:['content'],
  template: `
  <transition>
    <div class="alertText"
    >{{content}}</div>
  </transition>
  `,
}

new Vue({
  // router,
  el: "#loginPageApp",
  components: {
    alertArea
  },
  data: {
    selected: 1,
    alertContent: '',
    alert:null,
    warningText: {
      email: '',
      password: '',
      phone: ''
    },
    // emailWarningText: "",
    // passwordWarningText: "",
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
      phone: null,
      gender: null,
      birth: null,
    },
    registerErrors: {
      name: false,
      email: false,
      password: false,
      check: false,
      phone: false,
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

      fetch('./php/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.loginForm.account,
          password: this.loginForm.password,
        })
      })
      .then(resp => resp.json())
            .then(body => {
                if (body.successful){
                    alert("登入成功");
                    sessionStorage.setItem("account", this.loginForm.account)
                    let pid = sessionStorage.getItem('pid');
                    let id = sessionStorage.getItem('id');
                    if( sessionStorage.pid || sessionStorage.id){
                      history.back()
                    } else {
                      window.location.href = './member_detail.html';
                    }
                }else{
                  // alert("登入失敗");
                  this.alertContent = '登入失敗'
                  this.alert = true;
                    setTimeout(() => { return this.alert = false,this.alertContent = '' }, 3000);
                }
            });
      // alert("登入成功");
      // window.location.href = "./member_detail.html";
    },
    userRegister() {
      
      for (let key in this.registerErrors) {
        this.registerErrors[key] = false;
      }

      (() => {
        if (!this.registerForm.name) {
          this.registerErrors.name = true;
        }

        if (!this.registerForm.email || !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(this.registerForm.email)) {
          this.registerErrors.email = true;
        }

        if (!this.registerForm.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9_\W]).+$/.test(this.registerForm.password)) {
          this.registerErrors.password = true;
        }

        if (!this.registerForm.check || (this.registerForm.password != this.registerForm.check)) {
          this.registerErrors.check = true;
        }

        if (!this.registerForm.phone || !/09\d{2}(\d{6}|-\d{3}-\d{3})/.test(this.registerForm.phone)) {
          this.registerErrors.phone = true;
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
          // alert("註冊失敗");
          this.alertContent = '註冊失敗'
          this.alert = true;
            setTimeout(() => { return this.alert = false,this.alertContent = '' }, 3000);
          return false;
        }
      }

      (() => {
        
        fetch('./php/login_page.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: this.registerForm.name,
            email: this.registerForm.email,
            password: this.registerForm.password,
            phone: this.registerForm.phone,
            birth: this.registerForm.birth,
            gender: this.registerForm.gender,
          })
        })
        .then(resp => resp.json())
        .then(body => {

            if (body.successful){
              
              this.alertContent = '註冊成功';
              this.alert = true;
              setTimeout(() => { return this.alert = false, this.alertContent = '' }, 3000);
              
              this.selected = 1;
            } else {
              this.alertContent = '註冊失敗'
              this.alert = true;
                setTimeout(() => { return this.alert = false,this.alertContent = '' }, 3000);
              return false;

          }
          
        });
        
      })();


    },
  },
  computed: {
    emailWarning() {
      return this.warningText.email;
      // return this.registerForm.email
    },
    passwordWarning() {
      return this.warningText.password;
      // return this.registerForm.email
    },
  },
  watch: {
    registerForm: {
      handler(newVal) {

        // mail
        if (newVal.email) {
          let pattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
          if (newVal.email && !pattern.test(newVal.email)) {
            this.warningText.email = "請輸入正確的e-mail格式 ex: example@gmail.com";
          } else if (newVal.email && pattern.test(newVal.email)) {
            this.warningText.email = "";
          }
        }
        
        // password
        if (newVal.password) {
          // (() => {
          let patternLower = /^(?=.*[a-z]).+$/;
          let patternUpper = /^(?=.*[A-Z]).+$/;
          let pattern = /^(?=.*[0-9_\W]).+$/;

          if (newVal.password && newVal.password.length < 8) {
            this.warningText.password = "密碼需8個字元以上";
          } else if (newVal.password && !patternLower.test(newVal.password)) {
            this.warningText.password = "密碼必須含有小寫英文";
          } else if (newVal.password && !patternUpper.test(newVal.password)) {
            this.warningText.password = "密碼必須含有大寫英文";
          } else if (newVal.password && !pattern.test(newVal.password)) {
            this.warningText.password = "密碼必須含有1個數字或1個特殊符號";
          } else {
            this.warningText.password = "";
          }
        }

        // phone
        if (newVal.phone) {
          let pattern = /09\d{2}(\d{6}|-\d{3}-\d{3})/;
          if (newVal.phone && !pattern.test(newVal.phone)) {
            this.warningText.phone = "請輸入十碼手機號碼  ex: 09xx-xxx-xxx or 09xxxxxxxx";
          } else if (newVal.phone && pattern.test(newVal.phone)) {
            this.warningText.phone = "";
          }
        }
      
      },
      deep: true,
      // immediate: true,
    },
  },
});
