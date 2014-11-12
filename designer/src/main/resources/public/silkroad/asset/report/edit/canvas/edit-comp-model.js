define(["url","constant"],function(a,b){return Backbone.Model.extend({initialize:function(a){this.canvasModel=a.canvasModel,this.reportId=a.reportId},getCompAxis:function(b,c){var d=this;$.ajax({url:a.getCompAxis(d.reportId,b),success:function(a){c(a.data)}})},addCompAxis:function(b,c,d){var e=this;$.ajax({url:a.addCompAxis(e.reportId,b),data:c,type:"POST",success:function(a){d(a.data.id)}})},deleteCompAxis:function(b,c,d,e){$.ajax({url:a.deleteCompAxis(this.reportId,b,d,c),type:"DELETE",success:function(){e()}})},getCompDataById:function(a){for(var b=this.canvasModel.reportJson.entityDefs,c=[],d=0,e=b.length;e>d;d++)b[d].compId==a&&c.push(b[d]);return c},updateCalendarJson:function(a,b){var c=this.canvasModel.compBoxModel,d=c.getComponentData("TIME_COMP"),e=this.getCompDataById(this.compId)[0],f=d.switchConfig(a);e.dataSetOpt.timeTypeList=f.timeTypeList,e.dataSetOpt.timeTypeOpt=f.timeTypeOpt,this.canvasModel.saveJsonVm(b)},sortingCompDataItem:function(b,c,d){$.ajax({url:a.sortingCompDataItem(this.reportId,b),type:"POST",data:c,success:function(){d()}})},getDataFormatList:function(c,d){$.ajax({url:a.getDataFormatList(this.reportId,c),type:"get",success:function(a){var c,e,f=a.data;if(f){c={options:b.DATA_FORMAT_OPTIONS,dataFormat:{}},e=dataInsight.main.model.get("indList").data;for(var g=0,h=e.length;h>g;g++){var i=e[g].name;if(f.hasOwnProperty(i)){var j={format:f[i],caption:e[g].caption};c.dataFormat[i]=j}}c.defaultFormat=f.defaultFormat}d(c)}})},saveDataFormatInfo:function(b,c,d){var e={areaId:b,dataFormat:JSON.stringify(c)};$.ajax({url:a.getDataFormatList(this.reportId,b),type:"POST",data:e,success:function(){d()}})}})});