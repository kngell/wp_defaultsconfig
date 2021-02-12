  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="<?= PROOT . 'backend' ?>"
          class="brand-link text-sm">
          <img src="../../../../assets/img/logo.png" alt="AdminLTE Logo"
              class="brand-image img-circle elevation-3 rounded" style="opacity: .8">
          <span class="brand-text font-weight-light">K'nGELL Logistique</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
          <!-- Sidebar user panel (optional) -->
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                  <img src="<?= UsersManager::currentUser()->profileImage ?? IMG . 'users' . US . 'avatar.png' ?>"
                      class="img-circle elevation-2" alt="User Image">
              </div>
              <div class="info">
                  <a href="#" class="d-block"><?= UsersManager::currentUser()->firstName . '&nbsp;' . UsersManager::currentUser()->lastName ?></a>
              </div>
          </div>

          <!-- SidebarSearch Form -->
          <div class="form-inline">
              <div class="input-group" data-widget="sidebar-search">
                  <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                      aria-label="Search">
                  <div class="input-group-append">
                      <button class="btn btn-sidebar">
                          <i class="fas fa-search fa-fw"></i>
                      </button>
                  </div>
              </div>
          </div>

          <!-- Sidebar Menu -->
          <nav class="mt-2">
              <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                  data-accordion="false">
                  <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                  <li class="nav-item ">
                      <a href="<?= PROOT . 'backend' ?>"
                          class="nav-link">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                              Dashboard
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'index' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Statistics</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                              Product Management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'allcategories' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Categories</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="#" class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Products</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item">
                      <a href="<?= PROOT . 'backend' . US . 'order' ?>"
                          class="nav-link">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                              Order Management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'payment' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Payments</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'xxxxx' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>xxxxxxx</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item ">
                      <a href="<?= PROOT . 'backend' . US . 'users' ?>"
                          class="nav-link">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                              Users Management
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'allUsers' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>All Users</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'restoreUsers' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Restore Users</p>
                              </a>
                          </li>
                      </ul>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-th"></i>
                          <p>
                              Notifications
                              <span class="right badge badge-danger">New</span>
                          </p>
                      </a>
                  </li>
                  <li class="nav-item ">
                      <a href="<?= PROOT . 'backend' . US . 'users' ?>"
                          class="nav-link">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                              Manage front pages
                              <i class="right fas fa-angle-left"></i>
                          </p>
                      </a>
                      <ul class="nav nav-treeview">
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'contact' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Contact</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'realisations' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Réalisations</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'programme' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Programme formation</p>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a href="<?= PROOT . 'backend' . US . 'sessions' ?>"
                                  class="nav-link">
                                  <i class="far fa-circle nav-icon"></i>
                                  <p>Session formation</p>
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