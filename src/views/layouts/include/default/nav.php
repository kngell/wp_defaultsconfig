<!-- Start Header -->
<header id="header" class="fixed-top">
  <div class="strip d-flex justify-content-between px-4 py-1 bg-light">
    <p class="font-rale font-size-12 text-black-50 m-0">
      Kngell, La Turbine. 32 boulevard du port. CS 20001. 95015 Cergy-Pontoise cedex.
    </p>
    <div class="font-rale font-size-14 left-side">
      <?=$this->search_box?>
      <div class="connect">
        <?php if (!isset(AuthManager::$currentLoggedInUser)) : ?>
        <a class="px-3 border-right border-left text-dark connexion text-decoration-none" data-bs-toggle="modal"
          data-bs-target="#login-box"
          href="<?= PROOT ?>auth/ajaxLogin" id="login_btn">
          <span class="icon login"></span>&nbsp;&nbsp;Login</a>
        <?php else : ?>
        <a class="dropdown-toggle px-3 border-right border-left text-dark connexion text-decoration-none"
          id="navbarDropdownMenuLink" data-bs-toggle="dropdown" role="button">
          <span class="icon login"></span>&nbsp;&nbsp;<?= 'Bonjour&nbsp;' . AuthManager::currentUser()->firstName; ?>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <?php $drop = GrantAccess::getMenu('menu_acl')['log_reg_menu']?>
          <?php
        foreach ($drop as $k => $v) :
            $active = ($v == H::currentPage()) ? 'active' : ''; ?>
          <?php if ($k == 'separator') : ?>
          <li role="separator" class="dropdown-divider"></li>
          <?php else : ?>
          <li class="dropdown-item nav-item <?= $active ?>">
            <a class="nav-link"
              href="<?= ($k != 'Logout') ? $v : 'javascript:void(0)' ?>">
              <?= $k ?>
            </a>
          </li>
          <?php endif; ?>
          <?php endforeach; ?>
        </ul>
        <?php endif; ?>
        <a href="#" class="px-3 border-right text-dark text-decoration-none">Whishlist(0)</a>
      </div>
      <form action="#" class="font-size-14 font-rale">
        <a href="<?= PROOT ?>home/cart"
          class="py-2 rounded-pill color-primary-bg">
          <span class="font-size-16 px-2 text-white"><i class="fal fa-shopping-cart"></i></span>
          <span class="px-3 py-2 rounded-pill text-dark bg-light cart_nb_elt"><?=$this->user_cart && is_array($this->user_cart[0]) ? count(array_filter($this->user_cart[0], function ($item) {return $item->c_content == 'cart';})) : 0?></span>
        </a>
        <a href="#"></a>
      </form>
    </div>
  </div>
  <!-- Primary navigation -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="<?= PROOT ?>home/index"><img
          src="../../../../assets/img/logo1.png" alt="Logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-menu"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="bar"><i class="far fa-bars"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="main-menu">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page"
              href="<?=PROOT . 'home'?>">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              href="<?=PROOT . 'home' . US . 'promotions'?>">Promo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              href="<?=PROOT . 'home' . US . 'boutique'?>">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>

        </ul>

      </div>
    </div>
  </nav>
  <!-- End Primary navigation -->
</header>
<!-- End Header -->