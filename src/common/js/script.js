$(function () {

  //=====================================
  //fade upの動き
  //=====================================

  //ウィンドウがスクロールされたタイミングで下記の処理が動きます。
  $(window).scroll(function () {

    //ページ上端からウィンドウ上端までの距離を取得します。
    var scrollTop = $(this).scrollTop();

    //ページ上端からウィンドウ下端までの距離を取得します。
    var scrollBottom = scrollTop + $(this).height();

    //fadeup-targetというクラスを持つ要素それぞれに下記の処理を行います。
    //.each()が無いと全部のfadeup-targetクラスに対して一気に処理が行われてしまいます。
    $('.fadeup-target').each(function () {

      //ウィンドウ下端に対象要素が250px分見えたタイミングで、in-viewというクラスが付与されます。
      if (scrollBottom > $(this).offset().top + 250) {
        $(this).addClass('in-view');
        //in-viewというクラスが付与されると、cssのアニメーションが動き始めます。
      }
    });
  });


  //=====================================
  //ハンバーガーボタン開閉の動き
  //=====================================

  //何度も指定するので検索窓の指定を変数に格納します。
  var $burgerMenu = $('#burger-menu');
  var $burgerBtn = $('#burger-btn');

  //ハンバーガーボタンをクリックした時の動作
  $burgerBtn.on('click', function () {

    //ハンバーガーボタンがopenedというクラスを持っている場合
    if ($burgerBtn.hasClass('opened')) {

      //ハンバーガーボタンからopenedというクラスを削除します。
      $burgerBtn.removeClass('opened');
      //アコーディオンメニューをスライドアップで非表示にします。
      $burgerMenu.slideUp();
      //予約ボタンの不透明度を1にします。
      $('#reserve-btn').css('opacity', '1');
      //暗くなっている背景を元に戻す目的で、bgというidを持つ要素からactiveというクラスを取り除きます。
      $('#dark-mask').removeClass('active');
      //ヘッダーの背景色を透過に戻します。
      $('#spHeader').removeClass('bg-white');

      //ハンバーガーボタンがopenedというクラスを持っていない場合
    } else {

      //ハンバーガーボタンにopenedというクラスを付与します。
      $burgerBtn.addClass('opened');
      //ハンバーガーメニューをスライドダウンで表示させます。
      $burgerMenu.slideDown();
      //予約ボタンの不透明度を0にします。
      $('#reserve-btn').css('opacity', '0');
      //背景を暗くする目的で、bgというidを持つ要素にactiveというクラスを付与します。
      $('#dark-mask').addClass('active');
      //ヘッダーの背景色を白色にします。
      $('#spHeader').addClass('bg-white');
    }
  });


  //=============================================
  //ハンバーガーメニュー内のリンクをクリックした際の動き
  //=============================================

  var $burgerNav = $('.burger-menu_list-item');

  //ハンバーガーメニュー内のリンクをクリックした時
  $burgerNav.on('click', function () {

    //ハンバーガーボタンからopenedというクラスを無くします。
    $burgerBtn.removeClass('opened');
    //アコーディオンメニューを非表示にします。
    $burgerMenu.css('display', 'none');
    //予約ボタンの不透明度を1にします。
    $('#reserve-btn').css('opacity', '1');
    //暗くなっている背景を元に戻す目的で、bgというidを持つ要素からactiveというクラスを取り除きます。
    $('#dark-mask').removeClass('active');
  });


  //=====================================
  //背景モジュールパーツの縦横比調整
  //=====================================

  // ページが読み込まれたされた時に
  $(window).on("load", function () {

    // ブラウザの横幅を取得
    var windowWidth = $(window).width();

    // ブラウザの縦幅を取得
    var windowHeight = $(window).height();

    // ブラウザの横幅：縦幅の比率が16：10より縦長の場合
    if (windowWidth / windowHeight < 1.6) {

      // mod__bg_wrapperにsp_bgというクラスを付与します。
      $('#mod__bg_wrapper').addClass('sp_bg');
    }
  });

  // 画面幅が変更された際に
  $(window).resize(function () {

    // ブラウザの横幅を取得
    var windowWidth = $(window).width();

    // ブラウザの縦幅を取得
    var windowHeight = $(window).height();

    // ブラウザの横幅：縦幅の比率が16：10より縦長の場合
    if (windowWidth / windowHeight < 1.6) {

      // mod__bg_wrapperにsp_bgというクラスを付与します。
      $('#mod__bg_wrapper').addClass('sp_bg');
    }
  });


  //=====================================
  //ページ内繊維のスムーススクロール化
  //=====================================

  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動きません。）
  $('a[href^="#"]').click(function(){

    // 移動先をヘッダーの高さ分調整するための変数を定義します。
    var adjust = -65;

    // スクロールの速度（ミリ秒）
    var speed = 400;

    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

});