<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->get_Asset('path', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>


<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->get_Asset('pathjs', 'js') ?? ''?>">
</script>
<?php $this->end();
