"use strict";(self.webpackChunknobleui_angular=self.webpackChunknobleui_angular||[]).push([[272],{4272:(U,l,n)=>{n.r(l),n.d(l,{PrintModule:()=>J});var a=n(6895),t=n(4650),g=n(5297),p=n(1481),d=n(265),s=n(8796);function v(o,i){if(1&o&&(t.TgZ(0,"ng-option",14),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function f(o,i){if(1&o&&(t.TgZ(0,"ng-option",14),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}let h=(()=>{class o{constructor(e,r){this._printService=e,this.sanitizer=r,this._printService.GetOneRecord("1").subscribe(m=>{1==m.status&&(this.oldForm=m.payload.form,this.myContentPreview=this.getSafeHtml(this.oldForm))})}getSafeHtml(e){return this.sanitizer.bypassSecurityTrustHtml(e)}ngOnInit(){this.salesUnit=[{id:0,name:"\u0110\u01a1n b\xe1n h\xe0ng"}]}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.$),t.Y36(p.H7))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-printf"]],decls:21,vars:5,consts:[[1,"row"],[1,"col-md-6"],[1,"col-6"],["placeholder","Ch\u1ecdn \u0110\u01a1n B\xe1n h\xe0ng",3,"searchable"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Chi nh\xe1nh",3,"searchable"],[1,"col-5","d-flex","offset-md-7"],["type","button",1,"btn","btn-light"],["type","button","routerLink","edit",1,"btn","btn-primary","ms-2"],[1,"row","my-3"],[1,"col-md-12","stretch-card"],[1,"card"],[1,"card-body"],[3,"innerHTML"],[3,"value"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",0)(3,"div",2)(4,"ng-select",3),t.YNc(5,v,2,2,"ng-option",4),t.qZA()(),t.TgZ(6,"div",2)(7,"ng-select",5),t.YNc(8,f,2,2,"ng-option",4),t.qZA()()()(),t.TgZ(9,"div",1)(10,"div",0)(11,"div",6)(12,"button",7),t._uU(13,"In Th\u1eed"),t.qZA(),t.TgZ(14,"button",8),t._uU(15,"Ch\u1ec9nh S\u1eeda"),t.qZA()()()()(),t.TgZ(16,"div",9)(17,"div",10)(18,"div",11)(19,"div",12),t._UZ(20,"div",13),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("searchable",!0),t.xp6(1),t.Q6J("ngForOf",r.salesUnit),t.xp6(2),t.Q6J("searchable",!0),t.xp6(1),t.Q6J("ngForOf",r.salesUnit),t.xp6(12),t.Q6J("innerHTML",r.myContentPreview,t.oJD))},dependencies:[a.sg,d.rH,s.w9,s.jq]}),o})();var C=n(9585),T=n(9628),Z=n(907),y=n(4826),P=n(5351),b=n(6134),u=n(433),A=n(1683),E=n(2997),c=n(4841);const x={suppressScrollX:!0},F=[{path:"",component:h}];let J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[{provide:c.op,useValue:x}],imports:[a.ez,d.Bz.forChild(F),C.xD,T.L,Z.dD,y.bB,P.bQ.forRoot({animation:150,ghostClass:"bg-light"}),b.ii.forRoot(),u.UX,s.A0,u.u5,E.IJ,A.d,c.Xd]}),o})()}}]);