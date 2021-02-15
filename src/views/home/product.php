<?php $this->setSiteTitle('K' . "'" . 'nGELL Ingénierie Logistique')?>
<?php $this->start('head'); ?>
<!-------Accueil-------->
<link href="<?=$this->css?>" rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<!-- Start Main -->
<main id="main-site">
    <!-- Products -->
    <?php require_once 'partials/_product_details.php'?>
    <!-- end Products -->
    <!-- Top Sales -->
    <?php require_once 'partials/_top_sales.php'?>
    <!-- End top Sales -->
    <input type="hidden" id="ip_address" style="display:none"
        value="<?=H_visitors::getIP()?>">
</main>
<!-- End  Main -->
<?php $this->end(); ?>
<?php $this->start('footer')?>
<!-- Html visitors -->
<script type="text/javascript" src="<?=$this->js?>">
</script>
<?php $this->end();
