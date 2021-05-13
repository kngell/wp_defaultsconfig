<section id="wishlist" class="py-3"
    style="<?=$this->display ?? 'display:none;'?>">
    <div class="container-fluid w-75">
        <h5 class="font-baloo">Whishlist</h5>
        <!-- Shopping cart items -->
        <div class="row">
            <div class="col-sm-9" id="wishlist-items">
                <?=$this->cart[3] ?? ''?>
            </div>
        </div>
        <!-- !Shopping cart items -->
    </div>

</section>