<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->asset('css/custom/home/account/checkout', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<main id=main-site>
    <!-- Content -->


    <!-- Fin Content -->
    <input type="hidden" id="ip_address" style="display:none"
        value="<?=H_visitors::getIP()?>">
</main>
<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->asset('js/custom/home/account/checkout', 'js') ?? ''?>">
</script>
<?php $this->end();
