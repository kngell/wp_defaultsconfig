<section id="cart" class="py-3">
    <div class="container w-75">
        <h5 class="font-baloo">Shopping Cart</h5>
        <!-- Shopping cart items -->
        <div class="row">
            <div class="col-sm-9" id="cart_items">
                <?=$this->cart[1] ?? ''?>
            </div>
            <!-- Sub-Total section -->
            <div class="col-sm-3" id="sub_total">
                <?=$this->cart[2] ?? ''?>
            </div>
            <!-- !Sub-Total section -->
        </div>
        <!-- !Shopping cart items -->
    </div>

</section>