<!-- <script
    src="assets/js/vendor~app~dashboard_analytics~dashboard_ecommerce~demo_add_product~demo_calendar~demo_datatable~dem~cf3c0e0d.js">
</script>
<script src="assets/js/vendor~app.js"></script>
<script src="assets/js/app.js"></script>
<script
    src="assets/js/vendor~dashboard_analytics~dashboard_ecommerce~demo_add_product~demo_chartjs~demo_dropzone~demo_widg~79dfae0c.js">
</script>
<script src="assets/js/dashboard_ecommerce.js"></script> -->


<!-- Librairies -->
<script type="text/javascript"
    src="<?= $this->get_Asset('js/librairies/adminlib', 'js') ?? ''?>">
</script>
<!-- Common vendor -->
<script type="text/javascript"
    src="<?= $this->get_Asset('commons/backend/admin/commonVendor', 'js') ?? ''?>">
</script>
<!-- Common custom modules -->
<script type="text/javascript"
    src="<?= $this->get_Asset('commons/backend/admin/commonCustomModules', 'js') ?? ''?>">
</script>
<!-- Plugins -->
<script type="text/javascript"
    src="<?= $this->get_Asset('js/plugins/adminplugins', 'js') ?? ''?>">
</script>
<!-- Mainjs -->
<script type="text/javascript"
    src="<?= $this->get_Asset('js/main/backend/admin/main', 'js') ?? ''?>">
</script>
<!-- Custom js -->
<?= $this->content('footer'); ?>
</body>

</html>