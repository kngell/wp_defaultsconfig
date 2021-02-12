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
    src="<?= $this->jsAdminlib ?? '' ?>"></script>
<!-- Common vendor -->
<script type="text/javascript"
    src="<?= $this->jscommonVendor ?? '' ?>"></script>
<!-- Plugins -->
<script type="text/javascript"
    src="<?= $this->jsAdminPlugins ?? '' ?>"></script>
<!-- Mainjs -->
<script type="text/javascript"
    src="<?= $this->jsAdminMain ?? '' ?>"></script>
<!-- Custom js -->
<?= $this->content('footer'); ?>
</body>

</html>