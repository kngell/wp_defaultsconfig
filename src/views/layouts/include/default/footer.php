  <!-- Start footer -->
  <footer id="footer" class="bg-dark text-white pt-5 pb-2">
      <div class="container w-75">
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
              <div class="col-lg-2 col-12 text-end">
                  <h4 class="font-rubik font-size-20">Information</h4>
                  <div class="d-flex flex-column flex-wrap">
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">About Us</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Delevery informations</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Privacy policy</a>
                      <a href="#" class="font-rale font-size-14 text-white-50 pb-1">Terms & conditions</a>
                  </div>
              </div>
              <div class="col-lg-3 col-12 text-end">
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
      <!-- CopyRights -->
      <div class="conpyright text-center bg-dark text-white py-2">
          <p class="font-rale font-size-14">&copy; Copyrights 2021 Design by <a href="#" class="color-second">
                  Kngell</a>
          </p>
      </div>
  </footer>
  <!-- End footer -->


  <!-- Librairies -->
  <script type="text/javascript"
      src="<?= $this->asset('js/librairies/frontlib', 'js') ?? '' ?>">
  </script>
  <!-- Common vendor -->
  <script type="text/javascript"
      src="<?= $this->asset('commons/frontend/commonVendor', 'js') ?? '' ?>">
  </script>
  <!-- Custom Common Modules  -->
  <script type="text/javascript"
      src="<?= $this->asset('commons/frontend/commonCustomModules', 'js') ?? '' ?>">
  </script>
  <!-- Plugins -->
  <script type="text/javascript"
      src="<?= $this->asset('js/plugins/homeplugins', 'js') ?? '' ?>">
  </script>
  <!-- Mainjs -->
  <script type="text/javascript"
      src="<?= $this->asset('js/main/frontend/main', 'js') ?? '' ?>">
  </script>
  <?= $this->content('footer'); ?>
  </body>

  </html>