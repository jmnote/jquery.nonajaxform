;jQuery(function($){$.extend({form:function(o){var d={method:'post',target:'_self',data:{},}
var s=$.extend({},d,o);var form=$('<form>').attr({method:s.method,target:s.target,data:s.data,action:s.url,}).css({display:'none'});var addData=function(name,data){if($.isArray(data)){for(var i=0;i<data.length;i++){addData(name+'[]',data[i]);}
return;}
if(typeof data==='object'){for(var key in data){if(data.hasOwnProperty(key)){addData(name+'['+key+']',data[key]);}}
return;}
if(data!=null){form.append($('<input>').attr({type:'hidden',name:String(name),value:String(data)}));}};for(var key in s.data){if(s.data.hasOwnProperty(key)){addData(key,s.data[key]);}}
return form.appendTo('body');}});});