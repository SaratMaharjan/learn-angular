
import { Injectable } from '@angular/core';

import { Colors as IColors } from '../modules/colors';
import { Logger } from './logger';

@Injectable()
export class ColorsImmutable implements IColors{

    private colorList: string[] = [];

    constructor (private logger: Logger) {

    }

    public getAll = () => {
        this.logger.log('retrieved color list from immutable');
        return this.colorList;
    }

    public addColor = (color: string) => {
        this.logger.log('added color immutably: ' + color);
        this.colorList = this.colorList.concat(color);
    }
}
