
angular.module('myApp',[])/*引用模块组件*/
/**
 * $scope 域
 */
.controller('MainController',function($scope){
    $scope.userdata={};

    $scope.submitFrom=function(){

    console.log($scope.userdata);//打印

    if($scope.signUpFrom.$invalid){
        alert('请检查你的信息');
    }else{
    alert('提交成功');    
    }
    }
})

.directive('compare',function(){
    var a={};
   // o.strict='AE';
   /**
    * 表示这个directive不会从它的controller里继承$scope对象，而是会重新创建一个。
    */
    a.scope={
        orgText:'=compare'
    }
    a.require='ngModel';//绑定输入框的值到Scorp变量中
    /**
     * 编译后执行该方法link（scope，element，attrs,controller）
     */
    a.link=function(sco,ele, att,con){
        //进行验证
        con.$validators.compare = function(v){

            return v==sco.orgText;
        }
        /**
         * watch进行监控密码的变化
         */
        sco.$watch('orgText',function(){

            con.$validate();
        });
    }
    return a;
})