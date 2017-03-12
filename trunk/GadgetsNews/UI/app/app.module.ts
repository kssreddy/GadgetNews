import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpModule, JsonpModule } from '@angular/http';
import { DataTableModule } from "angular2-datatable";
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';



@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        RouterModule,
       
    ],
    declarations: [
        AppComponent,
      
    ],

    bootstrap: [AppComponent],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        //{ provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        
    ]
})
export class AppModule { }















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
