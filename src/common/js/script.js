$(function () {

  //=====================================
  //検索窓開閉の動き
  //=====================================

  //PC版
  //何度も指定するので検索窓の指定を変数に格納します。
  var $searchInput = $('#search-container .search-input');

  //虫眼鏡ボタンをクリックした時の動作
  $('#search-container .pc-search').on('click', function () {

    //検索窓がopenedというクラスを持っている場合
    if ($searchInput.hasClass('opened')) {

      //openedというクラスを無くして検索窓を非表示にします。
      $searchInput.removeClass('opened');
      $searchInput.addClass('closed');
      $searchInput.slideUp();

      //暗くなっている背景を元に戻す目的で、bgというidを持つ要素からactiveというクラスを取り除きます。
      $('#bg').removeClass('active');

      //検索窓がopenedというクラスを持っていない場合
    } else {

      //openedというクラスを付与して検索窓を表示します。
      $searchInput.addClass('opened');
      $searchInput.removeClass('closed');
      $searchInput.slideDown();

      //背景を暗くする目的で、bgというidを持つ要素にactiveというクラスを付与します。
      $('#bg').addClass('active');
    }
  });

  //SP版
  //何度も指定するので検索窓の指定を変数に格納します。
  var $searchInputSp = $('#search-input_sp');

  //虫眼鏡ボタンをクリックした時の動作
  $('#sp-search').on('click', function () {

    //検索窓がopenというクラスを持っている場合
    if ($searchInputSp.hasClass('opened')) {

      //openというクラスを無くして検索窓を非表示にします。
      $searchInputSp.removeClass('opened');
      $searchInputSp.slideUp();

      //検索窓がopenというクラスを持っていない場合
    } else {

      //openというクラスを付与して検索窓を表示します。
      $searchInputSp.addClass('opened');
      $searchInputSp.slideDown();
    }
  });


  //=====================================
  //グローバルナビ開閉の動き
  //=====================================

  //グローバルナビにカーソルが当たった際に、下記の処理が行われます。
  $('.js-dropdown-pc').hover(function () {

    //検索窓が閉じている場合にだけ動くようにします。
    if ($searchInput.hasClass('closed')) {
      //ホバーされたグローバルナビの子要素であるドロップダウンメニューを表示します。
      $(this).find('.js-dropdown-menu').stop().slideDown();
      //.stop()のメソッドを入れないとドロップダウンメニューの動きが止まらずにずっと上下し続ける時があります。

      //背景を暗くする目的で、bgというidを持つ要素にactiveというクラスを付与します。
      $('#bg').addClass('active');
    }
  });

  //グローバルナビのドロップダウンメニューからカーソルが離れた際に、下記の処理が行われます。
  $('.js-dropdown-pc').mouseleave(function () {

    //検索窓が閉じている場合にだけ動くようにします。
    if ($searchInput.hasClass('closed')) {
      //カーソルが離れたグローバルナビの子要素であるドロップダウンメニューが非表示になります。
      $(this).find('.js-dropdown-menu').stop().slideUp();
      //.stop()のメソッドを入れないとドロップダウンメニューの動きが止まらずにずっと上下し続ける時があります。

      //暗くなっている背景を元に戻す目的で、bgというidを持つ要素からactiveというクラスを取り除きます。
      $('#bg').removeClass('active');
    }
  });


  //=====================================
  //fade upの動き
  //=====================================

  //ウィンドウがスクロールされたタイミングで下記の処理が動きます。
  $(window).scroll(function () {

    //ドキュメント上端からウィンドウ上端までの距離を取得します。
    var scrollTop = $(this).scrollTop();

    //ドキュメント上端からウィンドウ下端までの距離を取得します。
    var scrollBottom = scrollTop + $(this).height();

    //fadeup-targetというクラスを持つ要素それぞれに下記の処理を行います。
    //.each()が無いと全部のfadeup-targetクラスに対して一気に処理が行われるっぽいです。
    $('.fadeup-target').each(function () {

      //ウィンドウ下端に対象要素が250px分見えたタイミングで、in-viewというクラスが付与されます。
      if (scrollBottom > $(this).offset().top + 250) {
        $(this).addClass('in-view');
        //in-viewというクラスが付与されると、cssのアニメーションが動き始めます。
      }
    });
  });
});


//=====================================
//ハンバーガーボタン開閉の動き
//=====================================

//何度も指定するので検索窓の指定を変数に格納します。
var $burgerMenu = $('#header-menu');
var $burgerBtn = $('#burger-btn');

//ハンバーガーボタンをクリックした時の動作
$burgerBtn.on('click', function () {

  //ハンバーガーボタンがactiveというクラスを持っている場合
  if ($burgerBtn.hasClass('active')) {

    //ハンバーガーボタンからactiveというクラスを無くします。
    $burgerBtn.removeClass('active');
    //アコーディオンメニューをスライドアップで非表示にします。
    $burgerMenu.slideUp();
    //検索アイコンの不透明度を1にします。
    $('#sp-search').css('opacity', '1');

    //ハンバーガーボタンがactiveというクラスを持っていない場合
  } else {

    //ハンバーガーボタンにactiveというクラスを付与します。
    $burgerBtn.addClass('active');
    //ハンバーガーメニューをスライドダウンで表示させます。
    $burgerMenu.slideDown();
    //検索アイコンの不透明度を0にします。
    $('#sp-search').css('opacity', '0');
  }
});


//=====================================
//アコーディオンメニュー開閉の動き
//=====================================

//アコーディオンメニュー開閉のトリガーとなるaタグをクリックした時の動作
$('.js-dropdown-sp .icon_bottomArrow').on('click', function () {

  //クリックされたaタグがopenedというクラスを持っている場合
  if ($(this).hasClass('opened')) {

    //クリックされたaタグからopenedというクラスを無くします。
    $(this).removeClass('opened');
    //クリックされたaタグの背景色を#fffに戻します。
    $(this).css('background-color', '#fff');
    //クリックされたaタグの兄弟要素をスライドアップで非表示にします。
    $(this).next('.global-megamenu').stop().slideUp();

    //クリックされたaタグがopenedというクラスを持っていない場合
  } else {

    //クリックされたaタグからopenedというクラスを無くします。
    $(this).addClass('opened');
    //クリックされたaタグの背景色を#e6f1f8に戻します。
    $(this).css('background-color', '#e6f1f8');
    //クリックされたaタグの兄弟要素をスライドダウンで表示させます。
    $(this).next('.global-megamenu').stop().slideDown();
  }
});