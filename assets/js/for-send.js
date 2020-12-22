
		const addBtnAnimation = (btn) => {
			console.log(this);
			btn.classList.toggle('product-added');
			
			let parent = btn.closest('.product-section-li-imgbox');
			parent.classList.add('active')

			setTimeout(() => {            
				btn.classList.remove('product-added');
			}, 1800);

			setTimeout(() => {        
				parent.classList.remove('active')
			}, 2500);
		}
        function addToCart(elem) 
        {
            let qty = null;
            let selectedSize = null;
            let currentRoute = "personal"
            let id = parseFloat($(elem).data('id'));            
          
            if(currentRoute == 'productin')
            {
                qty = $(elem).prev().find('.choose-quantity-quantity-div').find('input').val();
                
                selectedSize = $('ul.select-ul').find('li.active').text();
            }else{
				qty = 1;
				selectedSize = null;
			}

            $.ajax({
                url: "https://squadwear.ge/add_to_cart",
                method: "get",
                data:{id: id, qty: qty, size: selectedSize},
                success: function(data)
                {
                    if(data.status) {
                        // დაემატა
                    } else {
                        // ვერ დაემატა
                    }
                },
                error: function(error)
                {
                    console.log(error);
                }
            });
            
            return false;            
        }
        
    