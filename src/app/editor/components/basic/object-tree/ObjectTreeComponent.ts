import {Component, Input, OnChanges, SimpleChanges, HostListener} from '@angular/core';
import {TreeComponent} from 'angular2-tree-component';
import {AbstractProcess} from '../../../../model/sml/AbstractProcess';
import {getDisplayName} from '../../../../decorators/DisplayName';
import {TreeNodeComponent} from './TreeNodeComponent';

const emailRegex = new RegExp('^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$');
const urlRegex = new RegExp('^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?');

@Component({
    selector: 'object-tree',
    template: require('./ObjectTreeComponent.html'),
    styles: [require('../../styles/object-tree-component.scss')],
    directives: [TreeComponent]
})
export class ObjectTreeComponent implements OnChanges {
    @Input()
    model: AbstractProcess;

    private options = {
        treeNodeTemplate: TreeNodeComponent
    };

    private nodes: Array<INode> = [];

    @HostListener('mouseenter')
    private onMouseEnter(event) {
        this.rebuildTree(this.model, this.model);
    }

    private rebuildTree(previousModel, currentModel) {
        this.nodes = this.getNodes(currentModel);
    }

    ngOnChanges(changes: SimpleChanges) {
        var modelChange = changes['model'];

        if (modelChange) {
            this.rebuildTree(modelChange.previousValue, modelChange.currentValue);
        }
    }

    private onToggle(event) {
        event.node.data.isExpanded = event.isExpanded;
    }

    private getNodes(object: any): Array<INode> {
        var nodes: Array<INode>;
        var type = typeof object;

        if (object === null || type === 'undefined' || type === 'function') {
            return null;
        }

        if (object instanceof Array) {
            nodes = this.getNodesForArray(object);
        } else if (typeof object === 'object' && !(object instanceof Date)) {
            nodes = this.getNodesForObject(object);
        } else if (object instanceof Date) {
            nodes = [{
                id: '$value',
                name: object.toLocaleString().replace(/ /g, '\xa0'),
                type: type,
                children: null,
                isExpanded: false
            }];
        } else {
            if (type === 'string' && ObjectTreeComponent.isEmail(object)) {
                type = 'email';
            } else if (type === 'string' && ObjectTreeComponent.isUrl(object)) {
                type = 'url';
            }
            nodes = [{
                id: '$value',
                name: object.toString(),
                type: type,
                children: null,
                isExpanded: false
            }];
        }

        return nodes;
    }

    private getNodesForObject(object: Object): Array<INode> {
        var nodes: Array<INode> = [];

        for (let propertyName in object) {
            let nodeValue: any = object[propertyName];

            if (Object.prototype.hasOwnProperty(propertyName) ||
                nodeValue === undefined || nodeValue === null || nodeValue.length === 0) {
                continue;
            }

            let displayName = getDisplayName(object, propertyName) || propertyName;
            let newNode: INode = {
                id: propertyName,
                name: displayName,
                type: 'object',
                children: null,
                isExpanded: false
            };

            newNode.children = this.getNodes(nodeValue);
            nodes.push(newNode);
        }

        return nodes;
    }

    private getNodesForArray(array: Array<any>): Array<INode> {
        var nodes = <Array<any>>array.map((elem: any, index: number) => {
            var node: INode = {
                id: index.toString(),
                name: null,
                type: null,
                children: null,
                isExpanded: false
            };

            var name = elem.toString();
            var type = typeof elem;

            if (type === 'object' && !(elem instanceof Date) || elem instanceof Array) {
                node.children = this.getNodes(elem);
            } else if (elem instanceof Date) {
                name = elem.toLocaleString().replace(/ /g, '\xa0');
            } else if (type === 'string' && ObjectTreeComponent.isEmail(name)) {
                type = 'email';
            } else if (type === 'string' && ObjectTreeComponent.isUrl(name)) {
                type = 'url';
            }

            node.name = name;
            node.type = type;

            return node;
        });

        return nodes;
    }

    private static isEmail(string) {
        return emailRegex.test(string);
    }

    private static isUrl(string) {
        return urlRegex.test(string);
    }
}

interface INode {
    id: string;
    name: string;
    type: string;
    children: Array<INode>;
    isExpanded: boolean;
}