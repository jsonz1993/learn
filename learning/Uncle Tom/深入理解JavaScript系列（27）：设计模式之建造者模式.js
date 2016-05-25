/**
 * Created by Jsonz on 2016/3/22.
 */

/*
 建造者模式可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。也就是说如果我们用了建造者模式，那么用户就需要指定需要建造的类型就可以得到它们，而具体建造的过程和细节就不需要知道了。
 */

// TODO 看不懂什么意思
function getBeerById(id, callback) {
    // 使用ID来请求数据， 然后返回数据
    asyncRequest('GET', 'beer.url?id=' + id, function(resp) {
        // callback 调用 response
        callback(resp.responseText);
    });
}

var el = document.querySelector('#test');
el.addEventListener('click', getBeerByIdBridge, false);

function getBeerByIdBridge(){
    getBeerById(this.id, function(beer){
        console.log('Requested Beer:' + beer);
    })
}

function asyncRequest(){

}

// $('<div class="foo">bar</div>');

/*
 建造者模式主要用于“分步骤构建一个复杂的对象”，在这其中“分步骤”是一个稳定的算法，而复杂对象的各个部分则经常变化，其优点是：建造者模式的“加工工艺”是暴露的，这样使得建造者模式更加灵活，并且建造者模式解耦了组装过程和创建具体部件，使得我们不用去关心每个部件是如何组装的。
 */













