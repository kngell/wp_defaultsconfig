<section id="new-phones">
    <div class="container w-75">
        <div class="row title">
            <h4 class="font-rubik font-size-20">New Phones</h4>
        </div>
        <hr class="divider mx-auto mt-0">
        <!-- Owl carousel -->
        <?php isset($this->products) && $this->products ? shuffle($this->products) : ''?>
        <div class="owl-carousel owl-theme">
            <?php if (isset($this->products)) {
    foreach ($this->products as $product) :?>
            <div class="item py-2 bg-light">
                <div class="product font-rale ">
                    <a
                        href="<?=PROOT?>home/product/<?=$product->pdtID?>"><img
                            src="<?=IMG . unserialize($product->p_media)[0] ?? '../../../assets/img/products/1.png'?>"
                            alt="<?=$product->p_title ?? 'Unknown'?>"
                            class="img-fluid"></a>
                    <div class="text-center">
                        <h6><?=$product->p_title ?? 'Unknown'?>
                        </h6>
                        <div class="rating text-warning font-size-12">
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="far fa-star"></i></span>
                        </div>
                        <div class="price py-2">
                            <span><?=$product->get_currency($product->p_regular_price) ?? 0?></span>
                        </div>
                        <form class="add_to_cart_frm">
                            <input type="hidden" name="item_id"
                                value="<?=$product->pdtID ?? 1 ?>">
                            <input type="hidden" name="user_id" value="1">
                            <?=FH::csrfInput('csrftoken', hash_hmac('sha256', 'add_to_cart_frm' . $product->pdtID ?? 1, $_SESSION[TOKEN_NAME])); ?>
                            <?php
                            if (in_array($product->pdtID, $this->user_cart)) {
                                echo ' <button type="submit" class="btn btn-success font-size-12">In the cart</button>';
                            } else {
                                echo '<button type="submit" class="btn btn-warning font-size-12">Add to
                                Cart</button>';
                            } ?>
                        </form>
                    </div>
                </div>
            </div>
            <?php endforeach;
}?>
        </div>
        <!-- End Owl Carousel -->
    </div>
</section>