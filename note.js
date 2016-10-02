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
