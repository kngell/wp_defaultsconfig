<section id="product" class="py-3">
    <div class="container w-75">
        <div class="row r_button">
            <div class="col-sm-6 h-100">
                <img src="<?= isset($this->p_details->p_media) ? $this->p_details->p_media[0] : ImageManager::asset_img('products/1.png') ?>"
                    alt="Product" class="img-fluid">
                <div class="row pt-4 font-size-16 font-baloo mb-3">
                    <div class="col">
                        <form action="">
                            <button type="submit" class="btn btn-danger font-size-14 form-control">Proceed to
                                buy</button>
                        </form>
                    </div>
                    <div class="col">
                        <form class="add_to_cart_frm">
                            <input type="hidden" name="item_id"
                                value="<?= $this->p_details->pdtID ?? 1 ?>">
                            <input type="hidden" name="user_id" value="1">
                            <?php $pdtID = $this->p_details->pdtID ?? 1?>
                            <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'add_to_cart_frm' . $pdtID, $_SESSION[TOKEN_NAME])); ?>
                            <?php
                            if (isset($this->p_details->pdtID) && in_array($this->p_details->pdtID, $this->user_cart)) {
                                echo ' <button type="submit" class="btn btn-success font-size-14 form-control">In the cart</button>';
                            } else {
                                echo '<button type="submit" class="btn btn-warning font-size-14 form-control">Add to
                                Cart</button>';
                            }
                            ?>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 py-5 h-100">
                <h5 class="font-baloo font-size-20"><?= $this->p_details->p_title ?? 'Unknown' ?>
                </h5>
                <small>By <?= $this->p_details->item_brand ?? 'Brand' ?></small>
                <div class="d-flex">
                    <div class="rating text-warning font-size-12">
                        <span><i class="fas fa fa-star"></i></span>
                        <span><i class="fas fa fa-star"></i></span>
                        <span><i class="fas fa fa-star"></i></span>
                        <span><i class="fas fa fa-star"></i></span>
                        <span><i class="far fa-star"></i></span>
                    </div>
                    <a href="#" class="px-2 font-rale font-size-14 text-decoration-none">20534 Ratings | 1000+ answered
                        questions</a>
                </div>
                <hr class="m-0">
                <!-- Price section  -->
                <table class="my-3">
                    <tr class="font-rale font-size-14">
                        <td>M.R.P : </td>
                        <td><strike><?=$this->p_details->get_currency($this->p_details->p_compare_price)?>
                            </strike></td>
                    </tr>
                    <tr class="font-rale font-size-14">
                        <td>Deal Price :</td>
                        <td class="font-size-20 text-danger">$<span><?= $this->p_details->get_currency($this->p_details->p_regular_price) ?? 0 ?></span><small
                                class="text-dark font-size-12">&nbsp;&nbsp;inclusive of
                                all
                                taxes</small>
                        </td>
                    </tr>
                    <?php $save = $this->p_details->p_compare_price - $this->p_details->p_regular_price?>
                    <tr class="font-rale font-size-14">
                        <td>You Save : </td>
                        <td><span class="font-size-16 text-danger"><?=$this->p_details->get_currency($save)?></span>
                        </td>
                    </tr>
                </table>
                <!-- End Price section -->

                <!-- policy -->
                <div id="policy">
                    <div class="d-flex">
                        <div class="return text-center me-5">
                            <div class="font-size-20 my-2 color-second">
                                <span><i class="fas fas fa-retweet border p-3 rounded-pill"></i></span>
                            </div>
                            <a href="#" class="font-rale font-size-12 text-decoration-none">10 Days<br> Replacement</a>
                        </div>
                        <div class="return text-center me-5">
                            <div class="font-size-20 my-2 color-second">
                                <span><i class="fas fas fa-truck border p-3 rounded-pill"></i></span>
                            </div>
                            <a href="#" class="font-rale font-size-12 text-decoration-none">K'nGELL<br> Delivered</a>
                        </div>
                        <div class="return text-center me-5">
                            <div class="font-size-20 my-2 color-second">
                                <span><i class="fas fas fa-check-double border p-3 rounded-pill"></i></span>
                            </div>
                            <a href="#" class="font-rale font-size-12 text-decoration-none">1 year<br> warranty</a>
                        </div>
                    </div>
                </div>
                <!-- End policy -->
                <hr>
                <!-- Order details -->
                <div id="order-details" class="font-rale d-flex flex-column text-dark">
                    <small>Delivery by : Mar 29 - Apr 1</small>
                    <small>Sold by <a href="#" class="text-decoration-none">K'nGELL electronics&nbsp;</a>(4.5 out of 5 |
                        19,198
                        ratings)</small>
                    <small><i class="fas fa-map-marker-alt color-primary"></i>&nbsp;&nbsp;Deliver to Customer -
                        424201</small>
                </div>
                <!-- !Order details -->
                <div class="row">
                    <div class="col-6">
                        <!-- colors -->
                        <div class="color my-3">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-baloo">Color:</h6>
                                <div class="p-2 color-yellow-bg rounded-circle"><button
                                        class="btn font-size-14"></button></div>
                                <div class="p-2 color-primary-bg rounded-circle"><button
                                        class="btn font-size-14"></button></div>
                                <div class="p-2 color-second-bg rounded-circle"><button
                                        class="btn font-size-14"></button></div>
                            </div>
                        </div>
                        <!-- !Colors -->
                    </div>
                    <div class="col-6">
                        <!-- Product qty section -->
                        <div class="qty d-flex" id="qty">
                            <h6 class="font-baloo">Qty:</h6>
                            <div class="px-4 d-flex font-rale">
                                <button class="qty-up border bg-light"><i class="fas fa-angle-up"></i></button>
                                <input type="text" class="qty_input border px-2 w-50 bg-light" desabled value="1"
                                    placeholder="1">
                                <button class="qty-down border bg-light"><i class="fas fa-angle-down"></i></button>
                            </div>
                        </div>
                        <!-- !Product qty section -->
                    </div>
                </div>
                <!-- Mobile size  -->
                <div class="size my-2">
                    <h6 class="font-baloo">Size :</h6>
                    <div class="d-flex justify-content-between w-75">
                        <div class="font-rubik border p-2">
                            <button class="btn p-0 font-size-14">4GB RAM</button>
                        </div>
                        <div class="font-rubik border p-2">
                            <button class="btn p-0 font-size-14">6GB RAM</button>
                        </div>
                        <div class="font-rubik border p-2">
                            <button class="btn p-0 font-size-14">8GB RAM</button>
                        </div>
                    </div>
                </div>
                <!-- !Mobile size -->
            </div>
            <div class="col-12">
                <h6 class="font-rubik">Product desription</h6>
                <hr>
                <p class="font-rale font-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                    ad! Placeat, ad neque. Dolorum, libero molestiae illum sunt fugit repellendus asperiores
                    aspernatur cupiditate eaque nostrum laboriosam quas magnam beatae et!Voluptates nobis nam
                    nostrum nesciunt molestias, sint tempore! Illo, omnis! Amet labore eligendi earum numquam
                    quod id ipsum necessitatibus aperiam, alias deleniti ipsam. Qui voluptas ut repudiandae et?
                    Nisi, asperiores!</p>
                <p class="font-rale font-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                    ad! Placeat, ad neque. Dolorum, libero molestiae illum sunt fugit repellendus asperiores
                    aspernatur cupiditate eaque nostrum laboriosam quas magnam beatae et!Voluptates nobis nam
                    nostrum nesciunt molestias, sint tempore! Illo, omnis! Amet labore eligendi earum numquam
                    quod id ipsum necessitatibus aperiam, alias deleniti ipsam. Qui voluptas ut repudiandae et?
                    Nisi, asperiores!</p>
            </div>
        </div>
    </div>
</section>