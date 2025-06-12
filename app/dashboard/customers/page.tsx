'use client';
import { useRef, useEffect, useState } from 'react';

export default function Page() {


  const s_visuals_Refs = useRef([] as any);
  const [count, setCount] = useState(1);
  const prevCountRef = useRef(count);

  function sc(event: string) {
    // Placeholder for tracking function  
  }

    // 自动增加计数器
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      console.log(`值变化: 从 ${prevCountRef.current} 变为 ${count}`);


      const prev = (prevCountRef.current - 1 ) % s_visuals_Refs.current.length;
      s_visuals_Refs.current[prev].classList.remove('prev', 'active');
      const current = prevCountRef.current % s_visuals_Refs.current.length;
      s_visuals_Refs.current[current].classList.add('prev');
      const next = count % s_visuals_Refs.current.length;
      s_visuals_Refs.current[next].classList.add('active');
      prevCountRef.current = count;
  }, [count]);


  return (
      <div id="common_v5_main" className="common_v5_main type-pc type-win">
        <section id="s_visuals" className="section s_visuals show onEnter" data-type="s_visuals">
          <div className="section__inner">
              <div className="s_visuals__list">
                  <div className="container">
                      <a ref={el => s_visuals_Refs.current[0] = el} className="s_visuals__item active" href="/models/lbx/" target="_self" onClick={() => sc('lexus:top:new:1st:models-lbx')}>
                          <div className="s_visuals__item__head">
                              <div className="s_visuals__item__head__inner">
                                  <h3 className="title"><span className="bk">LBX</span><span className="wh">LBX</span></h3>
                                  <div className="link">
                                      <h4 className="description">
                                          LEXUS、「LBX」を一部改良するとともに<br/>”Active”を追加設定<br/>多様なお客様の感性に寄り添う<br/>ラインアップを拡充
                                      </h4>
                                      <div className="btn_detail"><span>詳細はこちら</span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="s_visuals__item__image s_visuals__item__image--1 loaded" data-src="/common/top/images/visuals/slide_lbx_sp.jpg" data-srcset="/common/top/images/visuals/slide_lbx_pc.jpg">
                              <picture>
                                  <source srcSet="/common/top/images/visuals/slide_lbx_pc.jpg.webp" media="(min-width:768px)" sizes="100%"/>
                                  <img alt="" src="/common/top/images/visuals/slide_lbx_sp.jpg.webp"/>
                              </picture>
                          </div>
                      </a>

                      <a ref={el => s_visuals_Refs.current[1] = el} className="s_visuals__item" href="/models/es/worldpremiere/" target="_self" onClick={() =>  sc('lexus:top:new:1st:models-es')}>
                          <div className="s_visuals__item__head">
                              <div className="s_visuals__item__head__inner">
                                  <h3 className="title"><span className="bk">ES</span><span className="wh">ES</span></h3>
                                  <div className="link">
                                      <h4 className="description">
                                          LEXUS、新型「ES」を世界初公開<br/>グローバル基幹モデルが、多様な<br/>電動車モデルラインアップで全面刷新
                                      </h4>
                                      <div className="btn_detail"><span>詳細はこちら</span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="s_visuals__item__image s_visuals__item__image--2 loaded" data-src="/common/top/images/visuals/slide_es_sp.jpg" data-srcset="/common/top/images/visuals/slide_es_pc.jpg">
                              <picture>
                                  <source srcSet="/common/top/images/visuals/slide_es_pc.jpg.webp" media="(min-width:768px)" sizes="100%"/>
                                  <img alt="" src="/common/top/images/visuals/slide_es_sp.jpg.webp"/>
                              </picture>
                          </div>
                      </a>
                      <a ref={el => s_visuals_Refs.current[2] = el} className="s_visuals__item" href="/models/gx/" target="_self" onClick={() => sc('lexus:top:new:1st:models-gx')}>
                          <div className="s_visuals__item__head">
                              <div className="s_visuals__item__head__inner">
                                  <h3 className="title"><span className="bk">GX</span><span className="wh">GX</span></h3>
                                  <div className="link">
                                      <h4 className="description">
                                          「GX550」国内販売を開始<br/>オンからオフまでシーンを選ばず、<br/>あらゆる道を走破し、新たな体験を<br/>提供する本格オフローダー
                                      </h4>
                                      <div className="btn_detail"><span>詳細はこちら</span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="s_visuals__item__image s_visuals__item__image--3 loaded" data-src="/common/top/images/visuals/slide_gx_sp.jpg" data-srcset="/common/top/images/visuals/slide_gx_pc.jpg">

                              <picture>
                                  <source srcSet="/common/top/images/visuals/slide_gx_pc.jpg.webp" media="(min-width:768px)" sizes="100%"/>
                                  <img alt="" src="/common/top/images/visuals/slide_gx_sp.jpg.webp"/>
                              </picture>
                          </div>
                      </a>
                      <a ref={el => s_visuals_Refs.current[3] = el} className="s_visuals__item" href="/models/rz/worldpremiere/" target="_self" onClick={() => sc('lexus:top:new:1st:models-rz_worldpremiere')}>
                          <div className="s_visuals__item__head">
                              <div className="s_visuals__item__head__inner">
                                  <h3 className="title"><span className="bk">RZ</span><span className="wh">RZ</span></h3>
                                  <div className="link">
                                      <h4 className="description">
                                          「RZ」の新型モデルを世界初公開<br/>次世代の操舵感覚をもたらす<br/>ステアバイワイヤの採用で<br/>新しいドライビング体験を提供
                                      </h4>
                                      <div className="btn_detail"><span>詳細はこちら</span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="s_visuals__item__image s_visuals__item__image--4 loaded" data-src="/common/top/images/visuals/slide_rz_sp.jpg" data-srcset="/common/top/images/visuals/slide_rz_pc.jpg">

                              <picture>
                                  <source srcSet="/common/top/images/visuals/slide_rz_pc.jpg.webp" media="(min-width:768px)" sizes="100%"/>
                                  <img alt="" src="/common/top/images/visuals/slide_rz_sp.jpg.webp"/>
                              </picture>
                          </div>
                      </a>


                      <a ref={el => s_visuals_Refs.current[4] = el} className="s_visuals__item" href="/models/lx/" target="_self" onClick={() => sc('lexus:top:new:1st:models-lx')}>

                          <div className="s_visuals__item__head">
                              <div className="s_visuals__item__head__inner">
                                  <h3 className="title"><span className="bk">LX</span><span className="wh">LX</span></h3>
                                  <div className="link">
                                      <h4 className="description">
                                          「LX」の新型モデルを発売<br/>新開発ハイブリッドシステムを搭載した<br/>「LX700h」を新規設定
                                      </h4>
                                      <div className="btn_detail"><span>詳細はこちら</span></div>
                                  </div>
                              </div>
                          </div>
                          <div className="s_visuals__item__image s_visuals__item__image--5 loaded" data-src="/common/top/images/visuals/slide_lx_sp.jpg" data-srcset="/common/top/images/visuals/slide_lx_pc.jpg">

                              <picture>
                                  <source srcSet="/common/top/images/visuals/slide_lx_pc.jpg.webp" media="(min-width:768px)" sizes="100%"/>
                                  <img alt="" src="/common/top/images/visuals/slide_lx_sp.jpg.webp"/>
                              </picture>
                          </div>
                      </a>

                  </div>
                  <div className="s_visuals__indicator">
                      <div className="slide_indicator type--sp_bk type--pc_bk">
                          <div className="slide_indicator__inner">
                              <div className="item"></div>
                              <div className="item active"></div>
                              <div className="item"></div>
                              <div className="item"></div>
                              <div className="item"></div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </section>
    </div>
  
  
  );
}