</div>
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
<?= $this->content('footer');?>
</body>

</html>