import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesService } from '../service/places.service';
import { RouterModule, Routes } from '@angular/router';
import { ChennaiComponent } from '../pages/chennai/chennai.component';
import { MaduraiComponent } from '../pages/madurai/madurai.component';
import { ThanjavurComponent } from '../pages/thanjavur/thanjavur.component';
import { CoimbatoreComponent } from '../pages/coimbatore/coimbatore.component';
import { KanchipuramComponent } from '../pages/kanchipuram/kanchipuram.component';
import { ThiruvannamalaiComponent } from '../pages/thiruvannamalai/thiruvannamalai.component';
import { MatIconModule } from '@angular/material/icon';
import { LikeComponent } from '../pages/like/like.component';
import { VelloreV1Component } from '../pages/vellore-v1/vellore-v1.component';
import { NilgiriComponent } from '../pages/nilgiri/nilgiri.component';
import { CoonoorComponent } from '../pages/coonoor/coonoor.component';
import { SalemComponent } from '../pages/salem/salem.component';
import { NagapattinamComponent } from '../pages/nagapattinam/nagapattinam.component';
import { DindigulComponent } from '../pages/dindigul/dindigul.component';
import { ThoothukudiComponent } from '../pages/thoothukudi/thoothukudi.component';

const routes: Routes = [
  { path: '', component: ChennaiComponent },
  { path: 'chennai', component: ChennaiComponent },
  { path: 'madurai', component: MaduraiComponent },
  { path: 'thanjavur', component: ThanjavurComponent },
  { path: 'covai', component: CoimbatoreComponent },
  { path: 'kanchipuram', component: KanchipuramComponent },
  { path: 'thiruvannamalai', component: ThiruvannamalaiComponent },
  { path: 'like', component: LikeComponent },
  { path: 'velloreV1', component: VelloreV1Component },
  { path: 'nilgiri', component: NilgiriComponent },
  { path: 'coonoor', component: CoonoorComponent },
  { path: 'salem', component: SalemComponent },
  { path: 'nagapattinam', component: NagapattinamComponent },
  { path: 'dindigul', component: DindigulComponent },
  { path: 'thoothukudi', component: ThoothukudiComponent },
];

@NgModule({
  declarations: [
    ChennaiComponent,
    MaduraiComponent,
    ThanjavurComponent,
    CoimbatoreComponent,
    LikeComponent,
    CoonoorComponent,
    SalemComponent,
    NagapattinamComponent,
    DindigulComponent,
    ThoothukudiComponent,
  ],
  providers: [PlacesService],
  imports: [CommonModule, RouterModule.forRoot(routes), MatIconModule],
  // if you need to show these components in another component, you need to export, then uncomment the below line
  // exports: [ChennaiComponent, MaduraiComponent, ThanjavurComponent, CoimbatoreComponent],
})
export class PlacesModule {}

