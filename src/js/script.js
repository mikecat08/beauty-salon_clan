$(function () {

  //=====================================
  //メインビジュアルのswiper設定
  //=====================================
  const mvSwiper = new Swiper (".mv-swiper", {
    
    effect: 'fade',

    // スライドが切り替わるスピード
    speed: 2000,

    // 自動再生の設定
    autoplay: {

      // スライド切り替わりの間隔
      delay: 4000,

      // スライド操作中は自動再生が停止する設定
      disableOnInteraction: true,
    },
  });


  //=====================================
  //スタイルセクションのswiper設定
  //=====================================

  // swiperの初期化
  const styleSwiper = new Swiper(".style-swiper", {

    // ループ設定
    loop: true,

    // スライドが切り替わるスピード
    speed: 1000,

    // スライドを1画面に何枚分表示させるか設定
    slidesPerView: 1.2,

    // スライドを中央寄せに設定
    centeredSlides : true,

    // スライド間の余白
    spaceBetween: 15,
    
    // 自動再生の設定
    autoplay: {

      // スライド切り替わりの間隔
      delay: 4000,

      // スライド操作中は自動再生が停止する設定
      disableOnInteraction: true,
    },
    
    // ページネーションのオプション設定
    pagination: {
      el: ".style-swiper-pagination",
      clickable: true
    },

    // ナビボタンの設定
    navigation: {
      nextEl: ".style-swiper-button-next",
      prevEl: ".style-swiper-button-prev"
    },

    // ブレイクポイント
    breakpoints: {
      484: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      }
    },
  });


  //=====================================
  //ヘッダーの透過を解除する動き
  //=====================================

  //ウィンドウがスクロールされたタイミングで下記の処理が動きます。
  $(window).scroll(function () {

    //ページ上端からウィンドウ上端までの距離を取得します。
    var scrollTop = $(this).scrollTop();

    //タイミングで、defaultというクラスが削除されます。
    if (scrollTop > 630) {
      $('#header').removeClass('default');
      //in-viewというクラスが付与されると、cssのアニメーションが動き始めます。
    } else if (scrollTop == 0) {
      $('#header').addClass('default');
    }
  });
});