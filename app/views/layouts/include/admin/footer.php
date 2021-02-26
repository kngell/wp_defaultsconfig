<!-- Main Footer -->
<footer class="main-footer">
    <!-- To the right -->
    <!-- CopyRights -->
    <div class="copyright text-center py-2 float-right d-none d-sm-inline">
        <p class="font-rale font-size-14">&copy; Copyrights 2021 Design by <a href="#" class="color-second"> Kngell</a>
        </p>
    </div>
    <!-- Default to the left -->
    <strong class="py-2">Copyright &copy; 2020-2021 <a href="http://wwww.kngell.com">Kngell</a>.</strong> All rights
    reserved.
</footer>
</div>
<!-- ./wrapper -->

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