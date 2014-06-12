(function(){

// 插入 <ul> 之 <li> 樣板
var tmpl = '<li><input type="text"><span></span></li>',
    addButton = $('#add'),
    connected = $('.connected'),      // 三個 <ul>
    placeholder = $('#placeholder'),  // 三個 <ul> 的容器
    mainUl = $('.main'),              // main <ul>
    deleteUl = $('.delete'),          // delete <ul>
    doneUl = $('.done');              // done <ul>   

// 點擊按鈕時，插入新項目
//
addButton.on('click', function(){
  $(tmpl).prependTo(mainUl).addClass('is-editing').find('input').focus();
});

// 按 Enter 鍵時完成編輯並存檔
//
mainUl.on('keyup', 'input', function(e){
  // 若目前的鍵是「enter」
  if(e.which === 13){
    var input = $(this), li = input.parents('li');

    // 把 <input> 的值複製到 <span> 裡
    li.find('span').text( input.val() );

    // 取消 <li> 的編輯模式（is-editing class）
    li.removeClass('is-editing');

    // 把整個表存進 localStorage
    save();
  }
});

// 從 localStorage 讀出整個表，放進 ul
load();

// 把整個項目表存進 localStorage
//
function save(){
//   // 準備好要裝各個項目的空陣列
//   var arr = [];

//   // 對於每個 li，
//   // 把 <span> 裡的項目（一個物件：{text:文字, isDone:是否被完成}）放進陣列裡
//   mainUl.find('li').each(function(){
//     // TODO: 修改此處，把「已完成」與否一併存入。
//     arr.push({
//       text: $(this).find('span').text(),
//       isDone: $(this).hasClass("is-done")
//     });
//   });

//   // 把陣列轉成 JSON 字串後存進 localStorage
//   localStorage.todoItems = JSON.stringify(arr);
}

// 從 localStorage 讀出整個表，放進 <ul>
//
function load(){
//   if(!localStorage.todoItems){return;}

//   // 從 localStorage 裡讀出陣列 JSON 字串
//   // 把 JSON 字串轉回陣列
//   var arr = JSON.parse( localStorage.todoItems ), i, li;

//   // 對於陣列裡的每一個項目，插入回 mainUl 裡。
//   for(i=0; i<arr.length; i+=1){
//     li = $(tmpl);
//     // TODO: 修改此處，讀取「已完成」與否，來決定是否要加上 `is-done`。
//     li.appendTo(mainUl).find('span').text(arr[i].text);
//     if (arr[i].isDone) {
//       li.addClass('is-done');
//     };
//   }
}

// 課堂練習一
// 讓按鈕可以拖來拖去
connected.sortable({
  connectWith: connected,
  tolerance: 'pointer'
});

// 課堂練習二
// 拖曳時顯示隱藏兩個選單
mainUl.on('sortstart', function(){
  placeholder.addClass('is-dragging');
}).on('sortstop', function(){
  placeholder.removeClass('is-dragging');
  save();
});

// 課堂練習三
// 刪除項目
deleteUl.on('sortreceive', function(e, ui){
  ui.item.remove();
  save();
});

// [TODO] 回家作業
// 完成項目
doneUl.on('sortreceive', function(e, ui){
  ui.item.appendTo(mainUl).addClass('is-done');
  save();
});

}());