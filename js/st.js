$(document).ready(function(){
    //윈도우 사이즈 레이아웃
    let ww=$(window).width();
    let wh=$(window).height();
    function layout(){
        ww=$(window).width();
        wh=$(window).height();
        $(".wrap").css({
            width:ww
        })
        $(".page").css({
            width:ww,
            height:wh,
            position:"relative"
        })
        $(".hide_menu").css({
            width:500,
            height:wh-30
        })
        //메인 페이지
        $(".main_img").css({
            width:ww*0.3,
            height:ww*0.38,
            marginTop:-ww*0.18,
            marginLeft:-ww*0.15
        })
        $(".main_pret").css({
            width:ww*0.32,
            height:ww*0.27,
        })
        $(".main_font").css({
            width:ww*0.32,
            height:ww*0.17,
        })
        //메인페이지_재료아이콘
        $(".flour").css({
            top:wh*0.2,
            left:ww*0.1
        })
        $(".egg").css({
            top:wh*0.45,
            left:ww*0.25
        })
        $(".butter").css({
            top:wh*0.7,
            left:ww*0.15
        })
        $(".salt").css({
            top:wh*0.64,
            right:ww*0.2
        })
        $(".sugar").css({
            top:wh*0.4,
            right:ww*0.12
        })
        $(".pack_butter").css({
            top:wh*0.12,
            right:ww*0.2
        })

        //어바웃 페이지
        $(".about_box").css({
            width:ww,
            height:wh
        })

        //스킬페이지 가로 1659 이하부터는 페이지 길이 1.5배
        if(ww<=1659 && ww>=1366){
            $(".skills_page").css({
                height:wh*1.5
            })
        }else{
            $(".skills_page").css({
                height:wh
            })
        }

        //포트폴리오 페이지
        $(".pc_mask").css({
            width:ww,
            height:wh*0.8,
            marginTop:-wh*0.4
        })
        $(".move_box").css({
            width:ww*4,
            height:"100%",
        })
        $(".port_box").css({
            width:ww,
            height:"100%",
        })
        $(".pret_box").css({
            width:ww*0.25,
            height:ww*0.25,
        })
        $(".pink_box").css({
            marginTop:-ww*0.3,
            marginLeft:-ww*0.5,
        })
        $(".almond_box").css({
            marginTop:-ww*0.25,
            marginLeft:ww*0.25,
        })
        $(".tomato_box").css({
            marginTop:ww*0.05,
            marginLeft:ww*0.3,
        })
        $(".choco_box").css({
            marginTop:ww*0.02,
            marginLeft:-ww*0.5,
        })
    
        //포트폴리오 페이지 안 프레첼들
        let pbw=$(".pret_box").width();
        let pbh=$(".pret_box").height();
        $(".pretzel").css({
            width:pbw*0.65,
            height:pbh*0.6,
            marginTop:-pbh*0.32,
            marginLeft:-pbw*0.4,
        })
        $(".pink").css({
            width:pbw*0.5,
        })


        //엔딩페이지
        $("footer").css({
            width:ww,
            height:0
        })

        //페이지 필터 길이 = wrap 길이 받아오기
        let wrapHeight=$(".wrap").height();
        $(".page_filter").css({
            height:wrapHeight,
            position:"absolute", top:0
        })
    } //윈도우 사이즈 레이아웃 끝

    layout();

    $(window).resize(function(){
        layout();
    })


    //숨김메뉴
    let but_num=0;
    $(".menu_but").click(function(){
        but_num++;
        // 숨김메뉴 열리면 페이지 필터 활성화
        if(but_num==1){
            hide_menu_f("block");
            $(".page").addClass("page_blur");
        }else if(but_num==2){
            hide_menu_f("none");
            $(".page").removeClass("page_blur");
            but_num=0;
        }
        $(".page_filter").click(function(){
            //숨김메뉴 버튼 클릭할 때=페이지 필터 클릭할 때 같은 효과
            hide_menu_f("none");
            $(".page").removeClass("page_blur");
            but_num=0;
        })

    })
    //숨김메뉴 내부의 각 메뉴 항목에 hover하면 화살표 나타나기
    $(".hide_menu_box").hover(function(){
        $(".arrow_icon",this).addClass("arrow")
    },function(){
        $(".arrow_icon",this).removeClass("arrow")
    })
    

    // **스크롤이벤트 관련 변수

    // 메인페이지
    // 배경 아이콘 top값
    let flour_top=$(".flour").offset().top;
    let butter_top=$(".butter").offset().top;
    let salt_top=$(".salt").offset().top;
    let sugar_top=$(".sugar").offset().top;
    let egg_top=$(".egg").offset().top;
    let pack_butter_top=$(".pack_butter").offset().top;


    // 포트폴리오페이지
    // 스크롤값에 따른 프레첼 회전 제어용 변수
    let pret_deg=0;
    // 스크롤값에 따른 메인 텍스트박스 움직임 제어 변수
    let box_moving=0;
    function site_preview_moving(){
        //마스크박스 길이
        let pc_prev_box_height=$(".wrap").find(".pc_prev_box").eq(box_moving).height();
        //이미지 길이
        let site_preview_move_box_height=$(".wrap").find(".site_preview_move_box").eq(box_moving).height();
        //이미지 길이 - 마스크박스 길이 => 애니메이션 끝나고 마지막 페이지 보이게
        let site_preview_move_height=site_preview_move_box_height - pc_prev_box_height;
        //10초 길이로 애니메이션 보여주기
        $(".site_preview_move_box").stop().animate({
            top:`-${site_preview_move_height}px`
        },10000,function(){
            $(".site_preview_move_box").css({top:0});
        })
    }

    //스킬페이지 탭메뉴 클릭 효과
    $(".skill_page_tab_con").hide();
    $(".skill_page_tab_con").eq(0).show();
    $(".skill_menu").click(function(){
        let skill_menu_click_num=$(this).index();
        $(".skill_page_tab_con").fadeOut(500);
        $(".skill_page_tab_con").eq(skill_menu_click_num).fadeIn(500);

    })
    
    // 스크롤 업/다운 판단용 변수
    let sct=0;
    let wsct=$(window).scrollTop();
    let direction='';
    // **스크롤이벤트 시작
    $(window).scroll(function(){
        wsct=$(window).scrollTop();

        let about_page=$('.about_page').offset().top;
        let skill_page=$('.skills_page').offset().top;
        let portfolio_page=$('.portfolio_page').offset().top;
        let last_page=$('.last_page').offset().top;

        //스크롤 업다운
        
        if(sct<=wsct){
            direction='down';

            // 메인페이지 스크롤다운
            if(wsct>=about_page){
                $(".flour").css({top: `${flour_top+wsct*0.5}px`})
                $(".butter").css({top: `${butter_top+wsct*0.7}px`})
                $(".salt").css({top: `${salt_top+wsct*0.6}px`})
                $(".sugar").css({top: `${sugar_top+wsct*0.5}px`})
                $(".egg").css({top: `${egg_top+wsct*0.6}px`})
                $(".pack_butter").css({top: `${pack_butter_top+wsct*0.5}px`})       
            }

            //2페이지 스크롤다운
            wsct=$(window).scrollTop();
            absct=wsct*0.27;
            if(about_page<wsct&&wsct<=skill_page){
                $(".about_page").css({
                    position:"relative",
                    top:0,
                    height:wh*4
                })  
                $(".about_box").css({
                    position:"fixed",
                    'clip-path':`circle(${absct}px at 50% 50%)`
                })  
                console.log()
            }
            else{
                $(".about_box").css({
                    position:"relative",
                    'clip-path':`circle(0px at 50% 50%)`
                })
            }
            // 4페이지 스크롤다운
            if(portfolio_page<wsct && wsct<last_page && ww>1366){
                portfolio_page_port_fuction();
            }
            else{
                $(".portfolio_page").css({
                    height:wh
                })
                $(".portfolio_page_in_wrap").css({
                    position:"relative", top:0
                })
            }
            
            // 5페이지 마지막페이지 스크롤다운
            if(wsct>=last_page){
                $("footer").animate({height:wh*0.3},500);
            }
            else{
                $("footer").css({height:0});
            }

            sct=wsct;
        }else if(sct>wsct){
            direction='up';
            // 메인페이지 스크롤다운
            if(wsct>=about_page){
                $(".flour").css({top: `${flour_top}px`})
                $(".butter").css({top: `${butter_top}px`})
                $(".salt").css({top: `${salt_top}px`})
                $(".sugar").css({top: `${sugar_top}px`})
                $(".egg").css({top: `${egg_top}px`})
                $(".pack_butter").css({top: `${pack_butter_top}px`})       
            }
            
            
                //2페이지 스크롤업
            if(about_page<wsct&&wsct<=skill_page){
                    $(".about_page").css({
                        position:"relative",
                        top:0,
                        height:wh*4
                    })  
                    $(".about_box").css({
                        position:"fixed",
                        'clip-path':`circle(${absct}px at 50% 50%)`,
                    })  
                }
                else{
                $(".about_box").css({
                    position:"relative",
                    'clip-path':`circle(0px at 50% 50%)`
                })
                } 
        
           // 4페이지 스크롤업
                if(portfolio_page<wsct && wsct<last_page && ww>1366){
                    portfolio_page_port_fuction();
                }
                else{
                    $(".portfolio_page").css({
                        height:wh
                    })
                    $(".portfolio_page_in_wrap").css({
                        position:"absolute", top:0
                    })
                    $(".icon_img").css({
                        display:"block"
                    })
                }

        // 5페이지 마지막페이지 스크롤다운
        if(wsct>=last_page){
                $("footer").animate({height:wh*0.3},500);
            }
            else{
                $("footer").css({height:0});
            }        
            sct=wsct;
        }


    }) //스크롤 이벤트 끝

    // 프레첼 hover효과 함수
    function setHoverEvents(selector, layoutFunction, offFunction) {
        $(selector).hover(
            function() {
                layoutFunction();
            },
            function() {
                offFunction();
            }
        );
    }

    // 프레첼 hover효과 함수 호출
    setHoverEvents(".pink", pink_layout, pink_off);
    setHoverEvents(".almond", almond_layout, almond_off);
    setHoverEvents(".tomato", tomato_layout, tomato_off);
    setHoverEvents(".choco", choco_layout, choco_off);

    function setLayoutAndOff(layoutFunction, offFunction1, offFunction2, offFunction3) {
        layoutFunction();
        offFunction1();
        offFunction2();
        offFunction3();
    }
    

    // * 아래부터 함수 모음

    //포트폴리오 페이지 내에서 일어나는 스크롤 이벤트
    function portfolio_page_port_fuction(){
        pret_deg+=60;
        $(".pretzel").css({
            rotate: pret_deg+"deg"
        })
        $(".portfolio_page").css({
            height:wh*1.5
        })
        $(".portfolio_page_in_wrap").css({
            position:"fixed", top:0
        })
        $(".icon_img").css({
            display:"none"
        })
        box_moving++;
        if(box_moving<4){
            $(".move_box").animate({
                left:-box_moving*ww
            },500)
            if (box_moving == 1){
                setLayoutAndOff(almond_layout, pink_off, tomato_off, choco_off);
            } else if (box_moving == 2){
                setLayoutAndOff(tomato_layout, pink_off, almond_off, choco_off);
            } else if (box_moving == 3){
                setLayoutAndOff(choco_layout, pink_off, almond_off, tomato_off);
            }else if (box_moving == 4){
                setLayoutAndOff(pink_layout, almond_off, tomato_off, choco_off);
            }
            site_preview_moving();  
        }else if(box_moving>=4){
            $(".move_box").css({
                left:0
            })
            box_moving=0;
            site_preview_moving();        
        }

    }

    //포트폴리오 페이지 내 프레첼 메뉴 움직임 효과
    function pink_layout(){
        
        $(".pink").css({
            transform: "scale(1.2)"
        })
        $(".berry").css({
            top: 320,
            left: 400,
            rotate: "50deg"
        })
        $(".berry_1").css({
            width: 60,
            height: 60,
            bottom: 10,
            left: 10
        })
        $(".berry_2").css({
            bottom: 10,
            left: 70,
            rotate: "70deg"
        })
        $(".move_box").animate({
            left:0
        })
        $(".mid_parts").addClass("berry_class")
    }
    function pink_off(){
        $(".pink").css({
            transform: "scale(1)"
        })
        $(".pink_box").children(".parts").css({
            left: -150,
            bottom: 0
        })
        $(".mid_parts").removeClass("berry_class")
    }
    pink_off();
    function almond_layout(){
        $(".almond").css({
            transform: "scale(1.2)"
        })
        $(".parts_butter").css({
            width: 90,
            height: 70,
            top: 40,
            right: 400,
        })
        $(".parts_sugar").css({
            top: "50%",
            right: 450
        })
        $(".parts_sugar_1").css({
            top: 30,
            right: 50
        })
        $(".parts_almond").css({
            width: 120,
            height: 140,
            top: 300,
            right: 350
        })
        $(".move_box").animate({
            left:-ww
        })
        $(".mid_parts").addClass("almond_class")

    }
    function almond_off(){
        $(".almond").css({
            transform: "scale(1)"
        })
        $(".almond_box").children(".parts").css({
            top: -50,
            right: -150,
        })
        $(".mid_parts").removeClass("almond_class")
       
    }
    almond_off();
    function tomato_layout(){
        $(".tomato").css({
            transform: "scale(1.2)"
        })
        $(".parts_tomato").css({
            width: 60,
            height: 60,
            top: 120,
            right: -20,
        })
        $(".parts_tomato_1").css({
            top: 20,
            right: 300,
            rotate: "90deg"
        })
        $(".basil").css({
            width: 20,
            top: 160,
            right: 110,
            rotate: "90deg"
        })
        $(".basil_1").css({
            width: 40,
            height: 60,
            top: 300,
            right:500,
        })
        $(".move_box").animate({
            left:-ww*2
        })
        $(".mid_parts").addClass("tomato_class")

    }
    function tomato_off(){
        $(".tomato").css({
            transform: "scale(1)"
        })
        $(".tomato_box").children(".parts").css({
            top: 0,
            right: -150,
        })
        $(".mid_parts").removeClass("tomato_class")
  
    }
    tomato_off();
    function choco_layout(){
        $(".choco").css({
            transform: "scale(1.2)"
        })
        $(".parts_choco").css({
            width: 50,
            height: 50,
            top: 10,
            left: 60,
        })
        $(".parts_choco_1").css({
            width: 70,
            height: 70,
            top: 170,
            left: 450,
            rotate: "50deg",
        })
        $(".parts_been").css({
            top: 80,
            left: 40,
        })
        $(".parts_been_1").css({
            width: 30,
            height: 30,
            top: 250,
            left: 450,
            rotate: "50deg"
        })
        $(".move_box").animate({
            left:-ww*3
        })
        $(".mid_parts").addClass("choco_class")

    }
    function choco_off(){
        $(".choco").css({
            transform: "scale(1)"
        })
        $(".choco_box").children(".parts").css({
            top: 0,
            left: -150,
        })
        $(".mid_parts").removeClass("choco_class")
  
    }
    choco_off();

    //숨김메뉴 호출 함수
    function hide_menu_f(onoff){
        $(".page_filter").css({
            display:onoff
        })
        $(".hide_menu").css({
            display:onoff
        })
        $(".close_but").css({
            display:onoff
        })
        $(".close_txt").css({
            display:onoff
        })
        $(".hide_menu").css({
            filter: "blur(0)"
        })
    }

    // $(".swiper-pagination-progressbar-fill").css({
    //     backgroundColor : "#ffda69",
    // })
    // $(".swiper-pagination-progressbar .swiper-pagination-progressbar-fill").css({
    //     bottom:0
    // })

})// 제이쿼리 끝