      <!-- Sub-Total section -->

      <div class="card sub-total mt-2 border">
          <div class="card-header">
              <h6 class="font-size-12 font-rale text-success py-3"><i class="fas fa-check"></i>Your ordre
                  is
                  eligible for FREE Delivery</h6>
          </div>

          <div class="card-body border-top">
              <ul class="text-left">
                  <li><span>Number of items:</span>&nbsp;<span class="cart_nb_elt">{{nb_items}}</span></li>
                  <li><span>Eco Tax:</span>&nbsp;<span>$85.96</span></li>
                  <li><span>Shipping cost</span>&nbsp;<span>$985.3</span></li>
                  <li class="font-baloo font-size-20"><span class="product_price_title">Deal Price:</span>&nbsp;<span
                          class="text-danger" id="deal-price">{{total_price}}</span>
                      </span>
                  </li>
              </ul>
          </div>
          <div class="card-footer text-center"> <button class="btn btn-warning mt-3"
                  onclick="location.href='checkout'">Proceed to
                  buy</button>
          </div>
      </div>

      <!-- !Sub-Total section -->