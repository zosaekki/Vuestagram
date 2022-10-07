<template>
  <header id="header">
    <figure id="logo">
      <img class="logo-img" src="../assets/instagram_logo.png" alt="instagram_logo">
    </figure>
    <nav id="nav">
      <i class="fa-regular fa-square-plus fa-2x"></i>
      <i class="fa-regular fa-heart fa-2x"></i>
      <i class="fa-solid fa-location-arrow fa-2x"></i>
    </nav>
  </header>
  <main>
    <section id="section">
      <div class="post">
        <div class="post-header">
          <div class="profile">
            <img src="../assets/blank-profile.png" alt="profile_img" class="writer-profile-img">
            <span class="profile-name">user id 지역이름</span>
          </div>
        </div>
        <div class="post-body">
          <div class="post-content">
            <img src="../assets/post_img.jpg" alt="post_img" class="post-img">
          </div>
          <div class="icon">
            <i class="fa-regular fa-heart fa-2x"></i>
            <i class="fa-regular fa-comment fa-2x"></i>
            <i class="fa-solid fa-location-arrow fa-2x"></i>
            <i class="fa-regular fa-bookmark fa-2x"></i>
          </div>
          <div class="post-content">
            <p>user님 외 ??명이 좋아합니다</p>
            <p><strong>글쓴이아이디</strong> 댓글 ~~!~!~!#~!</p>
            <small>댓글 ?개 모두 보기</small>
            <p class="content-box">
              <img src="../assets/blank-profile.png" alt="로그인한사람 이미지" class="login-user-img">
              <input type="text" placeholder="댓글 달기...">
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div class="post">
    <div class="post-body"></div>
    <div class="post-content">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.logo-img {
  width: 120px;
  float: left;
  margin-left: 10px;
}

#nav {
  float: right;
  margin-top: 13px;
}

#nav i {
  margin-right: 15px;
}

#section {
  clear: both;
}

.post {
  clear: both;
}

.profile {
  float: left;
}

.writer-profile-img {
  width: 35px;
  border-radius: 50%;
  margin: 0 10px 0 10px;
  clear: both;
}

.post-body {
  clear: both;
}

.post-img {
  width: 100%;
  height: 450px;
  margin-top: 10px;
}

.icon i {
  float: left;
  margin: 10px 0 0 15px;
}

.icon i:nth-child(4) {
  float: right;
  margin-right: 15px;
}

.post-content {
  clear: both;
}

.login-user-img {
  width: 30px;
  border-radius: 50%;
}

.content-box input {
  border: none;
}

.content-box input:focus {
  border: none;
  outline: none;
}
/*
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}

.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}

.post-header {
  height: 30px;
  padding: 10px;
}

.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}

.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} */
</style>