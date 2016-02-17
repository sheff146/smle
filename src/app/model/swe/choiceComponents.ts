import { AbstractDataComponent, SweCategory } from './simpleComponents';

/**
 * Implementation of a choice of two or more Data Components (also called
 * disjoint union)
 */
export class SweDataChoice extends AbstractDataComponent {
  /**
   * This category component marks the data stream element that will indicate
   * the actual choice made. Possible choices are listed in the Category
   * constraint section as an enumeration and should map to item names.
   */
  choiceValue: SweCategory[];

  items: SweDataChoiceItem[];
}


export class SweDataChoiceItem {
  name: string;
  item: AbstractDataComponent;
}

export type SweChoiceComponent = SweDataChoice;