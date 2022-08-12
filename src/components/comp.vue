<template >
     <main>
        <header class="comp">投诉页面</header>
        <form>
          <textarea id="tox" cols="30" rows="10" placeholder="请输入文字..."></textarea>
          <center>
            <input type="submit" value="提交" class="btn">
            <input type="reset" value="重置" class="btn">
          </center>
        </form>
     </main>
</template>
<style>
.comp {
    width: 100%;
    height: 12vw;
    background-color: #0097FF;
    color: #fff;
    font-size: 4.8vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}
form {
  position: relative;
  width: 100%;
}
form #tox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 16px;
    margin-top: 25vh;
    padding-top: 12px;
    padding-left: 12px;   
    width: 85%;
    height: 188px;    
    border: 2px solid gray;
    border-radius: 8px;   
    overflow: scroll;
}
form .btn {
    position: relative;
    width: 100px;
    height: 34px;
    bottom: -400px;
    margin: 0 25px;
    background-color: #0097FF;
    color: #fff;
    font-size: 16px;
    border: none;
}
</style>