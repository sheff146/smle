import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { CardComponent } from '../basic/CardComponent';
import { EditorComponent } from '../base/EditorComponent';
import { AbstractSettingComponent } from './AbstractSettingComponent';
import { StatusSetting } from '../../../model/sml/StatusSetting';

@Component({
  selector: 'sml-status-setting',
  template: require('./StatusSettingComponent.html'),
  styles: [require('../styles/editor-component.scss')]
})
export class StatusSettingComponent extends EditorComponent<StatusSetting> implements OnInit {

  private valueSelected: boolean;

  constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
    super(componentFactoryResolver, viewContainerRef);
  }

  public ngOnInit() {
    this.valueSelected = this.model.value === 'enabled' ? true : false;
  }

  protected createModel(): StatusSetting {
    return new StatusSetting();
  }

  private updateValue(temp: any) {
    this.model.value = !this.valueSelected ? 'enabled' : 'disabled';
  }
}
