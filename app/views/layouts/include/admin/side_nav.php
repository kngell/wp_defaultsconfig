  <?php $currentPage = H::currentPage();
?>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary layout-navbar-fixed layout-footer-fixed">
      <!-- Brand Logo -->
      <a href="<?=PROOT?>admin" class="brand-link navbar-navy">
          <img src="/kngell/public/assets/img/logo.png" alt="logo" class="brand-image img-circle elevation-3"
              style="opacity: .8">
          <span class="brand-text font-weight-light">Logistique</span>
      </a>
      <!-- Sidebar -->
      <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                  <img src="<?=!empty($this->user->profileImage) ? $this->user->profileImage : IMG . 'profileIMG/avatar.png'?>"
                      class="img-circle elevation-2" alt="User Image">
              </div>
              <div class="info">
                  <a href="#" class="d-block"><?=$this->user->firstName . '&nbsp;&nbsp;' . $this->user->lastName?></a>
              </div>
          </div>

          <!-- Sidebar Menu -->
          <nav class="mt-2">
              <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu"
                  data-accordion="true">
                  <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                              Dashboard
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . DS . 'index'?>" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Statistics</p>
                              </a>
                          </li>
                      </ul>
                  </li>

                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-users"></i>
                          <p>
                              Users Management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?=PROOT?>adminnav/allusers" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>All active users</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Acheteurs</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Vendeurs</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Deleted Users</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Advance users search</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                              Products Management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . US . 'allProducts'?>" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Manage items</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>All Categories</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon far fa-newspaper"></i>
                          <p>
                              News Management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . DS . 'allposts'?>" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>All Posts</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . DS . 'allCategories'?>" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>All Categories</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-edit"></i>
                          <p>
                              Enterprise Management
                              <i class="fas fa-angle-left right"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?=PROOT . 'assoc' . DS . 'allassoc'?>" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>All Compagnies</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/forms/advanced.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Advanced Elements</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/forms/editors.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Editors</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/forms/validation.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Validation</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-table"></i>
                          <p>
                              Course Management
                              <i class="fas fa-angle-left right"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . DS . 'pages' . DS . 'programme_formation'?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Programmes - formation</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . DS . 'pages' . DS . 'sessions_formations'?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Sessions - formation</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?=PROOT?>adminnav/editor" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Active courses</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/tables/data.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Pending courses</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/tables/jsgrid.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Unpublished Courses</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/tables/jsgrid.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Advance course search</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-gifts"></i>
                          <p>
                              Payment management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Payer les vendeurs</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Complete Payment</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Advance Payment Searching</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-gifts"></i>
                          <p>
                              Home Management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Accueil</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>A propos</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Prestations</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . DS . 'pages' . DS . 'realisations'?>" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Réalisations</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?=PROOT . 'adminnav' . DS . 'pages' . DS . 'recrutement'?>" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Recrutement</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>contacts</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item">
                      <a href="pages/widgets.html" class="nav-link">
                          <i class="nav-icon fas fa-flag-checkered"></i>
                          <p class="not_alert">
                              Notification
                          </p>
                      </a>
                  </li>
                  <li class="nav-header">Utilitaires</li>
                  <li class="nav-item">
                      <a href="pages/calendar.html" class="nav-link">
                          <i class="nav-icon far fa-calendar-alt"></i>
                          <p>
                              Calendar
                              <span class="badge badge-info right">2</span>
                          </p>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a href="pages/gallery.html" class="nav-link">
                          <i class="nav-icon far fa-image"></i>
                          <p>
                              Gallery
                          </p>
                      </a>
                  </li>
                  <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                          <i class="nav-icon far fa-envelope"></i>
                          <p>
                              Mailbox
                              <i class="fas fa-angle-left right"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="pages/mailbox/mailbox.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Inbox</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/mailbox/compose.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Compose</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="pages/mailbox/read-mail.html" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Read</p>
                              </a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </nav>
          <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
  </aside>