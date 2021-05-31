<section id="cart" class="py-3">
    <div class="container w-75">
        <div class="title-wrapper">
            <h4 class="title fw-bold">Panier d'achats</h4>
            <hr class="horizontal-line">
        </div>
        <!-- Shopping cart items -->
        <div class="row">
            <div class="col-sm-9 cart_items" id="cart_items">
                <?=$this->cart[1] ?? ''?>
            </div>
            <!-- Sub-Total section -->
            <div class="col-sm-3 sub_total" id="sub_total">
                <?=$this->cart[2] ?? ''?>
            </div>
            <!-- !Sub-Total section -->
        </div>
        <!-- !Shopping cart items -->
    </div>

</section>