import { Address } from '../../model/iso/gmd/Address';
import { Contact } from '../../model/iso/gmd/Contact';
import { LegalConstraints } from '../../model/iso/gmd/LegalConstraints';
import { NAMESPACES } from './Namespaces';
import { OnlineFunction } from '../../model/iso/gmd/OnlineFunction';
import { OnlineResource } from '../../model/iso/gmd/OnlineResource';
import { Phone } from '../../model/iso/gmd/Phone';
import { ResponsibleParty } from '../../model/iso/gmd/ResponsibleParty';
import { Restriction } from '../../model/iso/gmd/Restriction';
import { Role } from '../../model/iso/gmd/Role';
import { DecoderUtils } from './DecoderUtils';

export class IsoDecoder {

    private utils = new DecoderUtils();

    public decodeContact(elem: Element): Contact {
        let contactElem = this.utils.getElement(elem, 'CI_Contact', NAMESPACES.GMD);
        if (contactElem != null) {
            let contact = new Contact();

            let phoneElem = this.utils.getElement(contactElem, 'phone', NAMESPACES.GMD);
            if (phoneElem != null)
                contact.phone = this.decodePhone(phoneElem);

            let addressElem = this.utils.getElement(contactElem, 'address', NAMESPACES.GMD);
            if (addressElem != null)
                contact.address = this.decodeAddress(addressElem);

            let onlineResourceElem = this.utils.getElement(contactElem, 'onlineResource', NAMESPACES.GMD);
            if (onlineResourceElem != null)
                contact.onlineResource = this.decodeOnlineResource(onlineResourceElem);

            let hoursOfServiceElem = this.utils.getElement(contactElem, 'hoursOfService', NAMESPACES.GMD);
            if (hoursOfServiceElem != null)
                contact.hoursOfService = this.getDecodedCharacterString(hoursOfServiceElem);

            let contactInstructionsElem = this.utils.getElement(contactElem, 'contactInstructions', NAMESPACES.GMD);
            if (contactInstructionsElem != null)
                contact.contactInstructions = this.getDecodedCharacterString(contactInstructionsElem);

            return contact;
        }
    }

    public decodePhone(elem: Element): Phone {
        let phoneElem = this.utils.getElement(elem, 'CI_Telephone', NAMESPACES.GMD);
        if (phoneElem != null) {
            let phone = new Phone();

            phone.voice = this.utils.getDecodedList(
                phoneElem,
                'voice',
                NAMESPACES.GMD,
                (voice) => this.getDecodedCharacterString(voice));

            phone.facsimile = this.utils.getDecodedList(
                phoneElem,
                'facsimile',
                NAMESPACES.GMD,
                (facsimile) => this.getDecodedCharacterString(facsimile));

            return phone;
        }
    }

    public decodeOnlineResource(elem: Element): OnlineResource {
        let onlineResourceElem = this.utils.getElement(elem, 'CI_OnlineResource', NAMESPACES.GMD);
        if (onlineResourceElem != null) {
            let onlineResource = new OnlineResource();

            let linkageElem = this.utils.getElement(onlineResourceElem, 'linkage', NAMESPACES.GMD);
            if (linkageElem != null)
                onlineResource.linkage = this.getDecodedUrl(linkageElem);

            let protocolElem = this.utils.getElement(onlineResourceElem, 'protocol', NAMESPACES.GMD);
            if (protocolElem != null)
                onlineResource.protocol = this.getDecodedCharacterString(protocolElem);

            let applicationProfileElem =
                this.utils.getElement(onlineResourceElem, 'applicationProfile', NAMESPACES.GMD);
            if (applicationProfileElem != null)
                onlineResource.applicationProfile = this.getDecodedCharacterString(applicationProfileElem);

            let nameElem = this.utils.getElement(onlineResourceElem, 'name', NAMESPACES.GMD);
            if (nameElem != null)
                onlineResource.name = this.getDecodedCharacterString(nameElem);

            let descriptionElem = this.utils.getElement(onlineResourceElem, 'description', NAMESPACES.GMD);
            if (descriptionElem != null)
                onlineResource.description = this.getDecodedCharacterString(descriptionElem);

            let functionElem = this.utils.getElement(onlineResourceElem, 'function', NAMESPACES.GMD);
            if (functionElem != null)
                onlineResource.function = this.decodeOnlineFunction(functionElem);

            return onlineResource;
        }
    }

    public decodeAddress(elem: Element): Address {
        let addressElem = this.utils.getElement(elem, 'CI_Address', NAMESPACES.GMD);
        if (addressElem != null) {
            let address = new Address();

            let cityElem = this.utils.getElement(addressElem, 'city', NAMESPACES.GMD);
            if (cityElem != null)
                address.city = this.getDecodedCharacterString(cityElem);

            let administrativeAreaElem = this.utils.getElement(addressElem, 'administrativeArea', NAMESPACES.GMD);
            if (administrativeAreaElem != null)
                address.administrativeArea = this.getDecodedCharacterString(administrativeAreaElem);

            let postalCodeElem = this.utils.getElement(addressElem, 'postalCode', NAMESPACES.GMD);
            if (postalCodeElem != null)
                address.postalCode = this.getDecodedCharacterString(postalCodeElem);

            let countryElem = this.utils.getElement(addressElem, 'country', NAMESPACES.GMD);
            if (countryElem != null)
                address.country = this.getDecodedCharacterString(countryElem);

            address.deliveryPoint = this.utils.getDecodedList(
                addressElem,
                'deliveryPoint',
                NAMESPACES.GMD,
                (deliveryPoint) => this.getDecodedCharacterString(deliveryPoint));

            address.electronicMailAddress = this.utils.getDecodedList(
                addressElem,
                'electronicMailAddress',
                NAMESPACES.GMD,
                (electronicMailAddress) => this.getDecodedCharacterString(electronicMailAddress));

            return address;
        }
    }

    public decodeResponsibleParty(elem: Element): ResponsibleParty {
        let respPartyElem = this.utils.getElement(elem, 'CI_ResponsibleParty', NAMESPACES.GMD);

        if (respPartyElem != null) {
            let respParty = new ResponsibleParty();

            let individualNameElem = this.utils.getElement(respPartyElem, 'individualName', NAMESPACES.GMD);
            if (individualNameElem != null)
                respParty.individualName = this.getDecodedCharacterString(individualNameElem);

            let organisationNameElem = this.utils.getElement(respPartyElem, 'organisationName', NAMESPACES.GMD);
            if (organisationNameElem != null)
                respParty.organisationName = this.getDecodedCharacterString(organisationNameElem);

            let positionNameElem = this.utils.getElement(respPartyElem, 'positionName', NAMESPACES.GMD);
            if (positionNameElem != null)
                respParty.positionName = this.getDecodedCharacterString(positionNameElem);

            let contactInfoElem = this.utils.getElement(respPartyElem, 'contactInfo', NAMESPACES.GMD);
            if (contactInfoElem != null)
                respParty.contactInfo = this.decodeContact(contactInfoElem);

            let roleElem = this.utils.getElement(respPartyElem, 'role', NAMESPACES.GMD);
            if (roleElem != null)
                respParty.role = this.decodeRole(roleElem);

            return respParty;
        }
    }

    public decodeRole(elem: Element): Role {
        let roleElem = this.utils.getElement(elem, 'CI_RoleCode', NAMESPACES.GMD);
        if (roleElem != null) {
            let role = roleElem.getAttribute('codeListValue');
            if (role.indexOf('resourceProvider') >= 0) return 'resourceProvider';
            if (role.indexOf('custodian') >= 0) return 'custodian';
            if (role.indexOf('user') >= 0) return 'user';
            if (role.indexOf('originator') >= 0) return 'originator';
            if (role.indexOf('pointOfContact') >= 0) return 'pointOfContact';
            if (role.indexOf('principalInvestigator') >= 0) return 'principalInvestigator';
            if (role.indexOf('processor') >= 0) return 'processor';
            if (role.indexOf('publisher') >= 0) return 'publisher';
            if (role.indexOf('author') >= 0) return 'author';
            if (role.indexOf('owner') >= 0) return 'owner';
        }
    }

    public decodeOnlineFunction(elem: Element): OnlineFunction {
        let onlineFunctionElem = this.utils.getElement(elem, 'CI_OnLineFunctionCode', NAMESPACES.GMD);
        if (onlineFunctionElem != null) {
            let onlineFunction = onlineFunctionElem.getAttribute('codeListValue');
            if (onlineFunction.indexOf('download') >= 0) return 'download';
            if (onlineFunction.indexOf('information') >= 0) return 'information';
            if (onlineFunction.indexOf('offlineAccess') >= 0) return 'offlineAccess';
            if (onlineFunction.indexOf('order') >= 0) return 'order';
            if (onlineFunction.indexOf('search') >= 0) return 'search';
        }
    }

    public decodeRestriction(elem: Element): Restriction {
        let restrictionElem = this.utils.getElement(elem, 'MD_RestrictionCode', NAMESPACES.GMD);
        if (restrictionElem != null) {
            let restriction = restrictionElem.getAttribute('codeListValue');
            if (restriction.indexOf('copyright') >= 0) return 'copyright';
            if (restriction.indexOf('patent') >= 0) return 'patent';
            if (restriction.indexOf('patentPending') >= 0) return 'patentPending';
            if (restriction.indexOf('trademark') >= 0) return 'trademark';
            if (restriction.indexOf('license') >= 0) return 'license';
            if (restriction.indexOf('intellectualPropertyRights') >= 0) return 'intellectualPropertyRights';
            if (restriction.indexOf('restricted') >= 0) return 'restricted';
            if (restriction.indexOf('otherRestrictions') >= 0) return 'otherRestrictions';
        }
    }

    public decodeLegalConstraints(elem: Element): LegalConstraints {
        let legalConstraintsElem = this.utils.getElement(elem, 'MD_LegalConstraints', NAMESPACES.GMD);
        if (legalConstraintsElem != null) {
            let legalConstraints = new LegalConstraints();

            legalConstraints.accessConstraints = this.utils.getDecodedList(
                legalConstraintsElem,
                'accessConstraints',
                NAMESPACES.GMD,
                (accConst) => this.decodeRestriction(accConst));

            legalConstraints.useConstraints = this.utils.getDecodedList(
                legalConstraintsElem,
                'useConstraints',
                NAMESPACES.GMD,
                (useConst) => this.decodeRestriction(useConst));

            legalConstraints.otherConstraints = this.utils.getDecodedList(
                legalConstraintsElem,
                'otherConstraints',
                NAMESPACES.GMD,
                (otherConst) => this.getDecodedCharacterString(otherConst));

            return legalConstraints;
        }
    }

    private getDecodedCharacterString(elem: Element): string {
        let charStringElem = this.utils.getElement(elem, 'CharacterString', NAMESPACES.GCO);
        if (charStringElem != null) return charStringElem.textContent;
    }

    private getDecodedUrl(elem: Element): string {
        let urlElem = this.utils.getElement(elem, 'URL', NAMESPACES.GMD);
        if (urlElem != null) return urlElem.textContent;
    }
}
