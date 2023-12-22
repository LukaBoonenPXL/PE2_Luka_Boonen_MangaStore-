<template>
  <footer class="footer">
      <div class="footer-content">
          <div class="footer-logo">
              <img src="@/assets/logo.png" alt="Company Logo">
          </div>
          <div class="footer-contact">
              <h3>Contact Us</h3>
              <p>Email: mangastore@gmail.com</p>
              <p>Phone: +32 232 23 23</p>
          </div>
          <div class="footer-social">
              <h3>Follow Us</h3>
              <a href="#"><img src="@/assets/facebook-icon.png" alt="Facebook"></a>
              <a href="#"><img src="@/assets/insta-icon.png" alt="insta"></a>
              <a href="#"><img src="@/assets/twitter-icon.png" alt="twitter"></a>
              
          </div>
      </div>
      <div class="footer-bottom">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
  </footer>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Roboto:ital,wght@0,400;1,100&display=swap');

.footer {
  background-color: #42b9e5;
  color: #fff;
  padding: 10px 0;
  margin-top: 50px;
  font-family: "roboto";
  flex-shrink: 0;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}

.footer-logo img {
  height: 80px;
  border-radius: 10%;
}

.footer-contact h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-contact p {
  font-size: 14px;
  margin: 0;
}

.footer-social h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-social a {
  display: inline-block;
  margin-right: 10px;
}

.footer-social img {
  width: 30px;
  height: 30px;
}

.footer-bottom {
  text-align: center;
  background-color: #328aaa;
  padding: 10px 0;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
  font-family: "roboto";
}


</style>