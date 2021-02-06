  <footer class="main-footer">
      <strong>Copyright &copy; 2009-2019 <a href="http://wwww.kngell.com">Kngell</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 0.0.2
      </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
  <!-- Package standard jquery & bootstrap -->
  <script type="text/javascript" src="<?=$this->jsLib?>"></script>
  <!-- Common packages -->
  <script type="text/javascript" src="<?=$this->jscommonVendors?>"></script>
  <script type="text/javascript" src="<?=$this->jscommonCustom?>"></script>
  <!-- Plugins -->
  <script type="text/javascript" src="<?=$this->jsPlgins?>">
  </script>
  <!-- AdminLTE App Main -->
  <script type="text/javascript" src="<?=$this->mainJs?>">
  </script>

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <!-- spécific -->
  <?= $this->content('footer');?>
  </body>

  </html>