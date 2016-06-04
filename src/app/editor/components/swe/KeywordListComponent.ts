import {Component, ComponentResolver, ViewContainerRef} from '@angular/core';
import {AbstractMetadataListComponent} from './AbstractMetadataListComponent';
import {KeywordList} from '../../../model/sml/KeywordList';
import {AbstractComponent} from '../base/AbstractComponent';
import {CardHeaderComponent} from '../basic/CardHeaderComponent';
import {StringsComponent} from '../basic/StringsComponent';

@Component({
    selector: 'swe-keyword-list',
    template: require('./KeywordListComponent.html'),
    host: {'[class.has-child]': 'hasChild'},
    styles: [require('../styles/editor-component.scss')],
    directives: [AbstractMetadataListComponent, CardHeaderComponent, StringsComponent]
})
export class KeywordListComponent extends AbstractComponent<KeywordList> {
    constructor(componentResolver: ComponentResolver, viewContainerRef: ViewContainerRef) {
        super(componentResolver, viewContainerRef);
    }

    protected createModel(): KeywordList {
        return new KeywordList();
    }
}
