<section id="special-price">
    <div class="container w-75">
        <div class="title">
            <h4 class="font-rubik font-size-20">Special Price</h4>
            <div id="filters" class="button-group ms-auto float-end">
                <?php
                if ($this->products) {
                    $brands = array_unique(array_map(function ($prod) {
                        return $prod->categorie;
                    }, $this->products));
                    sort($brands);
                }
            ?>
                <button class="btn is-checked" data-filter="*">All Brands</button>
                <?php if (isset($brands)) {
                array_map(function ($brand) {
                    printf('<button class="btn" data-filter=".%s">%s</button>', $brand, $brand);
                }, $brands);
            } ?>
            </div>
        </div>
        <hr class="divider mx-auto mt-0">
        <div class="grid">
            <?php $this->products ? shuffle($this->products) : ''?>
            <?php if ($this->products) {
                array_map(function ($product) { ?>
            <div
                class="grid-item border <?= $product->categorie ?? 'Brand' ?>">
                <div class="item py-0" style="width:200px">
                    <div class="product font-rale ">
                        <a
                            href="<?= PROOT ?>home/product/<?= $product->pdtID ?>">
                            <div style="overflow:hidden;"><img
                                    src="<?= $product->p_media != '' ? IMG . unserialize($product->p_media)[0] : ImageManager::asset_img('products/1.png') ?>"
                                    alt="<?= $product->p_title ?? 'Unknown' ?>"
                                    class="img-fluid">
                            </div>
                        </a>
                        <div class="text-center">
                            <h6><?= $product->p_title ?? 'Unknown' ?>
                            </h6>
                            <div class="rating text-warning font-size-12">
                                <span><i class="fas fa fa-star"></i></span>
                                <span><i class="fas fa fa-star"></i></span>
                                <span><i class="fas fa fa-star"></i></span>
                                <span><i class="fas fa fa-star"></i></span>
                                <span><i class="far fa-star"></i></span>
                            </div>
                            <div class="price py-2">
                                <span class="product_price"><?= $product->get_currency($product->p_regular_price) ?? 0 ?></span>
                            </div>
                            <form class="add_to_cart_frm">
                                <input type="hidden" name="item_id"
                                    value="<?= $product->pdtID ?? 1 ?>">
                                <input type="hidden" name="user_id" value="1">
                                <?=FH::csrfInput('csrftoken', (new Token)->generate_token(8));?>
                                <?php if ($this->user_cart) {
                    if (in_array($product->pdtID, array_map(function ($item) { if ($item->c_content == 'cart') {return $item->item_id;}}, $this->user_cart[0]))) {
                        echo ' <button type="submit" class="btn btn-success font-size-12">In the cart</button>';
                    } elseif (in_array($product->pdtID, array_map(function ($item) { if ($item->c_content == 'wishlist') {return $item->item_id;}}, $this->user_cart[0]))) {
                        echo ' <button type="submit" class="btn btn-info font-size-12">In wishlist</button>';
                    }
                } else {
                    echo '<button type="submit" class="btn btn-warning font-size-12">Add to
                                                    Cart</button>';
                }
                                    ?>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php }, $this->products);
            }?>
        </div>

    </div>
</section>