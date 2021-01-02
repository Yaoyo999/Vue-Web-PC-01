<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <!-- ref为获得表单的实例对象 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
        <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <!-- 蓝色按钮 -->
          <el-button type="primary" plain @click="login">登录</el-button>
          <!-- info灰色按钮 -->
          <el-button type="info" plain @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          // 必填项 提示信息 失去焦点是触发
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在6-15之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮,重置登录表单
    resetLoginForm () {
    //   onsole.log(this)
    // 调用内置方法拿到实例对象并重置
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async (valid) => {
        // valid 的值为true 或 false
        // console.log(valid)
        if (!valid) return
        // 返回6个属性data是我们想要的 将data中命名为res res.meta.status 从而进行判断
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message('登录失败!')
        this.$message.success('登录成功!')
        // 1.将登录成功之后的token,保存到客户端的sessionStorage中
        // 1.1 项目中出了登录之外的API接口，必须在登录之后才能访问
        // 1.2 token只能在当前网站打开期间生效，所以token保存在 sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)
        // 2.通过编程式导航转到后台主页，路由地址是/home
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  //横轴纵轴分别移动百分之五十
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    //限制盒子的大小
    box-sizing: border-box;
}
.btns {
    //变成弹性盒模型
    display: flex;
    //横轴向右对齐
    justify-content: flex-end;
}
</style>
