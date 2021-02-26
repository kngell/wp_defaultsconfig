<!-- Cart item -->
<div class="row border-top py-3 mt-3">
    <div class="col-sm-2">
        <img src="{{image}}" alt="cart1" class="img-fluid" style="height:120px;">
    </div>
    <div class="col-sm-8">
        <h5 class="font-baloo font-size-20">{{title}}
        </h5>
        <small>By {{brand}}</small>
        <!-- Rating section -->
        <div class="d-flex">
            <div class="rating text-warning font-size-12">
                <span><i class="fas fa fa-star"></i></span>
                <span><i class="fas fa fa-star"></i></span>
                <span><i class="fas fa fa-star"></i></span>
                <span><i class="fas fa fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
            </div>
            <a href="#" class="px-2 font-rale font-size-14">20,534 ratings</a>
        </div>
        <!-- !Rating section -->
        <!-- Produt quantity -->
        <div class="qty d-flex pt-2">
            <div class="d-flex font-rale w-25">
                <button class="qty-up border bg-light"><i class="fas fa-angle-up"></i></button>
                <input type="text" class="qty_input border px-2 w-100 bg-light" desabled value="1" placeholder="1">
                <button class="qty-down border bg-light"><i class="fas fa-angle-down"></i></button>
            </div>
            <form action="#" class="delete-cart-item-frm{{product_id}}">
                <input type="hidden" name="item_id" value="{{product_id}}">
                <input type="hidden" name="user_id" value="1">
                <input type="hidden" name="csrftoken" value="{{token}}">
                <button type="submit" class="btn font-baloo text-danger px-3 border-right deleteBtn">Delete</button>
            </form>
            <button type="button" class="btn font-baloo text-danger">Save for later</button>
        </div>
        <!-- !Produt quantity -->
    </div>
    <div class="col-sm-2 text-right">
        <div class="font-size-20 text-danger font-baloo">
            <span class="product_price">{{price}}</span>
        </div>
    </div>
</div>
<!-- !Cart item -->