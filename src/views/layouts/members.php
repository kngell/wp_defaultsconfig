<?php require_once 'include/members/header.php'?>
<?php require_once 'include/members/nav_adm.php'?>

<div class="row">
    <?php require_once 'include/members/side_nav.php';?>

    <?= $this->content('body');?>

</div>

<?php require_once 'include/members/footer.php' ;