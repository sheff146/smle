import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/primeng';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { TreeModule } from 'angular2-tree-component';

import { CardComponent } from './components/basic/CardComponent';
import { CheckboxComponent } from './components/basic/CheckboxComponent';
import { ChildItemComponent } from './components/basic/ChildItemComponent';
import { ListComponent, ListAddSection } from './components/basic/ListComponent';
import { MapComponent } from './components/basic/MapComponent';
import { NumberFieldComponent } from './components/basic/NumberFieldComponent';
import { PositionListComponent } from './components/basic/PositionListComponent';
import { StringsComponent } from './components/basic/StringsComponent';
import { TextFieldComponent } from './components/basic/TextFieldComponent';
import { ObjectTreeComponent } from './components/basic/object-tree/ObjectTreeComponent';
import { TreeNodeComponent } from './components/basic/object-tree/TreeNodeComponent';

import { AbstractFeatureComponent } from './components/gml/AbstractFeatureComponent';
import { AbstractGMLComponent } from './components/gml/AbstractGMLComponent';
import { CodeTypeComponent } from './components/gml/CodeTypeComponent';
import { DatePickerComponent } from './components/gml/DatePickerComponent';
import { TimeInstantComponent } from './components/gml/TimeInstantComponent';
import { TimePeriodComponent } from './components/gml/TimePeriodComponent';

import { AddressComponent } from './components/iso/gmd/AddressComponent';
import { ContactComponent } from './components/iso/gmd/ContactComponent';
import { OnlineResourceComponent } from './components/iso/gmd/OnlineResourceComponent';
import { PhoneComponent } from './components/iso/gmd/PhoneComponent';
import { ResponsiblePartyComponent } from './components/iso/gmd/ResponsiblePartyComponent';

import { AbstractMetadataListComponent } from './components/sml/AbstractMetadataListComponent';
import { AbstractNamedMetadataListComponent } from './components/sml/AbstractNamedMetadataListComponent';
import { AbstractPhysicalProcessComponent } from './components/sml/AbstractPhysicalProcessComponent';
import { AbstractProcessComponent } from './components/sml/AbstractProcessComponent';
import { AbstractSettingComponent } from './components/sml/AbstractSettingComponent';
import { AggregatingProcessComponent } from './components/sml/AggregatingProcessComponent';
import { CapabilityListComponent } from './components/sml/CapabilityListComponent';
import { CharacteristicListComponent } from './components/sml/CharacteristicListComponent';
import { ClassifierListComponent } from './components/sml/ClassifierListComponent';
import { ContactListComponent } from './components/sml/ContactListComponent';
import { DescribedObjectComponent } from './components/sml/DescribedObjectComponent';
import { DocumentListComponent } from './components/sml/DocumentListComponent';
import { EventComponent } from './components/sml/EventComponent';
import { EventListComponent } from './components/sml/EventListComponent';
import { IdentifierListComponent } from './components/sml/IdentifierListComponent';
import { ModeSettingComponent } from './components/sml/ModeSettingComponent';
import { NamedSweDataComponentComponent, SweFieldComponent }
    from './components/sml/NamedSweDataComponentComponent';
import { PhysicalComponentComponent } from './components/sml/PhysicalComponentComponent';
import { PhysicalSystemComponent } from './components/sml/PhysicalSystemComponent';
import { PositionEditorComponent } from './components/sml/PositionComponent';
import { SettingsComponent } from './components/sml/SettingsComponent';
import { SimpleProcessComponent } from './components/sml/SimpleProcessComponent';
import { StatusSettingComponent } from './components/sml/StatusSettingComponent';
import { TermComponent } from './components/sml/TermComponent';
import { ValueSettingComponent } from './components/sml/ValueSettingComponent';

import { AbstractAllowedValuesComponent } from './components/swe/AbstractAllowedValuesComponent';
import { AbstractDataComponentComponent } from './components/swe/AbstractDataComponentComponent';
import { AbstractNumericAllowedValuesComponent } from './components/swe/AbstractNumericAllowedValuesComponent';
import { AbstractSimpleComponentComponent } from './components/swe/AbstractSimpleComponentComponent';
import { AbstractSWEComponent } from './components/swe/AbstractSWEComponent';
import { AbstractSWEIdentifiableComponent } from './components/swe/AbstractSWEIdentifiableComponent';
import { AbstractSweRangeComponent } from './components/swe/AbstractSweRangeComponent';
import { AllowedTimesComponent } from './components/swe/AllowedTimesComponent';
import { AllowedTokensComponent } from './components/swe/AllowedTokensComponent';
import { AllowedValuesComponent } from './components/swe/AllowedValuesComponent';
import { KeywordListComponent } from './components/swe/KeywordListComponent';
import { SweBinaryBlockComponent } from './components/swe/SweBinaryBlockComponent';
import { SweBinaryComponentComponent } from './components/swe/SweBinaryComponentComponent';
import { SweBinaryEncodingComponent } from './components/swe/SweBinaryEncodingComponent';
import { SweBooleanComponent } from './components/swe/SweBooleanComponent';
import { SweCategoryComponent } from './components/swe/SweCategoryComponent';
import { SweCountComponent } from './components/swe/SweCountComponent';
import { SweDataArrayComponent } from './components/swe/SweDataArrayComponent';
import { SweDataRecordComponent } from './components/swe/SweDataRecordComponent';
import { SweElementTypeComponent } from './components/swe/SweElementTypeComponent';
import { SweEncodingComponent } from './components/swe/SweEncodingComponent';
import { SweQuantityComponent } from './components/swe/SweQuantityComponent';
import { SweQuantityRangeComponent } from './components/swe/SweQuantityRangeComponent';
import { SweTextComponent } from './components/swe/SweTextComponent';
import { SweTextEncodingComponent } from './components/swe/SweTextEncodingComponent';
import { SweTimeComponent } from './components/swe/SweTimeComponent';
import { SweTimeRangeComponent } from './components/swe/SweTimeRangeComponent';
import { SweXmlEncodingComponent } from './components/swe/SweXmlEncodingComponent';
import { TimePositionComponent } from './components/swe/TimePositionComponent';
import { UnitOfMeasureComponent } from './components/swe/UnitOfMeasureComponent';

@NgModule({
    declarations: [
        // basic components
        CardComponent,
        CheckboxComponent,
        ChildItemComponent,
        ListComponent,
        ListAddSection,
        MapComponent,
        NumberFieldComponent,
        PositionListComponent,
        StringsComponent,
        TextFieldComponent,
        ObjectTreeComponent,
        TreeNodeComponent,
        // gml components
        AbstractFeatureComponent,
        AbstractGMLComponent,
        CodeTypeComponent,
        DatePickerComponent,
        TimeInstantComponent,
        TimePeriodComponent,
        // iso components
        AddressComponent,
        ContactComponent,
        OnlineResourceComponent,
        PhoneComponent,
        ResponsiblePartyComponent,
        // sml components
        AbstractMetadataListComponent,
        AbstractNamedMetadataListComponent,
        AbstractPhysicalProcessComponent,
        AbstractProcessComponent,
        AbstractSettingComponent,
        AggregatingProcessComponent,
        CapabilityListComponent,
        CharacteristicListComponent,
        ClassifierListComponent,
        ContactListComponent,
        DescribedObjectComponent,
        DocumentListComponent,
        EventComponent,
        EventListComponent,
        IdentifierListComponent,
        ModeSettingComponent,
        NamedSweDataComponentComponent,
        SweFieldComponent,
        PhysicalComponentComponent,
        PhysicalSystemComponent,
        PositionEditorComponent,
        SettingsComponent,
        SimpleProcessComponent,
        StatusSettingComponent,
        TermComponent,
        ValueSettingComponent,
        // swe components
        AbstractAllowedValuesComponent,
        AbstractDataComponentComponent,
        AbstractNumericAllowedValuesComponent,
        AbstractSimpleComponentComponent,
        AbstractSWEComponent,
        AbstractSWEIdentifiableComponent,
        AbstractSweRangeComponent,
        AllowedTimesComponent,
        AllowedTokensComponent,
        AllowedValuesComponent,
        KeywordListComponent,
        SweBinaryBlockComponent,
        SweBinaryComponentComponent,
        SweBinaryEncodingComponent,
        SweBooleanComponent,
        SweCategoryComponent,
        SweCountComponent,
        SweDataArrayComponent,
        SweDataRecordComponent,
        SweElementTypeComponent,
        SweEncodingComponent,
        SweQuantityComponent,
        SweQuantityRangeComponent,
        SweTextComponent,
        SweTextEncodingComponent,
        SweTimeComponent,
        SweTimeRangeComponent,
        SweXmlEncodingComponent,
        TimePositionComponent,
        UnitOfMeasureComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CalendarModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        TreeModule
    ],
    exports: [
        // basic components
        CardComponent,
        CheckboxComponent,
        ChildItemComponent,
        ListComponent,
        MapComponent,
        NumberFieldComponent,
        PositionListComponent,
        StringsComponent,
        TextFieldComponent,
        ObjectTreeComponent,
        TreeNodeComponent,
        // gml components
        AbstractFeatureComponent,
        AbstractGMLComponent,
        CodeTypeComponent,
        DatePickerComponent,
        // sml components
        AbstractMetadataListComponent,
        AbstractNamedMetadataListComponent,
        AbstractPhysicalProcessComponent,
        AbstractProcessComponent,
        AbstractSettingComponent,
        AggregatingProcessComponent,
        CapabilityListComponent,
        ContactListComponent,
        DescribedObjectComponent,
        DocumentListComponent,
        EventComponent,
        EventListComponent,
        ModeSettingComponent,
        SweFieldComponent,
        PhysicalComponentComponent,
        PhysicalSystemComponent,
        PositionEditorComponent,
        SettingsComponent,
        SimpleProcessComponent,
        StatusSettingComponent,
        ValueSettingComponent,
        // swe components
        AbstractAllowedValuesComponent,
        AbstractDataComponentComponent,
        AbstractNumericAllowedValuesComponent,
        AbstractSimpleComponentComponent,
        AbstractSWEComponent,
        AbstractSWEIdentifiableComponent,
        AbstractSweRangeComponent,
        AllowedTimesComponent,
        AllowedTokensComponent,
        AllowedValuesComponent,
        SweBinaryBlockComponent,
        SweBinaryComponentComponent,
        SweBinaryEncodingComponent,
        SweBooleanComponent,
        SweCategoryComponent,
        SweCountComponent,
        SweDataArrayComponent,
        SweDataRecordComponent,
        SweElementTypeComponent,
        SweEncodingComponent,
        SweQuantityComponent,
        SweQuantityRangeComponent,
        SweTextComponent,
        SweTextEncodingComponent,
        SweTimeComponent,
        SweTimeRangeComponent,
        SweXmlEncodingComponent,
        TimePositionComponent,
        UnitOfMeasureComponent
    ],
    entryComponents: [
        KeywordListComponent,
        IdentifierListComponent,
        TermComponent,
        ClassifierListComponent,
        DocumentListComponent,
        EventListComponent,
        EventComponent,
        SettingsComponent,
        ValueSettingComponent,
        ModeSettingComponent,
        StatusSettingComponent,
        PositionEditorComponent,
        MapComponent,
        TimePeriodComponent,
        TimeInstantComponent,
        CharacteristicListComponent,
        NamedSweDataComponentComponent,
        CapabilityListComponent,
        ContactListComponent,
        ResponsiblePartyComponent,
        ContactComponent,
        PhoneComponent,
        AddressComponent,
        OnlineResourceComponent
    ]
})
export class EditorModule { }
