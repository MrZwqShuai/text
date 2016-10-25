//Js note
<script>
        //快速打印五分制的评分情况
        function getRating(rating) {
        	if(rating > 5 || rating < 0){
        		throw new Error('数字不在范围之内') ;
        	}
        	return '☆☆☆☆☆★★★★★'.substring(5-rating,10-rating) ;
        }
        console.log(getRating(2))
	</script>
        
//正确打开方式(直接把错误信息转移到stackoverflow找答案)
<script>
        try {
        	angular2
        } catch (e){
        	window.location.href = 'http://stackoverflow.com/search?q=[js]+'+e.message ;
        }

	</script>
  //repeat
  <script>
        var str = new Array(n+1).join('abc') ;
        console.log(str)

	</script>
//获得10为长度的随机字符串
<script>
	Math.random().toString(36).substr(2,10) ;	
	</script>
	
//对知乎上关于依赖注入的封装
 <script>
	function logObj(fn) {
	 	return {
	 		write : function(content) {
	 			fn(content) ;
	 		}
	 	}
	 }
        
        var myFunc = myFuncFactory(logObj(console.log)) ;
        myFunc() ;
        myFuncFactory(logObj(alert))() ;

        function myFuncFactory(logger) {
        	return function() {
        		var result = ['aaa','zzz',{name : 'zwq'}] ;
        		logger.write(result) ;
        	}
        }
       
	 </script>
	 
	 //让IE兼容forEach的方法
	 //Array.forEach implementation for IE support..  
//https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach  
if (!Array.prototype.forEach) {  
    Array.prototype.forEach = function(callback, thisArg) {  
        var T, k;  
        if (this == null) {  
            throw new TypeError(" this is null or not defined");  
        }  
        var O = Object(this);  
        var len = O.length >>> 0; // Hack to convert O.length to a UInt32  
        if ({}.toString.call(callback) != "[object Function]") {  
            throw new TypeError(callback + " is not a function");  
        }  
        if (thisArg) {  
            T = thisArg;  
        }  
        k = 0;  
        while (k < len) {  
            var kValue;  
            if (k in O) {  
                kValue = O[k];  
                callback.call(T, kValue, k, O);  
            }  
            k++;  
        }  
    };  
} 
//MVVM框架例如vue.js Knockout.js 等均采用的Object.defineProperty来设置getter/setter 采用这种做法比AngularJs1.X
//使用的Dirty check的性能高但Object.defineProperty使用的是Es5的技术，并且在ie8里只在Dom元素上起作用,对原生Js对象无效 所以只能兼容到IE8以上的浏览器


//给数组原型添加一个方法 该方法返回一个删除数组中同样的元素
 Array.prototype.distinct = function(){
 	var _arr = new Array() ;
 	var obj = new Object() ;
 	for(var i = 0 ; i<this.length ; i++){
 		var val = this[i] ;
 		if(!obj[val]){
 			obj[val] = 1 ;//标记
 			_arr.push(val) ;
 		}
 	}
 	return _arr ;
 }
var newarr = [1,2,3,2,4]

console.log(newarr.distinct()) //[1,2,3,4]
//16 1024 对Js异步编程进一步深入 概念进一步理解 这里注意一点Js是单线程本身没有异步特性 但是浏览器本身是典型的GUI工作线程，gui工作线程在绝大多数的系统中都是实现为事件处理，避免阻塞交互 因此产生了Js异步特性
//究极讲解Js单线程为什么会异步执行方法呢 Js的单线程是指浏览器中只有一个Js的执行线程，同一时刻内只会有一段代码在执行(如果打开多个标签 其中一个页面正在执行比较大的js运算的时候其他标签的页面js就会停止工作)。
//而异步机制是浏览器两个或者以上的常驻线程共同完成的,比如异步请求是由两个常驻线程: Js执行线程和事件触发线程共同完成,Js的执行线程发起异步请求
//（这时候浏览器会开一条新的Http请求线程来执行这个请求,这时Js执行完成继续执行线程队列中下一个任务）然后在未来的某一个时刻事件触发监听到之前发的请求
//已完成它就会把完成的事件插入到Js主线程队列的尾部等待处理，setTimeout和setInterval是浏览器定时器线程执行的定时计数,然后在定时时间内把定时请求处理的函数插入到js线程的底部
//所以这两个函数实际时间是大于或者等于指定时间的
//由于Js是单线程的 所以js执行的任务都是一次事件轮询 所以同一时间执行任务的时候,其他的任务就得排队，后续的任务必须等前面的任务轮询结束后才能开始执行
//所以为了避免因为某些长时间任务造成的无意义等待 Js开始引入异步的概念，用另一个线程来管理异步任务
//Js的主线程在队列按照顺序执行，而异步任务会进入另一个任务队列而不会阻塞主线程。	


//回调函数(将函数作为参数传入另一个函数等待父函数执行完回调再执行传入的函数)中文解释就是父函数执行完之后再来执行回调
//来个B格高一点的
//A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
//举个栗子
function test(callback) {
        console.log('我是父函数') ;
        console.log('我是回调函数') ;
        callback() ;
      }
      function a() {
        console.log('我是回调函数a') ;
      }
      function b() {
        console.log('我是回调函数b') ;
      }
      test(a) ;//我是回调函数a
      test(b) ;//我是回调函数b


//计算机操作系统中进程与线程 形象比喻
//1 计算机的核心是CPU，它承担了所有的计算任务。它就像一座工厂，时刻在运行
//2 假定工厂的电力有限，一次只能供给一个车间使用。也就是说，一个车间开工的时候，其他车间都必须停工。背后的含义就是，单个CPU一次只能运行一个任务。
//3 进程就好比工厂的车间，它代表CPU所能处理的单个任务。任一时刻，CPU总是运行一个进程，其他进程处于非运行状态。
//4 一个车间里，可以有很多工人。他们协同完成一个任务。
//5 线程就好比车间里的工人。一个进程可以包括多个线程。
//6 车间的空间是工人们共享的，比如许多房间是每个工人都可以进出的。这象征一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。
//7 可是，每间房间的大小不同，有些房间最多只能容纳一个人，比如厕所。里面有人的时候，其他人就不能进去了。这代表一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。
//8 一个防止他人进入的简单方法，就是门口加一把锁。先到的人锁上门，后到的人看到上锁，就在门口排队，等锁打开再进去。这就叫"互斥锁"（Mutual exclusion，缩写 Mutex），防止多个线程同时读写某一块内存区域。
//9 还有些房间，可以同时容纳n个人，比如厨房。也就是说，如果人数大于n，多出来的人只能在外面等着。这好比某些内存区域，只能供给固定数目的线程使用。
//10 这时的解决方法，就是在门口挂n把钥匙。进去的人就取一把钥匙，出来时再把钥匙挂回原处。后到的人发现钥匙架空了，就知道必须在门口排队等着了。这种做法叫做"信号量"（Semaphore），用来保证多个线程不会互相冲突。
//   不难看出，mutex是semaphore的一种特殊情况（n=1时）。也就是说，完全可以用后者替代前者。但是，因为mutex较为简单，且效率高，所以在必须保证资源独占的情况下，还是采用这种设计。
//11 总结 操作系统的设计，因此可以归结为三点：
//（1）以多进程形式，允许多个任务同时运行；
//（2）以多线程形式，允许单个任务分成不同的部分运行；
//（3）提供协调机制，一方面防止进程之间和线程之间产生冲突，另一方面允许进程之间和线程之间共享资源。
