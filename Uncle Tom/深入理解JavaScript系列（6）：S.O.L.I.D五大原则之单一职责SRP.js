/**
 * Created by Jsonz on 2016/2/28.
 */

// ���Ĵ���
(function(){

    function Product(id, description) {
        this.getId = function(){
            return id;
        };

        this.getDescription = function(){
            return description;
        };
    }

    function Cart(eventAggregator) {
        var items = [];

        this.addItem = function(item){
            items.push(item);
        }
    }

    (function($){
        var products = [
                new Product(1, 'Star Wars Lego Ship'),
                new Product(2, 'Barbie Doll'),
                new Product(3, 'Remote Control Airplane')
            ],
            cart = new Cart();

        function addToCart() {
            var productId = $(this).attr('id');

            var product = $.grep(products, function(x){
                return x.getId() == productId;
            })[0];

            cart.addItem(product);

            var newItem = $('<li></li>').html(product.getDescription()).attr('id-car',product.getId()).appendTo('#cart');
        }


        products.forEach(function(product){
            var newItem = $('<li></li>').html(product.getDescription())
                .attr('id',product.getId())
                .ondblclick(addToCart)
                .appendTo('#products');
        })

    }(jQuery))

}());


// �ع����
/*
 ��Ӧ�þ��Ƕ�����ģʽ����ȫ������

 �ο���martinfowler���¼��ۺϣ�Event Aggregator�������ڴ�������Ա������֮�����ͨ�š�

 ������������ʵ���¼��ۺϵĹ��ܣ�
 �ù��ܷ�Ϊ2���֣�1����Event������Handler�ص��Ĵ��룬1����EventAggregator�������ĺͷ���Event.
 */

function Event(name) {
    var handlers = [];

    this.getName = function(){
        return name;
    };

    this.addHandler = function(handler){
        handlers.push(handler);
    };

    this.removeHandler = function(handler){
        for (var i = 0; i < handlers.length; i++) {
            if (handlers[i] == handler) {
                handlers.splice(i, 1);
                break;
            }
        }
    };

    this.fire = function(eventArgs) {
        handlers.forEach(function(h) {
            h(eventArgs);
        })
    }
}

function EventAggregator() {
    var events = [];

    function getEvent(eventName) {
        return $.grep(events,function(event){
            return event.getName() === eventName;
        })[0];
    }

    this.publish = function(eventName, eventArgs){
        var event = getEvent(eventName);

        if (!event) {
            event = new Event(eventName);
            events.push(event);
        }
        event.fire(eventArgs);
    };

    this.subscribe = function(eventName, handler) {
        var event = getEvent(eventName);

        if (!event) {
            event = new Event(eventName);
            events.push(event);
        }

        event.addHandler(handler);
    };
}

// ���� Product ����
function Product(id, description) {
    this.getId = function(){
        return id;
    };

    this.getDescription = function(){
        return description;
    }
}

// ���� Cart ���󣬸ö����addItem ��function������Ҫ��������һ���¼� itemAdded,Ȼ��item����ȥ
function Cart(eventAggregator) {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
        eventAggregator.publish('itemAdded',item);
    }
}
// CartController ��Ҫ�ǽ���cart������¼��ۺ�����ͨ������itemAdded������һ��liԪ�ؽڵ㣬ͨ������productSelected�¼������product.
function CartController(cart, eventAggregator) {
    eventAggregator.subscribe('itemAdded', function(eventArgs){
        var newItem = $('<li></li>').html(eventArgs.getDescription()).attr('id-cart',
        eventArgs.getId()).appendTo('#cart');
    });

    eventAggregator.subscribe('productSelected',function(eventArgs){
        cart.addItem(eventArgs.product);
    });
}

//Repository ��Ŀ����Ϊ�˻�ȡ����(���Դ�ajax���ȡ��Ȼ��¶get���ݵķ���
function ProductRepository() {
    var products = [
        new Product(1,'Star Wars Lego Ship'),
        new Product(2, 'Barbie Doll'),
        new Product(3, 'remote control Airplane')
    ];

    this.getProducts = function(){
        return products;
    }
}

// ProductController �ﶨ����һ��onProductSelect��������Ҫ�Ƿ�������productSelected�¼���forEach��Ҫ�����ڰ����ݵ���Ʒ�б���

function ProductController(eventAggregator, productRepository) {
    var products = productRepository.getProducts();

    function onProductSelected() {
        var productId = $(this).attr('id');

        var product = $.grep(products,function(x){
            return x.getId() === productId;
        })[0];

        eventAggregator.publish('productSelected',{
            product : product
        });
    }

    products.forEach(function(product){
        var newItem = $('<li></li>').html(product.getDescription())
            .attr('id',product.getId()).ondblclick(onProductSelected)
            .appendTo('#products');
    })
}

// �������������������Ҫȷ��HTML���������˲�ִ����δ��룬�������jQuery��ready�������棩
(function(){
    var eventAggregator = new EventAggregator(),
        cart = new Cart(eventAggregator),
        cartController = new CartController(cart,eventAggregator),
        productRepository = new ProductRepository(),
        productController = new ProductController(eventAggregator, productRepository);
})();

























