<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->asset('path', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>


<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->asset('pathjs', 'js') ?? ''?>">
</script>
<?php $this->end();
