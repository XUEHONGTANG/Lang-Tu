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