  <!-- Start footer -->
  <footer id="footer" class="bg-dark text-white py-5">
      <div class="container">
          <div class="row">
              <div class="col-lg-3 col-12">
                  <h4 class="font-rubik font-size-20">Mobile Shopee</h4>
                  <p class="font-size-14 font-rale text-white-50">Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit.
                      Quaerat ipsum quisquam libero?
                  </p>
              </div>
              <div class="col-lg-4 col-12">
                  <h4 class="font-rubik font-size-20">Newsletter</h4>
                  <form class="form-row">
                      <div class="col">
                          <input type="text" class="form-control" placeholder="Email *">
                      </div>
                      <div class="col">
                          <button type="submit" class="btn btn-primary mb-2">Subscribe</button>
                      </div>
                  </form>
              </div>
              <div class="col-lg-2 col-12 text-right">
                  <h4 class="font-rubik font-size-20">Information</h4>
                  <div class="d-flex flex-column flex-wrap">
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">About Us</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Delevery informations</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Privacy policy</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Terms & conditions</a>
                  </div>
              </div>
              <div class="col-lg-3 col-12 text-right">
                  <h4 class="font-rubik font-size-20">Account</h4>
                  <div class="d-flex flex-column flex-wrap">
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">My Account</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Order history</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Whish List</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Newsletter</a>
                  </div>
              </div>
          </div>
      </div>

  </footer>
  <!-- End footer -->
  <!-- CopyRights -->
  <div class="conpyright text-center bg-dark text-white py-2">
      <p class="font-rale font-size-14">&copy; Copyrights 2021 Design by <a href="#" class="color-second"> Kngell</a>
      </p>
  </div>

  <!-- Librairies -->
  <script type="text/javascript"
      src="<?= $this->jsHomelib ?? '' ?>"></script>
  <!-- Common vendor -->
  <script type="text/javascript"
      src="<?= $this->jscommonVendor ?? '' ?>"></script>
  <!-- Custom Common Modules  -->
  <script type="text/javascript"
      src="<?= $this->jscustomComnonModules ?? '' ?>">
  </script>
  <!-- Plugins -->
  <script type="text/javascript"
      src="<?= $this->jsHomePlugins ?? '' ?>"></script>
  <!-- Mainjs -->
  <script type="text/javascript"
      src="<?= $this->jsHomeMain ?? '' ?>"></script>
  <?= $this->content('footer'); ?>
  </body>

  </html>