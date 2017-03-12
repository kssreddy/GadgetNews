"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule,
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' },
            //{ provide: LocationStrategy, useClass: PathLocationStrategy },
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//import { InitImports } from './Init/InitImports';
//import { CycleCountImports } from './CycleCount/CycleCountImports';
//import { DeliverImports } from './Deliver/DeliverImports';
//import { PutawayImports } from './Putaway/PutawayImports';
//import { PointOfUseImports } from './PointOfUse/PointOfUseImports';
//import { BinToBinImports } from './BinToBin/BinToBinImports';
//import { ReceivingImports } from './Receiving/ReceivingImports';
//import { PickImports } from './Pick/PickImports';
//import { CartCountImports } from './CartCount/CartCountImports';
//import { TrackITImports } from './TrackIT/TrackITImports';
//import { StockIssueImports } from './StockIssue/StockIssueImports';
//import { AtPar_Init_Routes } from './Init/AtPar_Init_Routes';
//import { AtPar_CartCount_Routes } from './CartCount/AtPar_CartCount_Routes';
//import { AtPar_Pick_Routes } from './Pick/AtPar_Pick_Routes';
//import { AtPar_TrackIT_Routes } from './TrackIT/AtPar_TrackIT_Routes';
//import { AtPar_StockIssue_Routes } from './StockIssue/AtPar_StockIssue_Routes';
//import { AtPar_CycleCount_Routes } from './CycleCount/AtPar_CycleCount_Routes';
//import { AtPar_Deliver_Routes } from './Deliver/AtPar_Deliver_Routes';
//import { AtPar_Putaway_Routes } from './Putaway/AtPar_Putaway_Routes';
//import { AtPar_PointOfUse_Routes } from './PointOfUse/AtPar_PointOfUse_Routes';
//import { AtPar_BinToBin_Routes } from './BinToBin/AtPar_BinToBin_Routes';
//import { AtPar_Receiving_Routes } from './Receiving/AtPar_Receiving_Routes';
//# sourceMappingURL=app.module.js.map