<?php
$menu = GrantAccess::getMenu('menu_acl');
$currentPage = (isset($this->page) && $this->page == "Prestations") ? "/kngell/home/prestations" :  H::currentPage();
$page = '';
$drop = [];
?>
<nav class="navbar navbar-expand-lg fixed-top mynavbar">
    <div class="container-fluid">
        <div class="row myrow">
            <div class="col-md-2 logo-wrapper">
                <div class="logo pl-4 pb-4"> <a class="navbar-brand my-0 py-0" href="<?= PROOT ?>home/index"> <img src="/kngell/public/assets/img/logo.png" class="img-fluid" alt="logo" title="Logo" />
                        <h4 class="my-0 pt-2"><span class="element"></span></h4>
                    </a>
                </div>
            </div>
            <div class="hamburger d-md-none">
                <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12 collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav menu-general mx-auto">
                    <?php
                    foreach ($menu as $key => $val) :
                        $active = '';
                    ?>
                        <?php
                        if (is_array($val)) :
                            foreach ($val as $k => $v) {
                                $drop[$k] = $v;
                            }
                        ?>
                        <?php
                        else :
                            $active = ($val == $currentPage) ? 'active' : '';
                        ?>
                            <li class="nav-item <?= $active ?>"> <a class="nav-link" href="<?= $val ?>">
                                    <?= $key ?>
                                </a> </li>
                            <?php $page = !empty($active) ? $key : $page; ?>
                        <?php endif; ?>
                    <?php endforeach; ?>

                </ul>
            </div>

            <div class="connect col-md-2">
                <?php if (!isset(UsersManager::currentUser()->firstName)) : ?>
                    <ul class="navbar">
                        <li class="connexion">
                            <a class="nav-link dropdown-toggle" data-toggle="modal" data-target="#login-box" href="<?= PROOT ?>users/ajaxLogin">
                                <span class="icon login"></span>&nbsp;&nbsp;Login</a>
                        </li>
                    </ul>
                <?php else : ?>
                    <ul class="navbar">
                        <li class="nav-item dropdown menu-user ml-auto connexion">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" role="button">
                                <span class="icon login"></span>&nbsp;&nbsp;<?= 'Bonjour&nbsp;' . UsersManager::currentUser()->lastName; ?>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <?php foreach ($drop as $k => $v) :
                                    $active = ($v == $currentPage) ? 'active' : ''; ?>
                                    <?php if ($k == 'separator') : ?>
                                        <li role="separator" class="dropdown-divider"></li>
                                    <?php else : ?>
                                        <li class="dropdown-item nav-item <?= $active ?>">
                                            <a class="nav-link" href="<?= ($k != 'Logout') ? $v : "#" ?>">
                                                <?= $k ?>
                                            </a>
                                        </li>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            <?php endif; ?>
                            </ul>
                        </li>
                    </ul>
            </div>
        </div>
    </div>

</nav>
<?php if ($this->page_title != 'Home') {
    require_once 'after-nav.php';
}
