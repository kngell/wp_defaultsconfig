<section id="top-sale">
    <div class="container py-5">
        <h4 class="font-rubik font-size-20">Top Sale</h4>
        <hr>
        <!-- Owl carousel -->
        <?php shuffle($this->products) ?>
        <div class="owl-carousel owl-theme">
            <?php foreach ($this->products as $product) : ?>
            <div class="item py-2">
                <div class="product font-rale ">
                    <a
                        href="<?= PROOT ?>home/product/<?= $product->item_id ?>"><img
                            src="<?= IMG . $product->item_image ?? '../../../assets/img/products/1.png' ?>"
                            alt="<?= $product->item_name ?? 'Unknown' ?>"
                            class="img-fluid"></a>
                    <div class="text-center">
                        <h6><?= $product->item_name ?? 'Unknown' ?>
                        </h6>
                        <div class="rating text-warning font-size-12">
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="fas fa fa-star"></i></span>
                            <span><i class="far fa-star"></i></span>
                        </div>
                        <div class="price py-2">
                            <span>EUR<?= $product->item_price ?? 0 ?></span>
                        </div>
                        <form class="add_to_cart_frm">
                            <input type="hidden" name="item_id"
                                value="<?= $product->item_id ?? 1 ?>">
                            <input type="hidden" name="user_id" value="1">
                            <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'add_to_cart_frm' . $product->item_id ?? 1, $_SESSION[TOKEN_NAME])); ?>
                            <?php
                                if (in_array($product->item_id, $this->user_cart)) {
                                    echo ' <button type="submit" class="btn btn-success font-size-12">In the cart</button>';
                                } else {
                                    echo '<button type="submit" class="btn btn-warning font-size-12">Add to
                                Cart</button>';
                                }
                                ?>
                        </form>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
            <!-- End Owl Carousel -->
        </div>
</section>