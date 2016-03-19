import { Component } from 'angular2/core';
import { Address } from '../../../../model/iso/gmd/Address';
import { AbstractComponent } from '../../AbstractEditorComponent';
import { CardHeaderComponent } from '../../CardHeaderComponent';
import { StringsComponent } from '../../StringsComponent';

@Component({
  selector: 'isoAddressNew',
  template: require('./AddressComponentNew.html'),
  directives: [CardHeaderComponent, StringsComponent]
})
export class AddressComponentNew extends AbstractComponent<Address> {
  protected createModel(): Address {
    return new Address();
  }
}
