import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Practice3 Component',
    loadComponent: () => import('./components/practice3/practice3.component')
  },
  {
    path: 'pra1',
    title: 'Practice1 Component',
    loadComponent: () => import('./components/practice1/practice1.component')
  },
  {
    path: 'pra2',
    title: 'Practice2 Component',
    loadComponent: () => import('./components/practice2/practice2.component')
  },
  {
    path: 'temp',
    title: 'Template Driven Form',
    loadComponent: () =>
      import('./components/template/template.component').then((m) => m.TemplateComponent),
  },
  {
    path: 'reactive',
    title: 'Reactive Form',
    loadComponent: () =>
      import('./components/reactive/reactive.component').then((m) => m.ReactiveComponent),
  },
  {
    path: 'nested',
    title: 'Nested Form',
    loadComponent: () =>
      import('./components/nested-form/nested-form.component').then((m) => m.NestedFormComponent),
  },
  {
    path: 'arrayForm',
    title: 'ArrayForm Form',
    loadComponent: () =>
      import('./components/array-form/array-form.component').then((m) => m.ArrayFormComponent),
  },
  {
    path:'observable',
    title: 'Observable',
    loadComponent: () => 
      import('./components/observable/observable.component').then((m)=> m.ObservableComponent)
  },
  {
    path:'dataSet',
    title:'Data Set',
    loadComponent: () =>
      import('./components/data-set/data-set.component').then((m)=>m.DataSetComponent)
  },
  {
    path:'async',
    title: 'Async Operations',
    loadComponent: () => 
      import('./components/async/async.component').then((m)=>m.AsyncComponent)
  },
  {
    path:'pra',
    title:'Practice Component',
    loadComponent: () => import('./components/practice/practice.component').then((m)=>m.PracticeComponent)
  },
  {
    path:'life',
    title:'Life Cycle Methods',
    loadComponent: ()=> import('./components/life-cycle/life-cycle.component')
    .then((m)=>m.LifeCycleComponent)
  },
  {
    path:'life1',
    title:'Life Cycle Methods1',
    loadComponent: ()=> import('./components/life-cycle1/life-cycle1.component')
    .then((m)=>m.LifeCycle1Component)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
