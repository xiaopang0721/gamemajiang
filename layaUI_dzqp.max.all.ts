
module ui.dzqp.game_ui.sichuanmajiang.component {
    export class btn_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Button","props":{"stateNum":1,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_t.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":50,"x":50,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_t.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.component.btn_1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.sichuanmajiang.component {
    export class btn_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Button","props":{"stateNum":1,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_tt.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":50,"x":50,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_tt.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.component.btn_2UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.sichuanmajiang.component {
    export class btn_3UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Button","props":{"stateNum":1,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_w.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":50,"x":50,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_w.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.component.btn_3UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.sichuanmajiang.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":63,"x":49,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":64,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":6,"x":0,"wordWrap":true,"width":100,"var":"text_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Text","props":{"y":108,"x":-7,"wordWrap":true,"width":110,"var":"text_money","text":"0","leading":6,"height":21,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]}]},{"type":"Image","props":{"y":62,"x":101,"var":"img_type","skin":"majiang_ui/game_ui/sichuanmajiang/tu_tt.png","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.component.TouXiangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.sichuanmajiang.component {
    export class TouXiang1UI extends View {
		public img_head:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":63,"x":49,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":64,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":6,"x":0,"wordWrap":true,"width":100,"var":"text_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Text","props":{"y":108,"x":-7,"wordWrap":true,"width":110,"var":"text_money","text":"0","leading":6,"height":21,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]}]},{"type":"Image","props":{"y":62,"x":1,"var":"img_type","skin":"majiang_ui/game_ui/sichuanmajiang/tu_tt.png","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.component.TouXiang1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.sichuanmajiang {
    export class SiChuanMaJiangUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public text_mangzhu:laya.display.Text;
		public text_cardroomid:laya.display.Text;
		public text_round:laya.display.Text;
		public view_player0:ui.dzqp.game_ui.sichuanmajiang.component.TouXiangUI;
		public view_player1:ui.dzqp.game_ui.sichuanmajiang.component.TouXiang1UI;
		public view_player2:ui.dzqp.game_ui.sichuanmajiang.component.TouXiang1UI;
		public view_player3:ui.dzqp.game_ui.sichuanmajiang.component.TouXiangUI;
		public box_banker:Laya.Box;
		public img_north:Laya.Image;
		public img_east:Laya.Image;
		public img_south:Laya.Image;
		public img_west:Laya.Image;
		public clip_num0:Laya.Clip;
		public clip_num1:Laya.Clip;
		public box_xuan:Laya.Box;
		public view_tong:ui.dzqp.game_ui.sichuanmajiang.component.btn_1UI;
		public view_tiao:ui.dzqp.game_ui.sichuanmajiang.component.btn_2UI;
		public view_wan:ui.dzqp.game_ui.sichuanmajiang.component.btn_3UI;
		public box_opt:Laya.Box;
		public btn_gang:Laya.Button;
		public btn_peng:Laya.Button;
		public btn_hu:Laya.Button;
		public btn_guo:Laya.Button;
		public btn_menu:Laya.Button;
		public btn_closen:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_cardtype:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_qifu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"skin":"majiang_ui/game_ui/sichuanmajiang/tu_d0.png","height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"majiang_ui/game_ui/sichuanmajiang/doudizhu.jpg"}},{"type":"Image","props":{"y":0,"x":0,"skin":"majiang_ui/game_ui/sichuanmajiang/麻将.png"}},{"type":"Box","props":{"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":234,"x":459,"width":366,"var":"text_mangzhu","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#ffffff"}},{"type":"Text","props":{"y":55,"x":87,"width":153,"var":"text_cardroomid","text":"房间号：000008","leading":6,"height":25,"fontSize":20,"color":"#e0ff00"}},{"type":"Text","props":{"y":27,"x":87,"width":153,"var":"text_round","text":"四川麻将（00/00）","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"TouXiang","props":{"y":432,"x":21,"var":"view_player0","runtime":"ui.dzqp.game_ui.sichuanmajiang.component.TouXiangUI"}},{"type":"TouXiang1","props":{"y":194,"x":1160,"var":"view_player1","runtime":"ui.dzqp.game_ui.sichuanmajiang.component.TouXiang1UI"}},{"type":"TouXiang1","props":{"y":6,"x":979,"var":"view_player2","runtime":"ui.dzqp.game_ui.sichuanmajiang.component.TouXiang1UI"}},{"type":"TouXiang","props":{"y":194,"x":21,"var":"view_player3","runtime":"ui.dzqp.game_ui.sichuanmajiang.component.TouXiangUI"}},{"type":"Box","props":{"var":"box_banker","centerY":-30,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"majiang_ui/game_ui/sichuanmajiang/tu_fx.png"}},{"type":"Image","props":{"y":8,"x":16,"var":"img_north","skin":"majiang_ui/game_ui/sichuanmajiang/tu_b0.png"}},{"type":"Image","props":{"y":12,"x":90,"var":"img_east","skin":"majiang_ui/game_ui/sichuanmajiang/tu_d0.png"}},{"type":"Image","props":{"y":83,"x":16,"var":"img_south","skin":"majiang_ui/game_ui/sichuanmajiang/tu_l0.png"}},{"type":"Image","props":{"y":12,"x":12,"var":"img_west","skin":"majiang_ui/game_ui/sichuanmajiang/tu_x0.png"}},{"type":"Clip","props":{"y":46,"x":45,"var":"clip_num0","skin":"majiang_ui/game_ui/sichuanmajiang/clip_sz.png","clipX":10}},{"type":"Clip","props":{"y":46,"x":67,"var":"clip_num1","skin":"majiang_ui/game_ui/sichuanmajiang/clip_sz.png","clipX":10}}]},{"type":"Box","props":{"y":527,"width":324,"var":"box_xuan","height":150,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":96,"x":103,"width":128,"text":"缺一门才能胡","leading":6,"height":25,"fontSize":20,"color":"#e0ff00"}},{"type":"btn_1","props":{"y":40,"x":53,"var":"view_tong","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.sichuanmajiang.component.btn_1UI"}},{"type":"btn_2","props":{"y":40,"x":165,"var":"view_tiao","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.sichuanmajiang.component.btn_2UI"}},{"type":"btn_3","props":{"y":40,"x":277,"var":"view_wan","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.sichuanmajiang.component.btn_3UI"}}]},{"type":"Box","props":{"y":527,"x":909,"width":538,"var":"box_opt","height":110,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":51,"x":161.5,"var":"btn_gang","stateNum":1,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_gg.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":51,"x":268.5,"var":"btn_peng","stateNum":1,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_p.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":51,"x":376.5,"var":"btn_hu","stateNum":1,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_h.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":51,"x":483.5,"var":"btn_guo","stateNum":1,"skin":"majiang_ui/game_ui/sichuanmajiang/btn_guo.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":52,"x":47,"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":1234,"var":"btn_closen","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":0,"x":10,"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":293,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":74,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":216,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":145,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":86,"x":14,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":16,"x":14,"var":"btn_cardtype","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":227,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":157,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"y":52,"x":1159,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"ui/game_ui/sichuanmajiang/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"ui/game_ui/sichuanmajiang/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.dzqp.game_ui.sichuanmajiang.component.TouXiangUI",ui.dzqp.game_ui.sichuanmajiang.component.TouXiangUI);
			View.regComponent("ui.dzqp.game_ui.sichuanmajiang.component.TouXiang1UI",ui.dzqp.game_ui.sichuanmajiang.component.TouXiang1UI);
			View.regComponent("ui.dzqp.game_ui.sichuanmajiang.component.btn_1UI",ui.dzqp.game_ui.sichuanmajiang.component.btn_1UI);
			View.regComponent("ui.dzqp.game_ui.sichuanmajiang.component.btn_2UI",ui.dzqp.game_ui.sichuanmajiang.component.btn_2UI);
			View.regComponent("ui.dzqp.game_ui.sichuanmajiang.component.btn_3UI",ui.dzqp.game_ui.sichuanmajiang.component.btn_3UI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.SiChuanMaJiangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.sichuanmajiang {
    export class SiChuanMaJiang_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public btn_tab:Laya.Tab;
		public panal_wanfa:Laya.Panel;
		public img_wanfa:Laya.Image;
		public img_opt:Laya.Image;
		public panal_jiesuan:Laya.Panel;
		public img_type:Laya.Image;
		public panal_settle:Laya.Panel;
		public img_settle:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"scaleY":1.25,"scaleX":1.25,"height":531,"centerY":1,"centerX":-5,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png"}},{"type":"Image","props":{"y":0,"x":785,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png","scaleX":-1}},{"type":"Image","props":{"y":29,"x":397,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":66,"x":15,"width":756,"var":"btn_tab","space":4,"skin":"tongyong_ui/game_ui/tongyong/hud/tab_bq.png","labels":"玩法介绍,操作介绍,牌型说明,结算计分","labelSize":20,"labelColors":"#cacaca,#cacaca,#ffffff","height":58}},{"type":"Panel","props":{"y":130,"x":20,"width":754,"var":"panal_wanfa","height":356},"child":[{"type":"Image","props":{"var":"img_wanfa","skin":"majiang_ui/game_ui/sichuanmajiang/guize_1.png","height":442}}]},{"type":"Image","props":{"y":130,"x":20,"var":"img_opt","skin":"majiang_ui/game_ui/sichuanmajiang/guize_2.png"}},{"type":"Panel","props":{"y":131,"x":21,"width":746,"var":"panal_jiesuan","height":353},"child":[{"type":"Image","props":{"var":"img_type","skin":"majiang_ui/game_ui/sichuanmajiang/guize_3.png","height":486}}]},{"type":"Panel","props":{"y":131,"x":21,"width":744,"var":"panal_settle","height":353},"child":[{"type":"Image","props":{"var":"img_settle","skin":"majiang_ui/game_ui/sichuanmajiang/guize_4.png","height":629}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.SiChuanMaJiang_GuiZeUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.sichuanmajiang {
    export class SiChuanMaJiang_HUDUI extends View {
		public view_hud:ui.dzqp.game_ui.tongyong.HudUI;
		public box_normal:Laya.Box;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public lab_least0:Laya.Label;
		public lab_money0:Laya.Label;
		public img_room1:Laya.Image;
		public lab_least1:Laya.Label;
		public lab_money1:Laya.Label;
		public img_room2:Laya.Image;
		public lab_least2:Laya.Label;
		public lab_money2:Laya.Label;
		public img_room3:Laya.Image;
		public lab_money3:Laya.Label;
		public lab_least3:Laya.Label;
		public box_fangka:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"majiang_ui/game_ui/sichuanmajiang/zjh.jpg","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"skin":"majiang_ui/game_ui/sichuanmajiang/zjh_rw.png","left":0,"bottom":0,"anchorY":0.5,"anchorX":0}},{"type":"Hud","props":{"var":"view_hud","top":0,"right":0,"left":0,"bottom":0,"runtime":"ui.dzqp.game_ui.tongyong.HudUI"}},{"type":"Box","props":{"width":910,"var":"box_normal","top":0,"skewY":0,"right":0,"mouseThrough":true,"height":720,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"var":"box_right","right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":112,"var":"img_room0","skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png","right":610,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":59,"x":133,"wordWrap":true,"width":140,"var":"lab_least0","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":105,"x":133,"wordWrap":true,"width":196,"var":"lab_money0","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#122452","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":352,"var":"img_room1","skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png","right":610,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":58,"x":133,"wordWrap":true,"width":140,"var":"lab_least1","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":103,"x":133,"wordWrap":true,"width":196,"var":"lab_money1","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#361147","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room2","skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png","right":330,"name":"item2","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":151,"x":134,"skin":"majiang_ui/game_ui/sichuanmajiang/difen_03_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":298,"x":135,"wordWrap":true,"width":140,"var":"lab_least2","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":343,"x":136,"wordWrap":true,"width":196,"var":"lab_money2","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#0a4121","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room3","skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png","right":50,"name":"item3","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":151,"x":135,"skin":"majiang_ui/game_ui/sichuanmajiang/difen_04_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":343,"x":137,"wordWrap":true,"width":196,"var":"lab_money3","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#5d360d","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":298,"x":136,"wordWrap":true,"width":140,"var":"lab_least3","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]},{"type":"Image","props":{"top":24,"skin":"majiang_ui/game_ui/sichuanmajiang/zjh_title.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":0,"x":0,"width":910,"var":"box_fangka","top":0,"skewY":0,"right":0,"mouseThrough":true,"height":720,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":232,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka.png","right":421,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":43,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka2.png"}}]},{"type":"Image","props":{"y":232,"x":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka1.png","right":72,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":39,"x":83,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_fangka3.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.HudUI",ui.dzqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.sichuanmajiang.SiChuanMaJiang_HUDUI.uiView);
        }
    }
}
