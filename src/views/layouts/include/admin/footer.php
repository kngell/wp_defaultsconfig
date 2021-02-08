<!-- Main Footer -->
<footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
        Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
</footer>
</div>
<!-- ./wrapper -->

<!-- Librairies -->
<script type="text/javascript" src="<?= $this->jsAdminlib ?? "" ?>"></script>
<!-- Plugins -->
<script type="text/javascript" src="<?= $this->jsAdminPlugins ?? "" ?>"></script>
<!-- Mainjs -->
<script type="text/javascript" src="<?= $this->jsAdminMain ?? "" ?>"></script>
<!-- Custom js -->
<?= $this->content('footer'); ?>
</body>

</html>