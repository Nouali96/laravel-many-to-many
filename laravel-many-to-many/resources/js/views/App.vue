<template>
  <div class="container_title">
    <div class="box_title">
        <h1>Work in progress</h1>
        <div class="box_button">        
            <a href="http://127.0.0.1:8000/login"><button>Login</button></a>
        </div>
    </div>
  </div>  
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss" scoped>

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  .container_title{
    display: flex;
    height: 500px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  
  .box_button{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    button{
      padding: 10px 15px;
      border-radius: 10px;
    }
    a, h3{
      text-align: center;
    }
  }
</style>