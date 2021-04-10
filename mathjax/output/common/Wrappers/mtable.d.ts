import { AnyWrapper, WrapperConstructor, Constructor } from '../Wrapper.js';
import { CommonMtr } from './mtr.js';
export declare type TableData = {
    H: number[];
    D: number[];
    W: number[];
    NH: number[];
    ND: number[];
    L: number;
};
export declare type ColumnWidths = (string | number | null)[];
export interface CommonMtable<C extends AnyWrapper, R extends CommonMtr<C>> extends AnyWrapper {
    numCols: number;
    numRows: number;
    hasLabels: boolean;
    isTop: boolean;
    container: AnyWrapper;
    containerI: number;
    frame: boolean;
    fLine: number;
    fSpace: number[];
    cSpace: number[];
    rSpace: number[];
    cLines: number[];
    rLines: number[];
    cWidths: (number | string)[];
    data: TableData;
    pwidthCells: [C, number][];
    pWidth: number;
    readonly tableRows: R[];
    childNodes: R[];
    findContainer(): void;
    getPercentageWidth(): void;
    stretchRows(): void;
    stretchColumns(): void;
    stretchColumn(i: number, W: number): void;
    getTableData(): TableData;
    updateHDW(cell: C, i: number, j: number, H: number[], D: number[], W?: number[]): void;
    setColumnPWidths(): void;
    getBBoxHD(height: number): number[];
    getBBoxLR(): number[];
    getPadAlignShift(side: string): [number, string, number];
    getWidth(): number;
    getEqualRowHeight(): number;
    getComputedWidths(): number[];
    getColumnWidths(): ColumnWidths;
    getEqualColumns(width: string): ColumnWidths;
    getColumnWidthsAuto(swidths: string[]): ColumnWidths;
    getColumnWidthsPercent(widths: string[]): ColumnWidths;
    getColumnWidthsFixed(swidths: string[], width: number): ColumnWidths;
    getVerticalPosition(i: number, align: string): number;
    getEmHalfSpacing(fspace: number, space: number[]): string[];
    getRowHalfSpacing(): number[];
    getColumnHalfSpacing(): number[];
    getAlignmentRow(): [string, number | null];
    getColumnAttributes(name: string, i?: number): string[];
    getRowAttributes(name: string, i?: number): string[];
    getAttributeArray(name: string): string[];
    addEm(list: number[], n?: number): string[];
    convertLengths(list: string[]): number[];
}
export declare type MtableConstructor<C extends AnyWrapper, R extends CommonMtr<C>> = Constructor<CommonMtable<C, R>>;
export declare function CommonMtableMixin<C extends AnyWrapper, R extends CommonMtr<C>, T extends WrapperConstructor>(Base: T): MtableConstructor<C, R> & T;
