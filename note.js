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
        
//正确打开方式
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
