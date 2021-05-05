<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->asset('css/custom/home/promotions/promotions', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<main id=main-site>
    <!-- Content -->
    <section class="promotions py-3" id=promotions>
        <div class="container w-75 py-5">
            <div class="row title py-5">
                <div class="col-lg-5 m-auto text-center">
                    <h1 class="main-title">Promotions Trending</h1>
                    <h6 class="sub-title">Be healty in natural</h6>
                </div>
            </div>
            <div class="row product">
                <div class="col-lg-3 product-item">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="../../../assets/img/DA.png" alt="" class="img-fluid img-thumbnail">
                        </div>
                    </div>
                    <h6>Energy Food</h6>
                    <p>EUR 125.39</p>
                </div>
                <div class="col-lg-3 product-item thumbnail">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="../../../assets/img/coaching.png" alt="" class="img-fluid img-thumbnail">
                        </div>
                    </div>
                    <h6>Energy Food</h6>
                    <p>EUR 125.39</p>
                </div>
                <div class="col-lg-3 product-item">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="../../../assets/img/consulting.png" alt="" class="img-fluid img-thumbnail">
                        </div>
                    </div>
                    <h6>Energy Food</h6>
                    <p>EUR 125.39</p>
                </div>
                <div class="col-lg-3 product-item">
                    <div class="card border-0 bg-light mb-2">
                        <div class="card-body">
                            <img src="../../../assets/img/lean.png" alt="" class="img-fluid img-thumbnail">
                        </div>
                    </div>
                    <h6>Energy Food</h6>
                    <p>EUR 125.39</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Fin Content -->
    <input type="hidden" id="ip_address" style="display:none"
        value="<?=H_visitors::getIP()?>">
</main>
<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->asset('js/custom/home/promotions/promotions', 'js') ?? ''?>">
</script>
<?php $this->end();
