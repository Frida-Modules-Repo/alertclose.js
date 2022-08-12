Java.perform(function (){
  Java.use('android.app.Dialog').setCancelable.implementation=function (cancelable){
    return this.setCancelable(true);
  }
  Java.use('android.app.Dialog').setCanceledOnTouchOutside.implementation=function (cancelable){
    return this.setCanceledOnTouchOutside(true);
  }
  Java.use('android.app.AlertDialog$Builder').setCancelable.implementation=function (cancelable){
    return this.setCancelable(true);
  }
  Java.use('android.app.Activity').setFinishOnTouchOutside.implementation=function (cancelable){
    return this.setFinishOnTouchOutside(true);
  }
  Java.use('android.view.Window').setCloseOnTouchOutside.implementation=function (cancelable){
    return this.setCloseOnTouchOutside(true);
  }
  Java.use('android.view.Window').setCloseOnTouchOutsideIfNotSet.implementation=function (cancelable){
    return this.setCloseOnTouchOutsideIfNotSet(true);
  }
  Java.use('android.view.Window').setCloseOnSwipeEnabled.implementation=function (cancelable){
    return this.setCloseOnSwipeEnabled(true);
  }
})
