
import { Injectable } from '@angular/core';

import { Colors as IColors } from '../modules/colors';
import { Logger } from './logger';

@Injectable()
export class Colors implements IColors{

    private colorList: string[] = [];

    constructor (private logger: Logger) {

    }

    public getAll = () => {
        this.logger.log('retrieved color list');
        return this.colorList;
    }

    public addColor = (color: string) => {
        this.colorList.push(color);
        this.logger.log('added color: ' + color);
    }
}
